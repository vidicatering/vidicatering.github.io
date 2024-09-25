import { Blog, getBlogs } from "../../../../lib/data";
import { formatDate } from "../../../../lib/utils";
import Image from "next/image";
import {
  ArticleCardLatest,
  ArticleCardSmall,
  ArticleCardLeft,
  ArticleCardRight,
  ArticleCardRecomendation,
} from "../../components/article-card";
import Category from "../../components/category";
import Gallery from "../../components/Gallery";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

type BlogDetailProps = {
  params: {
    id: string; // ID dari dynamic route
  };
};

const BlogDetail = async ({ params }: BlogDetailProps) => {
  const blogs: Blog[] = await getBlogs("", 1); // Fetch all blogs
  const blog = blogs.find((b) => b.id === params.id); // Find blog with matching ID
  const newsBlogs = blogs.slice(0, 8);

  if (!blog) {
    return <p>Blog not found!</p>; // Jika blog tidak ditemukan
  }

  return (
    <div className="container mt-28 px-20">
      <h1 className="text-5xl font-bold mb-4 text-center leading-tight">
        {blog.title}
      </h1>
      <div className="flex mb-8 justify-center ">
        <p className="text-lg text-red-500 font-medium mr-1">{blog.category}</p>
        <p className="text-lg">| {formatDate(blog.createdAt.toString())}</p>
      </div>
      <Image
        src={blog.image}
        alt={blog.title}
        width={1920}
        height={720}
        className="rounded-xl shadow-2xl w-[1024px] h-[600px] object-cover mx-auto mb-20"
      />
      <div className="flex items-start justify-between pb-10">
        <div
          className="text-xl w-full h-full"
          dangerouslySetInnerHTML={{ __html: blog.content }} // Set blog.content as inner HTML
        />
        <aside className="w-[650px] border-l pl-10 ml-10">
          <div>
            <h2 className="mb-10 text-2xl font-medium uppercase">
              Postingan Lainnya
            </h2>
            {newsBlogs.map((blog, index) => (
              <div key={blog.id} className="">
                <div className="">
                  <ArticleCardRecomendation
                    id={blog.id}
                    title={blog.title}
                    content={blog.content}
                    imageSrc={blog.image}
                    category={blog.category}
                    dateUpload={formatDate(blog.createdAt.toString())}
                  />
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
      <div className="mb-20">
        <Category />
      </div>
      <Contact />
      <Gallery />
      <Footer />
    </div>
  );
};

export default BlogDetail;
