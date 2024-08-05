import { getBlogs } from "../../../lib/data";

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
        <tr>
          <td className="py-3 px-6"></td>
          <td className="py-3 px-6"></td>
          <td className="py-3 px-6"></td>
          <td className="py-3 px-6"></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
};

export default BlogTable;
