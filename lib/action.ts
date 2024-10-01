"use server";
import { z } from "zod";
import { put, del } from "@vercel/blob";
import prisma from "../lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { access } from "fs";
import { getBlogsById } from "./data";
import { RegisterSchema, SignInSchema } from "../lib/zod";
import { hashSync } from "bcrypt-ts";
import { signIn } from "../auth";
import { AuthError } from "next-auth";
import { auth } from "../auth";

const UploadSchema = z.object({
  title: z.string().min(6),
  content: z.string().min(150),
  image: z
    .instanceof(File)
    .refine((file) => file.size > 0, { message: "Image is Required" })
    .refine((file) => file.size === 0 || file.type.startsWith("image/"), {
      message: "Only Images Are Allowed",
    })
    .refine((file) => file.size < 4000000, {
      message: "Image size must be less than 4MB",
    }),
  category: z.string().nonempty({ message: "Category is required" }),
  status: z.string().nonempty({ message: "Status is required" }),
});

const EditSchema = z.object({
  title: z.string().min(6),
  content: z.string().min(150),
  image: z
    .instanceof(File)
    .refine((file) => file.size === 0 || file.type.startsWith("image/"), {
      message: "Only Images Are Allowed",
    })
    .refine((file) => file.size < 4000000, {
      message: "Image size must be less than 4MB",
    })
    .optional(),
  category: z.string().nonempty({ message: "Category is required" }),
  status: z.string().nonempty({ message: "Status is required" }),
});

export const saveBlog = async (prevState: unknown, formData: FormData) => {
  const session = await auth();
  if (!session || !session.user) {
    // Jika session tidak tersedia, kembalikan error atau arahkan ke login
    return { message: "You must be logged in to create a post." };
  }

  console.log(formData);

  const validatedFields = UploadSchema.safeParse(
    Object.fromEntries(formData.entries())
  );
  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }
  const { title, content, category, status, image } = validatedFields.data;
  const { url } = await put(image.name, image, {
    access: "public",
    multipart: true,
  });

  try {
    console.log("Trying to create blog post...");
    await prisma.blog.create({
      data: {
        title,
        content,
        category,
        status,
        image: url,
        userId: session.user.id as string,
      },
    });
    console.log("Blog post created");
  } catch (error) {
    console.error("Prisma Error:", error); // Tambahkan log ini untuk melihat kesalahan
    return { message: "Failed to create data" };
  }
  revalidatePath("/dashboard");
  redirect("/dashboard");
};

export const updateBlog = async (
  id: string,
  prevState: unknown,
  formData: FormData
) => {
  console.log(formData);

  const validatedFields = EditSchema.safeParse(
    Object.fromEntries(formData.entries())
  );
  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const data = await getBlogsById(id);
  if (!data) return { message: "No Data Found" };

  const { title, content, category, status, image } = validatedFields.data;
  let imagePath;
  if (!image || image.size <= 0) {
    imagePath = data.image;
  } else {
    await del(data.image);
    const { url } = await put(image.name, image, {
      access: "public",
      multipart: true,
    });
    imagePath = url;
  }

  try {
    console.log("Trying to create blog post...");
    await prisma.blog.update({
      data: {
        title,
        content,
        category,
        status,
        image: imagePath,
      },
      where: { id },
    });
    console.log("Blog post updated");
  } catch (error) {
    console.error("Prisma Error:", error); // Tambahkan log ini untuk melihat kesalahan
    return { message: "Failed to update data" };
  }
  revalidatePath("/dashboard");
  redirect("/dashboard");
};

export const deleteBlog = async (id: string) => {
  const data = await getBlogsById(id);
  if (!data) {
    return { message: "Blog post not found" };
  }
  await del(data.image);

  try {
    await prisma.blog.delete({
      where: { id },
    });
    console.log("Blog post deleted");
  } catch (error) {
    console.error("Prisma Error:", error); // Tambahkan log ini untuk melihat kesalahan
    return { message: "Failed to Delete data" };
  }
  revalidatePath("/dashboard");
};

export const signUpCredentials = async (
  prevState: unknown,
  formData: FormData
) => {
  const validatedFields = RegisterSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, password } = validatedFields.data;
  const hashedPassword = hashSync(password, 10);

  try {
    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
  } catch (error) {
    console.log(error);
    return { message: "Failed to register user" };
  }
  redirect("/login");
};

export const signInCredentials = async (
  prevState: unknown,
  formData: FormData
) => {
  const validatedFields = SignInSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validatedFields.data;

  try {
    await signIn("credentials", { email, password, redirectTo: "/dashboard" });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { message: "Invalid Credentials." };
        default:
          return { message: "Something went wrong." };
      }
    }
    throw error;
  }
};
