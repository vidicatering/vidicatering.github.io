import { prisma } from "./prisma";

export const getBlogs = async () => {
  try {
    const blogs = await prisma.blogModel.findMany();
    return blogs;
  } catch (error) {
    throw new Error("Error fetching blogs");
  }
};
