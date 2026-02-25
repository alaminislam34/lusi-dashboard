import React from "react";
import Navbar from "./_components/shared/Navbar";


function BusinessLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

export default BusinessLayout;
