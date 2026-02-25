import React from "react";
import Navbar from "./_components/shared/Navbar";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin panel for Lusi Dashboard",
};

function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

export default AdminLayout;
