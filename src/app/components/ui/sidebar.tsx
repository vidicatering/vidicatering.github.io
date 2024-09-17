"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../../../public/img/vidi_logo.png";
import Image from "next/image";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="min-w-72">
      <div className="flex h-screen flex-col justify-between border-e bg-white">
        <div className="px-4 py-6">
          <Image src={logo} alt="Logo Vidi" className="w-36 ml-3" />

          <ul className="mt-6 space-y-1">
            <li>
              <Link href="/dashboard" className={`block rounded-lg px-4 py-2 text-sm font-medium ${pathname === "/dashboard" ? "bg-gray-100 text-gray-700" : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"}`}>
                Dashboard
              </Link>
            </li>

            <li>
              <Link href="/dashboard/create-post" className={`block rounded-lg px-4 py-2 text-sm font-medium ${pathname === "/dashboard/create-post" ? "bg-gray-100 text-gray-700" : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"}`}>
                Create Post
              </Link>
            </li>

            <li>
              <Link href="#" className={`block rounded-lg px-4 py-2 text-sm font-medium ${pathname === "#" ? "bg-gray-100 text-gray-700" : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"}`}>
                Setting
              </Link>
            </li>

            <li>
              <Link href="#" className={`block rounded-lg px-4 py-2 text-sm font-medium ${pathname === "#" ? "bg-gray-100 text-gray-700" : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"}`}>
                Logout
              </Link>
            </li>
          </ul>
        </div>

        <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
          <a href="#" className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
            <img alt="" src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" className="size-10 rounded-full object-cover" />

            <div>
              <p className="text-xs">
                <strong className="block font-medium">Eric Frusciante</strong>

                <span> eric@frusciante.com </span>
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
