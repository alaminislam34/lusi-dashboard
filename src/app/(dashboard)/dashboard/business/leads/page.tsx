"use client";

import React, { useState, useMemo } from "react";
import {
  Search,
  SlidersHorizontal,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
const INITIAL_DATA = Array.from({ length: 45 }, (_, i) => ({
  id: `#ID2389${76 + i}`,
  lead: "+5650625486",
  value: "$240",
  source: "Whatsapp",
  assignedTo: i % 2 === 0 ? "Sarah" : "James",
  lastMessage: "28 mins ago",
  // Statuses matching your design
  status: ["Hot", "Warm", "Cold", "irrelevant"][i % 4],
}));

export default function LeadsTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(8);

  const filteredData = useMemo(() => {
    return INITIAL_DATA.filter(
      (item) =>
        item.lead.includes(searchTerm) ||
        item.id.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [searchTerm]);

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const currentRows = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage,
  );

  // Status Style Mapper
  const getStatusStyles = (status: string) => {
    switch (status.toLowerCase()) {
      case "hot":
        return "bg-emerald-500/10 text-emerald-500 border-emerald-500/20";
      case "warm":
        return "bg-orange-500/10 text-orange-500 border-orange-500/20";
      case "cold":
        return "bg-purple-500/10 text-purple-500 border-purple-500/20";
      case "irrelevant":
        return "bg-red-500/10 text-red-500 border-red-500/20";
      default:
        return "bg-gray-500/10 text-gray-500";
    }
  };

  return (
    <div className="text-gray-400">
      {/* Search & Filter Header */}
      <div className="flex gap-4 mb-6">
        <div className="relative flex-1">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
            size={18}
          />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-[#16191d] border border-white/5 rounded-xl py-2.5 pl-11 pr-4 text-white focus:outline-none focus:ring-1 focus:ring-white/10"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="p-2.5 bg-[#16191d] border border-white/5 rounded-xl hover:text-white transition-colors">
          <SlidersHorizontal size={20} />
        </button>
      </div>

      {/* Table */}
      <div className="bg-[#121417] border border-white/5 rounded-2xl overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="text-xs font-medium border-b border-white/5 text-gray-500">
              <th className="px-6 py-4">
                ID <span className="text-[10px]">⇅</span>
              </th>
              <th className="px-6 py-4">Lead</th>
              <th className="px-6 py-4">Lead Value</th>
              <th className="px-6 py-4">Source</th>
              <th className="px-6 py-4">Assigned to</th>
              <th className="px-6 py-4">Last Message</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4"></th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {currentRows.map((row: any) => (
              <tr
                key={row.id}
                className="border-b border-white/5 last:border-0 hover:bg-white/2 transition-colors"
              >
                <td className="px-6 py-5 text-gray-500">{row.id}</td>
                <td className="px-6 py-5 text-white font-bold">{row.lead}</td>
                <td className="px-6 py-5 text-white">{row.value}</td>
                <td className="px-6 py-5">{row.source}</td>
                <td className="px-6 py-5">{row.assignedTo}</td>
                <td className="px-6 py-5">{row.lastMessage}</td>
                <td className="px-6 py-5">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${getStatusStyles(row.status)}`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                    {row.status}
                  </span>
                </td>
                <td className="px-6 py-5 text-right">
                  <button className="text-gray-600 hover:text-white transition-colors">
                    <MoreVertical size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Footer / Pagination */}
        <div className="px-6 py-4 flex items-center justify-between border-t border-white/5">
          <div className="flex items-center gap-3 text-xs">
            <span>Show result:</span>
            <select
              value={rowsPerPage}
              onChange={(e) => setRowsPerPage(Number(e.target.value))}
              className="bg-[#1a1d21] border border-white/10 rounded-lg px-2 py-1 outline-none"
            >
              <option value={8}>8</option>
              <option value={15}>15</option>
            </select>
          </div>

          <div className="flex items-center gap-1 text-xs">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              className="p-1 hover:text-white disabled:opacity-30"
            >
              <ChevronLeft size={16} />
            </button>

            {[1, 2, 3, 4, "...", 20].map((page, i) => (
              <button
                key={i}
                className={`w-7 h-7 rounded-lg transition-all ${
                  page === currentPage
                    ? "bg-[#1a1d21] text-white border border-white/10"
                    : "hover:text-white"
                }`}
                onClick={() => typeof page === "number" && setCurrentPage(page)}
              >
                {page}
              </button>
            ))}

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
              className="p-1 hover:text-white disabled:opacity-30"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
