import prisma from "./prisma";

export type Blog = {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  category: string;
  status: string;
  image: string;
};

export const getBlogs = async (
  query: string,
  currentPage: number
): Promise<Blog[]> => {
  try {
    const blogs = await prisma.blog.findMany({
      where: {
        OR: [
          {
            title: {
              contains: query,
              mode: "insensitive",
            },
          },
        ],
      },
    });
    return blogs;
  } catch (error) {
    console.error("Error fetching blogs:", error);
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
