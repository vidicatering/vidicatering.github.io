import EditPost from "@/app/components/edit-post";
import Sidebar from "../../../../components/ui/sidebar";
import { getBlogsById } from "../../../../../../lib/data";
import { notFound } from "next/navigation";

const UpdateBlogPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const blog = await getBlogsById(id);

  if (!blog) {
    notFound();
  }
  return (
    <div className="flex items-start justify-between">
      <aside>
        <Sidebar />
      </aside>
      <div className="w-full h-full">
        <EditPost blog={blog} />
      </div>
    </div>
  );
};
export default UpdateBlogPage;
