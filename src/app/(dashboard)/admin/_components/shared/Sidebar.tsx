// _components/shared/Sidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, User, Settings, LogOut, X } from "lucide-react";
import Image from "next/image";

interface SidebarProps {
  onClose?: () => void;
}

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/admin" },
  { name: "User", icon: User, href: "/admin/users" },
  { name: "Setting", icon: Settings, href: "/admin/settings" },
];

export default function Sidebar({ onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full bg-[#11141b] text-white relative">
      {/* Mobile Close Button */}
      <button
        onClick={onClose}
        className="p-2 text-gray-400 hover:text-white md:hidden absolute top-4 right-4 z-50 cursor-pointer rounded-full bg-[#1a1d26] border border-gray-800"
      >
        <X size={20} />
      </button>
      {/* 1. Header / Logo Area */}
      <div className="flex items-center justify-between px-6 py-8">
        <Link href="/admin" className="flex items-center gap-2">
          <Image
            src={"/logos/logo.png"}
            width={500}
            height={500}
            alt="Logo"
            className="w-1/2 h-fit"
          />
        </Link>
      </div>

      {/* 2. Main Navigation */}
      <nav className="flex-1 px-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={onClose} // Closes sidebar on mobile after clicking
              className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group ${
                isActive
                  ? "bg-[#55b5a6] text-[#0b0e14] font-semibold shadow-lg shadow-teal-500/20"
                  : "text-gray-400 hover:bg-gray-800/50 hover:text-white"
              }`}
            >
              <item.icon
                size={22}
                className={
                  isActive ? "text-[#0b0e14]" : "group-hover:text-white"
                }
              />
              <span className="text-sm tracking-wide">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* 3. Footer / Logout Section */}
      <div className="px-4 pb-8 mt-auto">
        <div className="h-px bg-gray-800 w-full mb-6" />
        <button
          className="flex items-center gap-4 px-4 py-3 w-full text-gray-400 hover:text-red-400 transition-colors group"
          onClick={() => console.log("Logging out...")}
        >
          <LogOut
            size={22}
            className="group-hover:translate-x-1 transition-transform"
          />
          <span className="text-sm font-medium">Log out</span>
        </button>
      </div>
    </div>
  );
}
