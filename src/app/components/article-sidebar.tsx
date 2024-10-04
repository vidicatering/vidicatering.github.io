import { Blog, getBlogs } from "../../../lib/data";
import { ArticleCardRecomendation } from "./article-card";
import { formatDate } from "../../../lib/utils";

type BlogDetailProps = {
  params: {
    id: string; // ID dari dynamic route
  };
};

const ArticleSidebar = async () => {
  const blogs: Blog[] = await getBlogs("", 1); // Fetch all blogsFind blog with matching ID
  const newsBlogs = blogs.slice(0, 8);

  return (
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
  );
};

export default ArticleSidebar;
