// _components/shared/Navbar.tsx
import { Bell, ChevronDown, Menu } from "lucide-react"; // Import Menu
import Image from "next/image";

interface NavbarProps {
  onMenuClick: () => void;
}

export default function Navbar({
  onMenuClick,
  setIsNotificationOpen,
  isNotificationOpen,
}: NavbarProps & {
  setIsNotificationOpen: (isOpen: boolean) => void;
  isNotificationOpen: boolean;
}) {
  return (
    <nav className="flex items-center justify-between h-full px-4 md:px-8 bg-[#0b0e14] text-white">
      {/* Left side: Menu Button (Mobile) & Page Title */}
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="p-2 text-gray-400 hover:text-white lg:hidden"
        >
          <Menu size={24} />
        </button>
        <h2 className="text-xl font-semibold tracking-tight">Dashboard</h2>
      </div>

      {/* Right side: Actions & Profile */}
      <div className="flex items-center gap-3 md:gap-6">
        <button
          className="relative p-2 text-gray-400 hover:text-white transition-colors bg-[#1a1d26] rounded-full border border-gray-800 cursor-pointer"
          onClick={() => setIsNotificationOpen(!isNotificationOpen)}
        >
          <Bell size={20} />
          <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-[#1a1d26]"></span>
        </button>

        <div className="flex items-center gap-3 pl-4 border-l border-gray-800">
          <div className="relative w-8 h-8 md:w-10 md:h-10 overflow-hidden rounded-full border border-gray-700 bg-gray-800">
            <Image
              src="/images/admin.png"
              alt="user"
              fill
              className="object-cover bg-right"
            />
          </div>
          <div className="text-left hidden lg:block">
            <p className="text-sm font-medium leading-none">Justin Leo</p>
            <p className="text-xs text-gray-500 mt-1">Admin</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
