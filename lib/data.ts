import prisma from "./prisma";

const ITEMS_PER_PAGE = 5;

export type Blog = {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  category: string;
  status: string;
  image: string;
  user: string;
};

export const getBlogs = async (
  query: string,
  currentPage: number
): Promise<Blog[]> => {
  // const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    const blogs = await prisma.blog.findMany({
      // skip: offset,
      // take: ITEMS_PER_PAGE,
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
      select: {
        id: true,
        title: true,
        content: true,
        createdAt: true,
        updatedAt: true,
        category: true,
        status: true,
        image: true,
        user: {
          select: {
            name: true, // Ambil hanya nama dari relasi user
          },
        },
      },
    });
    const formattedBlogs = blogs.map((blog) => ({
      ...blog,
      user: blog.user.name || "Unknown", // Jika user.name null, beri default 'Unknown'
    }));

    return formattedBlogs;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw new Error("Failed to fetch blog data");
  }
};

// export const getBlogPages = async (query: string): Promise<Blog[]> => {
//   try {
//     const blogs = await prisma.blog.findMany({
//       where: {
//         OR: [
//           {
//             title: {
//               contains: query,
//               mode: "insensitive",
//             },
//           },
//         ],
//       },
//     });
//     const totalPages = Math.ceil(Number(blogs) / ITEMS_PER_PAGE);
//     return totalPages;
//   } catch (error) {
//     console.error("Error fetching blogs:", error);
//     throw new Error("Failed to fetch blog data");
//   }
// };

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
