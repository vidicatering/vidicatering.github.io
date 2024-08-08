import CreateForm from "@/app/component/create-form";

const CreateBlogPage = () => {
  return (
    <div className="max-w-md mx-auto mt-20">
      <h1 className="text-2x text-center mb-2">Add Post</h1>
      <CreateForm />
    </div>
  );
};
export default CreateBlogPage;
