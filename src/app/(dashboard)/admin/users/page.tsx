// app/admin/users/page.tsx
"use client";

import React, { useState, useMemo } from "react";
import {
  Search,
  SlidersHorizontal,
  MoreVertical,
  Edit2,
  Trash2,
  Eye,
} from "lucide-react";
import Image from "next/image";

// Mock Data
const INITIAL_DATA = Array.from({ length: 45 }, (_, i) => ({
  id: i + 1,
  name: i % 3 === 0 ? "Smart Shop" : i % 2 === 0 ? "Lusi Agency" : "Trendly",
  email: `user${i + 1}@example.com`,
  plan: i % 4 === 0 ? "Premium" : "Basic",
  payment: i % 4 === 0 ? "$120" : "$40",
  leads: `${Math.floor(Math.random() * 30)}%`,
  conversion: `${Math.floor(Math.random() * 20)}%`,
  status: i % 5 === 0 ? "Inactive" : "Active",
  lastActivity: `${i + 2} min ago`,
}));

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(8);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  // 1. Search Logic
  const filteredData = useMemo(() => {
    return INITIAL_DATA.filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [searchTerm]);

  // 2. Pagination Logic
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      setActiveMenu(null);
    }
  };

  return (
    <div className="space-y-6" onClick={() => setActiveMenu(null)}>
      {/* Search Header */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div
          className="relative w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
            size={20}
          />
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full bg-[#11141b] border border-gray-800 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-teal-500/50 transition-all"
          />
        </div>
        <button className="p-3 bg-[#11141b] border border-gray-800 rounded-xl text-gray-400 hover:text-white transition-colors">
          <SlidersHorizontal size={20} />
        </button>
      </div>

      {/* Table Container */}
      <div className="bg-[#11141b] border border-gray-800/50 rounded-[20px] flex flex-col relative">
        <div className="overflow-x-auto grow sm:overflow-visible">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-800 text-gray-500 text-[10px] uppercase tracking-wider">
                <th className="px-6 py-5 font-medium">Business name</th>
                <th className="px-6 py-5 font-medium">Email</th>
                <th className="px-6 py-5 font-medium">Plan Type</th>
                <th className="px-6 py-5 font-medium">Monthly payment</th>
                <th className="px-6 py-5 font-medium">Leads This Month</th>
                <th className="px-6 py-5 font-medium">Conversion Rate</th>
                <th className="px-6 py-5 font-medium">Status</th>
                <th className="px-6 py-5 font-medium">Last Activity</th>
                <th className="px-6 py-5 font-medium text-right pr-10">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-300">
              {currentRows.map((user, idx) => {
                // Smart direction: Open UP if row is in the bottom half of the current view
                const isBottomRow = idx >= currentRows.length - 3;

                return (
                  <tr
                    key={user.id}
                    className="border-b border-gray-800/40 hover:bg-gray-800/10 transition-colors group"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-800 border border-gray-700 relative">
                          <div className="w-full h-full flex items-center justify-center text-[10px] text-gray-500">
                            <Image
                              src={"/images/admin.png"}
                              width={200}
                              height={200}
                              alt="Admin"
                              className="object-cover w-full h-full"
                            />
                          </div>
                        </div>
                        <span className="font-medium text-white">
                          {user.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-400">{user.email}</td>
                    <td className="px-6 py-4">{user.plan}</td>
                    <td className="px-6 py-4 text-white font-medium">
                      {user.payment}
                    </td>
                    <td className="px-6 py-4">{user.leads}</td>
                    <td className="px-6 py-4">{user.conversion}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium ${
                          user.status === "Active"
                            ? "bg-teal-500/10 text-teal-500"
                            : "bg-red-500/10 text-red-500"
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            user.status === "Active"
                              ? "bg-teal-500"
                              : "bg-red-500"
                          }`}
                        />
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-500 italic">
                      {user.lastActivity}
                    </td>
                    <td className="px-6 py-4 text-right relative pr-10">
                      <div className="relative inline-block text-left">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveMenu(
                              activeMenu === user.id ? null : user.id,
                            );
                          }}
                          className={`p-2 rounded-lg transition-all ${
                            activeMenu === user.id
                              ? "bg-gray-800 text-white"
                              : "text-gray-500 hover:text-white hover:bg-gray-800"
                          }`}
                        >
                          <MoreVertical size={18} />
                        </button>

                        {/* SMART ACTION MENU */}
                        {activeMenu === user.id && (
                          <div
                            className={`absolute right-0 z-100 w-44 bg-[#1a1d26] border border-gray-700 shadow-2xl rounded-xl py-2 overflow-hidden animate-in fade-in duration-200 ${
                              isBottomRow
                                ? "bottom-full mb-2 slide-in-from-bottom-2"
                                : "top-full mt-2 slide-in-from-top-2"
                            }`}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <button className="w-full px-4 py-2.5 flex items-center gap-3 hover:bg-gray-800 text-gray-300 text-xs transition-colors group">
                              <Eye
                                size={16}
                                className="text-gray-500 group-hover:text-teal-500"
                              />
                              View Details
                            </button>
                            <button className="w-full px-4 py-2.5 flex items-center gap-3 hover:bg-gray-800 text-gray-300 text-xs transition-colors group">
                              <Edit2
                                size={16}
                                className="text-gray-500 group-hover:text-blue-500"
                              />
                              Edit User
                            </button>
                            <div className="h-px bg-gray-800 my-1 mx-2" />
                            <button className="w-full px-4 py-2.5 flex items-center gap-3 hover:bg-red-500/10 text-red-500 text-xs transition-colors group">
                              <Trash2 size={16} className="text-red-400" />
                              Delete User
                            </button>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="px-6 py-5 flex flex-col sm:flex-row items-center justify-between border-t border-gray-800 gap-4 bg-[#11141b] rounded-b-[20px]">
          <div className="flex items-center gap-3 text-sm text-gray-400">
            <span>Show result:</span>
            <select
              value={rowsPerPage}
              onChange={(e) => {
                setRowsPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="bg-[#1a1d26] border border-gray-700 rounded-lg px-2 py-1 text-white focus:outline-none focus:border-teal-500 transition-colors cursor-pointer"
            >
              <option value={8}>8</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
            </select>
          </div>

          <div className="flex items-center gap-1">
            <PaginationButton
              label="<"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            />
            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter(
                (p) =>
                  p === 1 || p === totalPages || Math.abs(p - currentPage) <= 1,
              )
              .map((page, idx, arr) => (
                <React.Fragment key={page}>
                  {idx > 0 && arr[idx - 1] !== page - 1 && (
                    <span className="px-2 text-gray-600">...</span>
                  )}
                  <PaginationButton
                    label={page.toString()}
                    active={currentPage === page}
                    onClick={() => handlePageChange(page)}
                  />
                </React.Fragment>
              ))}
            <PaginationButton
              label=">"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function PaginationButton({ label, active, disabled, onClick }: any) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm transition-all ${
        active
          ? "bg-[#1a1d26] text-white border border-gray-700 shadow-lg"
          : "text-gray-500 hover:text-white hover:bg-gray-800 disabled:opacity-20 disabled:cursor-not-allowed"
      }`}
    >
      {label}
    </button>
  );
}
