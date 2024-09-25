import { NextApiRequest, NextApiResponse } from "next";
import { getBlogs } from "../../lib/data";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "GET") {
      const { query = "", page = 1 } = req.query; // Mengambil query dan page dari query parameter
      const blogs = await getBlogs(query as string, parseInt(page as string)); // Mengirim argumen yang sesuai
      res.status(200).json(blogs); // Mengembalikan data blogs sebagai JSON
    } else {
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).json({ message: "Failed to fetch blog data" });
  }
}
