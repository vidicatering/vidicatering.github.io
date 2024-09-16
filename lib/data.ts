import prisma from "./prisma";

export const getBlogs = async () => {
  try {
    const blogs = await prisma.blog.findMany();
    return blogs;
  } catch (error) {
    throw new Error("Failed to fetch blog data");
  }
};

export const getBlogsById = async (id: string) => {
  try {
    const blogs = await prisma.blog.findUnique({
      where: { id },
    });
    return blogs;
  } catch (error) {
    throw new Error("Failed to fetch blog data");
  }
};

export const getImages = async () => {
  try {
    const result = await prisma.blog.findMany({
      orderBy: { createdAt: "desc" },
    });
    return result;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};
