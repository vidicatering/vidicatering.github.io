import { notFound } from "next/navigation";
import { getBlogsById } from "../../../../lib/data";

const UpdateBlogPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const blog = await getBlogsById(id);

  if (!blog) {
    notFound();
  }
  return (
    <div className="flex items-start justify-between">
      <aside></aside>
      <div className="w-full h-full"></div>
    </div>
  );
};
export default UpdateBlogPage;
