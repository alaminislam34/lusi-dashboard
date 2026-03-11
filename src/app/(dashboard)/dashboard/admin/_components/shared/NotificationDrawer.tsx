// _components/shared/NotificationDrawer.tsx
"use client";

import React from "react";
import { X } from "lucide-react";
import Image from "next/image";

interface Notification {
  id: number;
  title: string;
  description: string;
  time: string;
  avatar: string;
  isNew?: boolean;
}

const notifications: Notification[] = [
  {
    id: 1,
    title: "New Hot Lead Identified",
    description:
      "AI has classified this lead as Hot based on high intent and strong engagement.",
    time: "Today, 9:12 AM",
    avatar: "/avatar-placeholder.jpg",
    isNew: true,
  },
  {
    id: 2,
    title: "New Hot Lead Identified",
    description:
      "AI has classified this lead as Hot based on high intent and strong engagement.",
    time: "Today, 9:12 AM",
    avatar: "/avatar-placeholder.jpg",
  },
  // ... add more as needed
];

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function NotificationDrawer({ isOpen, onClose }: Props) {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="absolute w-full h-full inset-0 bg-black/40 backdrop-blur-sm z-60 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Sidebar Panel */}
      <div
        className={`
        absolute top-0 h-full right-0 w-full max-w-100 bg-[#11141b] z-70 shadow-2xl
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "translate-x-full"}
      `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-800/50">
          <h2 className="text-lg font-medium text-white">Notification</h2>
          <button
            onClick={onClose}
            className="p-1 text-gray-400 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Notification List */}
        <div className="overflow-y-auto h-[calc(100vh-150px)] p-4 space-y-2">
          {notifications.map((n) => (
            <div
              key={n.id}
              className={`flex gap-4 p-4 rounded-xl transition-colors cursor-pointer ${
                n.isNew ? "bg-[#1a1d26]" : "hover:bg-gray-800/30"
              }`}
            >
              <div className="relative w-10 h-10 shrink-0">
                <Image
                  src={n.avatar}
                  alt="Avatar"
                  fill
                  className="rounded-full object-cover border border-gray-700"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-sm font-semibold text-white">{n.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {n.description}
                </p>
                <span className="text-[10px] text-gray-500 mt-1 uppercase tracking-wider font-medium">
                  {n.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
