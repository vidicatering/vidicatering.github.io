import PostList from "../../components/table";
import { Metadata } from "next";
import { getBlogPages } from "../../../../lib/data";
import Pagination from "../../components/pagination";

export const metadata: Metadata = {
  title: "Dashboard",
};

const Dashboard = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) => {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await getBlogPages(query);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <PostList query={query} currentPage={currentPage} />
      <Pagination totalPages={totalPages} />
    </div>
  );
};
export default Dashboard;
