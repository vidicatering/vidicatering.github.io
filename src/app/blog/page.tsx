"use client";

import { useEffect, useState } from "react";
import {
  ArticleCardLatest,
  ArticleCardSmall,
  ArticleCardLeft,
  ArticleCardRight,
} from "../components/article-card";
import { Blog } from "../../../lib/data";
import { formatDate } from "../../../lib/utils";
import Loader from "../components/loading";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Category from "../components/category";

const BlogPage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blog", { cache: "no-store" });
        const blogsData: Blog[] = await res.json();
        setBlogs(
          blogsData.sort(
            (a, b) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          )
        );
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  const latestBlog = blogs[0];
  const latestNewsBlog = blogs.filter((blog) => blog.category === "News")[0];
  const latestResepBlog = blogs.filter((blog) => blog.category === "Resep")[0];
  const recentBlogs = blogs.slice(1, 5);
  const tipsBlogs = blogs
    .filter((blog) => blog.category === "Tips")
    .slice(0, 4);
  const newsBlogs = blogs
    .filter((blog) => blog.category === "News")
    .slice(1, 4);
  const resepBlogs = blogs
    .filter((blog) => blog.category === "Resep")
    .slice(0, 4);
  return (
    <div>
      <div className="container mb-16">
        <div className="w-full h-64 bg-bg_vidi mt-20 mb-10 rounded-xl">
          <div className="px-64 h-full flex flex-col justify-center text-center ">
            <h2 className="uppercase font-medium text-gray-500 text-xl mb-2">
              Welcome To VIDI&apos;s Blog
            </h2>
            <h1 className="font-semibold text-4xl leading-tight">
              Craft narrative that ignite{" "}
              <span className="text-red-500">inspiration</span>,{" "}
              <span className="text-red-500">knowledge</span>, and{" "}
              <span className="text-red-500">entertainment</span>
            </h1>
          </div>
        </div>
        <div className="">
          {latestBlog && (
            <div key={latestBlog.id}>
              <ArticleCardLatest
                id={latestBlog.id} // Pass the blog ID
                title={latestBlog.title}
                content={latestBlog.content}
                imageSrc={latestBlog.image}
                category={latestBlog.category}
                dateUpload={formatDate(latestBlog.createdAt.toString())}
              />
            </div>
          )}
        </div>
        <div className="mt-16">
          <div className="grid grid-cols-2 w-full">
            <h3 className="mb-8 font-semibold text-3xl">Latest News</h3>
            <h3 className="mb-5 font-medium text-xl text-end text-red-500">
              See All{" "}
            </h3>
          </div>
          <div className="w-full flex gap-10 justify-center">
            {recentBlogs.map((blog, index) => (
              <div key={blog.id} className="w-72 ">
                <div className="">
                  <ArticleCardSmall
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
        </div>
        <div className=" border-t mt-10 pt-10">
          <div className="grid grid-cols-2 w-full">
            <h3 className="mb-8 font-semibold text-3xl">Tips</h3>
            <h3 className="mb-5 font-medium text-xl text-end text-red-500">
              See All{" "}
            </h3>
          </div>
          <div className="w-full flex gap-10 justify-center">
            {tipsBlogs.map((blog, index) => (
              <div key={blog.id} className="w-72 ">
                <div className="">
                  <ArticleCardSmall
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
        </div>
        <div>
          <div className="overflow-hidden bg-[url('/img/kabahBanner.webp')] bg-cover bg-top bg-no-repeat mt-10 rounded-3xl">
            <div className="bg-black/70 p-8 md:p-12 lg:px-16 lg:py-20">
              <div className="text-left ltr:sm:text-left ">
                <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
                  Dapatkan Voucher Gratis Umroh!
                </h2>

                <p className="hidden max-w-2xl text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Inventore officia corporis quasi doloribus iure architecto
                  quae voluptatum beatae excepturi dolores.
                </p>

                <div className="mt-4 sm:mt-8">
                  <a
                    href="#"
                    className="inline-block rounded-full bg-vidi px-12 py-3 text-sm font-medium text-white transition hover:opacity-90 focus:outline-none focus:ring focus:ring-yellow-400"
                  >
                    Selengkapnya
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-2 w-full">
            <h3 className="mb-8 font-semibold text-3xl">Must Read</h3>
            <h3 className="mb-5 font-medium text-xl text-end text-red-500">
              See All{" "}
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-10">
            <div className="flex items-center">
              {latestNewsBlog && (
                <div key={latestNewsBlog.id}>
                  <ArticleCardLeft
                    id={latestNewsBlog.id} // Pass the blog ID
                    title={latestNewsBlog.title}
                    content={latestNewsBlog.content}
                    imageSrc={latestNewsBlog.image}
                    category={latestNewsBlog.category}
                    dateUpload={formatDate(latestNewsBlog.createdAt.toString())}
                  />
                </div>
              )}
            </div>
            <div className="">
              {newsBlogs.map((blog, index) => (
                <div key={blog.id} className="">
                  <div className="">
                    <ArticleCardRight
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
          </div>
        </div>
        <div className="mt-16">
          <div className="grid grid-cols-2 w-full">
            <h3 className="mb-8 font-semibold text-3xl">Resep</h3>
            <h3 className="mb-5 font-medium text-xl text-end text-red-500">
              See All{" "}
            </h3>
          </div>
          <div className="w-full flex gap-10 justify-center">
            {resepBlogs.map((blog, index) => (
              <div key={blog.id} className="w-72 ">
                <div className="">
                  <ArticleCardSmall
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
        </div>
        <Category />
      </div>
      <Contact />
      <Gallery />
      <Footer />
    </div>
  );
};

export default BlogPage;
