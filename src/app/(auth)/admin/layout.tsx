import React from "react";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin panel for Lusi Dashboard",
};

function AdminLayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

export default AdminLayout;
