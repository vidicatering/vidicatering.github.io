"use client";
import React, { useState } from "react";
import { updateBlog } from "../../../lib/action";
import { useFormState } from "react-dom";
import { SubmitButton } from "./button";
import type { Blog } from "@prisma/client";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const EditPost = ({ blog }: { blog: Blog }) => {
  const UpdateBlogWithId = updateBlog.bind(null, blog.id);
  const [state, formAction] = useFormState(UpdateBlogWithId, null);
  const [editorContent, setEditorContent] = useState(blog.content);
  return (
    <div className="container mt-10">
      <h1 className="text-center font-bold text-3xl uppercase">Edit Post</h1>
      <form action={formAction}>
        <div className="">
          <label className="mb-5">Judul</label>
          <input
            type="text"
            name="title"
            placeholder="Judul Postingan"
            className="border w-full px-5 py-3 focus:outline-bg_vidi rounded-md"
            defaultValue={blog.title}
          />
          <div aria-live="polite" aria-atomic="true">
            <p className="text-sm text-red-500 mt-2">{state?.error?.title}</p>
          </div>
        </div>
        <div className="mt-5">
          <p>
            <label className="mb-2">Konten</label>
          </p>
          <CKEditor
            editor={ClassicEditor as any}
            data={editorContent} // Konten default dari state
            onChange={(event, editor) => {
              const data = editor.getData();
              setEditorContent(data); // Update state CKEditor setiap ada perubahan
            }}
          />
          <input
            type="hidden"
            name="content"
            value={editorContent} // Mengirim konten CKEditor melalui hidden input
          />
          <div aria-live="polite" aria-atomic="true">
            <p className="text-sm text-red-500 mt-2">{state?.error?.content}</p>
          </div>
        </div>
        <div className=" my-5">
          <label className="mr-5">Kategori</label>
          <select
            id="category"
            name="category"
            className="border focus:outline-bg_vidi px-5 py-2 rounded-md"
            defaultValue={blog.category}
          >
            <option value="News">News</option>
            <option value="Tips">Tips</option>
            <option value="Resep">Resep</option>
          </select>
          <label htmlFor="status" className="mx-5">
            Status
          </label>
          <select
            id="status"
            name="status"
            className="border focus:outline-bg_vidi px-5 py-2 rounded-md"
            defaultValue={blog.status}
          >
            <option value="Draft">Draft</option>
            <option value="Active">Aktif</option>
          </select>
        </div>
        <div className="mb-4 pt-2 flex flex-col max-w-md">
          <label className="mb-2">Upload Image</label>
          <input
            type="file"
            name="image"
            className="file:py-2 file:px-4 file:mr-4 file:rounded-sm file:border-0 file:bg-gray-200 hover:file:bg-gray-300 file:cursor-pointer border border-gray-400"
          />
          <div aria-live="polite" aria-atomic="true">
            <p className="text-sm text-red-500 mt-2">{state?.error?.image}</p>
          </div>
        </div>
        <div className="mt-5">
          <SubmitButton label="update" />
        </div>
      </form>
    </div>
  );
};

export default EditPost;
