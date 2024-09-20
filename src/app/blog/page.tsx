"use client";

import { useEffect, useState } from "react";
import { ArticleCardLatest, ArticleCardSmall } from "../components/article-card";
import { Blog } from "../../../lib/data";
import { formatDate } from "../../../lib/utils";
import Loader from "../components/loading";

const BlogPage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]); // Tentukan tipe Blog[]
  const [loading, setLoading] = useState(true); // State untuk loading

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blog", { cache: "no-store" });
        const blogsData: Blog[] = await res.json();
        setBlogs(blogsData.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()));
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false); // Setelah fetch selesai, matikan status loading
      }
    };

    fetchBlogs();
  }, []);

  // Placeholder untuk Lazy Loading
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  const latestBlog = blogs[0];
  const recentBlogs = blogs.slice(1, 5);
  const newsBlogs = blogs.filter((blog) => blog.category === "Tips").slice(0, 4);
  return (
    <div className="container">
      <div className="w-full h-64 bg-bg_vidi mt-20 mb-10 rounded-xl">
        <div className="px-64 h-full flex flex-col justify-center text-center ">
          <h2 className="uppercase font-medium text-gray-500 text-xl mb-2">Welcome To VIDI&apos;s Blog</h2>
          <h1 className="font-semibold text-4xl leading-tight">
            Craft narrative that ignite <span className="text-red-500">inspiration</span>, <span className="text-red-500">knowledge</span>, and <span className="text-red-500">entertainment</span>
          </h1>
        </div>
      </div>
      <div className="">
        {latestBlog && ( // Memastikan latestBlog tidak undefined
          <div key={latestBlog.id}>
            <ArticleCardLatest title={latestBlog.title} content={latestBlog.content} imageSrc={latestBlog.image} category={latestBlog.category} dateUpload={formatDate(latestBlog.createdAt.toString())} />
          </div>
        )}
      </div>
      <div className="mt-16">
        <div className="grid grid-cols-2 w-full">
          <h3 className="mb-8 font-semibold text-3xl">Latest News</h3>
          <h3 className="mb-5 font-medium text-xl text-end text-red-500">See All </h3>
        </div>
        <div className="w-full flex gap-10 ">
          {recentBlogs.map((blog, index) => (
            <div key={blog.id} className="w-72 ">
              <div className="">
                <ArticleCardSmall title={blog.title} content={blog.content} imageSrc={blog.image} category={blog.category} dateUpload={formatDate(blog.createdAt.toString())} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" border-t mt-10 pt-10">
        <div className="grid grid-cols-2 w-full">
          <h3 className="mb-8 font-semibold text-3xl">Tips</h3>
          <h3 className="mb-5 font-medium text-xl text-end text-red-500">See All </h3>
        </div>
        <div className="w-full flex gap-10 ">
          {newsBlogs.map((blog, index) => (
            <div key={blog.id} className="w-72 ">
              <div className="">
                <ArticleCardSmall title={blog.title} content={blog.content} imageSrc={blog.image} category={blog.category} dateUpload={formatDate(blog.createdAt.toString())} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="overflow-hidden bg-[url(https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=2670&auto=format&fit=crop)] bg-cover bg-top bg-no-repeat mt-10 rounded-3xl">
          <div className="bg-black/50 p-8 md:p-12 lg:px-16 lg:py-20">
            <div className="text-left ltr:sm:text-left ">
              <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">Dapatkan Voucher Gratis Umroh!</h2>

              <p className="hidden max-w-2xl text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore officia corporis quasi doloribus iure architecto quae voluptatum beatae excepturi dolores.
              </p>

              <div className="mt-4 sm:mt-8">
                <a href="#" className="inline-block rounded-full bg-vidi px-12 py-3 text-sm font-medium text-white transition hover:opacity-90 focus:outline-none focus:ring focus:ring-yellow-400">
                  Selengkapnya
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
