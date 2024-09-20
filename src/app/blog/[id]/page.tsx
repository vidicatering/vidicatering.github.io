import { GetServerSideProps } from "next";
import { Blog, getBlogs } from "../../../../lib/data";
import { formatDate } from "../../../../lib/utils";
import Image from "next/image";

type BlogDetailProps = {
  params: {
    id: string; // ID dari dynamic route
  };
};

const BlogDetail = async ({ params }: BlogDetailProps) => {
  const blogs: Blog[] = await getBlogs(); // Fetch all blogs
  const blog = blogs.find((b) => b.id === params.id); // Find blog with matching ID

  if (!blog) {
    return <p>Blog not found!</p>; // Jika blog tidak ditemukan
  }

  return (
    <div className="container my-28 px-20">
      <h1 className="text-5xl font-bold mb-4 text-center leading-tight">{blog.title}</h1>
      <div className="flex mb-8 justify-center ">
        <p className="text-lg text-red-500 font-medium mr-1">{blog.category}</p>
        <p className="text-lg">| {formatDate(blog.createdAt.toString())}</p>
      </div>
      <Image src={blog.image} alt={blog.title} width={1920} height={720} className="rounded-xl shadow-2xl w-[1024px] h-[600px] object-cover mx-auto mb-20" />
      <div
        className="text-xl"
        dangerouslySetInnerHTML={{ __html: blog.content }} // Set blog.content as inner HTML
      />
    </div>
  );
};

export default BlogDetail;
