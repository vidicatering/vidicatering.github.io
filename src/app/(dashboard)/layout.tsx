import Sidebar from "../components/ui/sidebar";
import { auth } from "../../../auth";
import Image from "next/image";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();

  return (
    <div className="flex items-start justify-between">
      <aside className="sticky border-e h-screen flex flex-col justify-between">
        <Sidebar />
      </aside>
      <div className="w-full h-full">{children}</div>
    </div>
  );
};

export default DashboardLayout;
