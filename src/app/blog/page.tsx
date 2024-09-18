import { ArticleCardLeft, ArticleCardRight } from "../components/article-card";
import anis from "../../../public/img/anis.webp";
import { getBlogs } from "../../../lib/data";
import { formatDate } from "../../../lib/utils";

const BlogPage = async () => {
  try {
    const blogs = await getBlogs();
    const sortedBlogs = blogs.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    // Mengambil blog terbaru dan 3 blog terbaru setelahnya
    const latestBlog = sortedBlogs[0];
    const recentBlogs = sortedBlogs.slice(1, 4);
    return (
      <div className=" container mt-20">
        <div className="w-full mx-auto py-8 grid grid-cols-2 gap-16 justify-center items-center">
          {latestBlog && ( // Memastikan latestBlog tidak undefined
            <div key={latestBlog.id}>
              <ArticleCardLeft title={latestBlog.title} imageSrc={latestBlog.image} category={latestBlog.category} dateUpload={formatDate(latestBlog.createdAt.toString())} />
            </div>
          )}
          <div>
            {recentBlogs.map((blog, index) => (
              <div key={blog.id}>
                <section className="">
                  <ArticleCardRight title={blog.title} imageSrc={blog.image} category={blog.category} dateUpload={formatDate(blog.createdAt.toString())} />
                </section>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching blogs: ", error);
    return (
      <div className="container mt-20">
        <p>Something went wrong while fetching the blogs. Please try again later.</p>
      </div>
    );
  }
};

export default BlogPage;
