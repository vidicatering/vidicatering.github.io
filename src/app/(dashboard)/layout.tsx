import Sidebar from "../components/ui/sidebar";
import { auth } from "../../../auth";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();

  return (
    <div className="flex items-start justify-between">
      <aside className=" border-e bg-pink-200 sticky top-0">
        <Sidebar />
      </aside>
      <div className="w-full h-full">{children}</div>
    </div>
  );
};

export default DashboardLayout;
