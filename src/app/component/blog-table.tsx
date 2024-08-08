import { title } from "process";
import { getBlogs } from "../../../lib/data";
import { formatDate } from "../../../lib/utils";
import { EditButton, DeletedButton } from "./button";

const BlogTable = async () => {
  const blogs = await getBlogs();
  return (
    <table className="w-full text-left text-sm">
      <thead className="text- text-gray-700 text-sm uppercase bg-gray-50">
        <tr>
          <th className="py-3 px-6">#</th>
          <th className="py-3 px-6">Title</th>
          <th className="py-3 px-6">Content</th>
          <th className="py-3 px-6">Created At</th>
          <th className="py-3 px-6 text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        {blogs.map((blogTable, index) => (
          <tr key={blogTable.id} className="bg-white border-b  ">
            <td className="py-3 px-6">{index + 1}</td>
            <td className="py-3 px-6">{blogTable.title}</td>
            <td className="py-3 px-6">
              <div className="max-h-10 overflow-hidden">{blogTable.content}</div>
            </td>
            <td className="py-3 px-6">{formatDate(blogTable.createdAt.toString())}</td>
            <td className="flex justify-center gap-1 py-3 ">
              <EditButton />
              <DeletedButton />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BlogTable;
