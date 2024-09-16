import Sidebar from "../../components/ui/sidebar";
//import CreatePost from "./form";
import CreatePost from "../../components/create-post";
const Dashboard = () => {
  return (
    <div className="flex items-start justify-between">
      <aside>
        <Sidebar />
      </aside>
      <div className="w-full h-full">
        <CreatePost />
      </div>
    </div>
  );
};
export default Dashboard;
