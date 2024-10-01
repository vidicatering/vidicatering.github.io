import Sidebar from "../../components/ui/sidebar";
//import CreatePost from "./form";
import PostList from "../../components/table";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Dashboard",
};

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
    <div className="w-full h-full">
      <PostList query={query} currentPage={currentPage} />
    </div>
  );
};
export default Dashboard;
