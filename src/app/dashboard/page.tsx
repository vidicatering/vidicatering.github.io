import Sidebar from "../components/ui/sidebar";
//import CreatePost from "./form";
import PostList from "../components/table";
const Dashboard = () => {
  return (
    <div className="flex items-start justify-between">
      <aside>
        <Sidebar />
      </aside>
      <div className="w-full h-full">
        <PostList />
      </div>
    </div>
  );
};
export default Dashboard;
