import Sidebar from "../components/ui/sidebar";
//import CreatePost from "./form";
import PostList from "../components/table";
const Dashboard = ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) => {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <div className="flex items-start justify-between">
      <aside>
        <Sidebar />
      </aside>
      <div className="w-full h-full">
        <PostList query={query} currentPage={currentPage} />
      </div>
    </div>
  );
};
export default Dashboard;
