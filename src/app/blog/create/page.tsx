import CreateForm from "@/app/component/create-form";
import Sidebar from "../../component/sidebar";

const CreateBlogPage = () => {
  return (
    <div className="flex justify-between">
      <Sidebar />
      <div className="w-full h-full">
        <div className="max-w-screen-md ml-10 mt-10">
          <h1 className="text-2x text-center mb-2">Add Post</h1>
          <CreateForm />
        </div>
      </div>
    </div>
  );
};
export default CreateBlogPage;
