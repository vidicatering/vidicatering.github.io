"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Nav from "./components/Nav"; // Pastikan path ke komponen Nav benar
import PopUp from "./components/Popup";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isFoodTastingPage = pathname === "/food-tasting-flight";
  const isDashboardPage = pathname === "/dashboard";
  const isAddPostPage = pathname.includes("/dashboard/");
  const isGsvPage = pathname === "/grha-sarina-vidi";
  const isVidiPage = pathname === "/vidi-catering";

  return (
    <>
      {!isFoodTastingPage && !isDashboardPage && !isGsvPage && !isAddPostPage && !isVidiPage && <Nav />}
      {/* {!isFoodTastingPage && !isDashboardPage && !isAddPostPage && !isGsvPage && !isVidiPage && <PopUp />} */}
      {children}
    </>
  );
}
