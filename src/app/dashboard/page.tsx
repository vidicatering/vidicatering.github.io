import BlogTable from "../component/blog-table";
import Search from "../component/search";
import Sidebar from "../component/sidebar";

const dasboard = () => {
  return (
    <div className="flex items-center justify-between">
      <Sidebar />
      <div className="w-full h-full">
        <div className="max-w-screen-md mx-auto mt-5">
          <div className="flex items-center justify-between gap-1 mb-5">
            <Search />
          </div>
          <BlogTable />
        </div>
      </div>
    </div>
  );
};

export default dasboard;
