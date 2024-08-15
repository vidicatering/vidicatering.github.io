import Link from "next/link";
import { getBlogs } from "../../../lib/data";
import Contact from "../component/Contact";
import Gallery from "../component/Gallery";
import Footer from "../component/Footer";

const BlogPage = async () => {
  const blogs = await getBlogs();

  return (
    <div className="lg:mx-32 mx-10">
      <div className="min-h-screen mx-auto mt-20 lg:px-32 px-10">
        <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-20">
          {blogs.map((blog) => (
            <article key={blog.id} className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
              <img
                alt={blog.title.slice(0, 15)}
                src={blog.image || "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"}
                className="h-56 w-full object-cover"
              />

              <div className="p-4 sm:p-6">
                <Link href={`/blogs/${blog.id}`}>
                  <h3 className="text-lg font-medium text-gray-900">{blog.title}</h3>
                </Link>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  {blog.content.slice(0, 150)}... {/* Contoh untuk mengambil sebagian konten */}
                </p>

                <Link href={`/blogs/${blog.id}`} className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
                  Find out more
                  <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                    &rarr;
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
      <Contact />
      <Gallery />
      <Footer />
    </div>
  );
};

export default BlogPage;
