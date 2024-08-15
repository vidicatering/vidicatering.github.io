"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Nav from "./component/Nav"; // Pastikan path ke komponen Nav benar
import PopUp from "./component/Popup";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isFoodTastingPage = pathname === "/food-tasting-flight";
  const isDashboardPage = pathname === "/dashboard";
  const isCreatedFormPage = pathname === "/blog/create";

  return (
    <>
      {!isFoodTastingPage && !isDashboardPage && !isCreatedFormPage && <Nav />}
      {!isFoodTastingPage && !isDashboardPage && !isCreatedFormPage && <PopUp />}
      {children}
    </>
  );
}
