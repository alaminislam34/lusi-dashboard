"use client"; // Add this since we're using state
import React, { useState } from "react";
import Navbar from "./_components/shared/Navbar";
import Sidebar from "./_components/shared/Sidebar";
import NotificationDrawer from "./_components/shared/NotificationDrawer";

export default function BusinessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  return (
    <div className="flex h-screen w-full bg-[#0b0e14] text-white overflow-hidden relative">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
        fixed inset-y-0 left-0 z-50 w-64 border-r border-gray-800 bg-[#11141b] transition-transform duration-300 ease-in-out
        lg:relative lg:translate-x-0 
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <Sidebar onClose={() => setIsSidebarOpen(false)} />
      </aside>

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <header className="h-16 border-b border-gray-800">
          {/* Pass the setter to the Navbar */}
          <Navbar
            onMenuClick={() => setIsSidebarOpen(true)}
            setIsNotificationOpen={setIsNotificationOpen}
            isNotificationOpen={isNotificationOpen}
          />
        </header>

        <main className="flex-1 overflow-y-auto bg-[#0b0e14] w-full">
          <div className="max-w-full mx-auto relative overflow-hidden min-h-full p-4">
            <NotificationDrawer
              isOpen={isNotificationOpen}
              onClose={() => setIsNotificationOpen(false)}
            />
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
