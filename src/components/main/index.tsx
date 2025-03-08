import React from "react";
import Sidebar from "./sidebar";
import Header from "./header";

interface MainDashboardProps {
  children: React.ReactNode;
}

export default function MainDashboard({ children }: MainDashboardProps) {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="ml-80 mr-8 pt-28">
        <div>{children}</div>
      </div>
    </>
  );
}
