"use client";

import { useState } from "react";
import { ChevronLeft } from "lucide-react"; // Import for mobile back button
import ChatList from "../_components/Business/ChatList";
import ChatWindow from "../_components/Business/ChatWindow";
import { Conversation } from "./conversation.interface";
import { INITIAL_CONVERSATIONS } from "./mockData";

export default function ConversationsPage() {
  const [conversations, setConversations] = useState(INITIAL_CONVERSATIONS);
  const [activeId, setActiveId] = useState<string | null>(
    INITIAL_CONVERSATIONS[0].id,
  );
  const [showMobileChat, setShowMobileChat] = useState(false);

  const activeChat = conversations.find((c) => c.id === activeId);

  const handleSelectChat = (id: string) => {
    setActiveId(id);
    setShowMobileChat(true); // Switch view on mobile
  };

  const handleSendMessage = (text: string) => {
    if (!activeChat) return;
    const newMessage = {
      id: Date.now().toString(),
      sender: "ai" as const,
      text,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setConversations((prev: Conversation[]) =>
      prev.map((conv) =>
        conv.id === activeId
          ? {
              ...conv,
              messages: [...conv.messages, newMessage],
              lastMessage: text,
            }
          : conv,
      ),
    );
  };

  return (
    <div className="flex h-[calc(100vh-120px)] md:h-[calc(100vh-120px)] bg-[#0a0a0b] overflow-hidden rounded-2xl md:rounded-3xl border border-white/5">
      {/* Sidebar - Hidden on mobile when a chat is open */}
      <div
        className={`
        ${showMobileChat ? "hidden" : "flex"} 
        md:flex w-full md:w-80 lg:w-95 border-r border-white/5 flex-col bg-[#0f1115]
      `}
      >
        <ChatList
          conversations={conversations}
          activeId={activeId}
          onSelect={handleSelectChat}
        />
      </div>

      {/* Chat Window - Hidden on mobile when list is open */}
      <div
        className={`
        ${!showMobileChat ? "hidden" : "flex"} 
        md:flex flex-1 flex-col bg-[#11141b] relative
      `}
      >
        {activeChat ? (
          <>
            {/* Mobile Header with Back Button */}
            <div className="md:hidden flex items-center p-4 border-b border-white/5 bg-[#0f1115]">
              <button
                onClick={() => setShowMobileChat(false)}
                className="p-2 -ml-2 text-gray-400 hover:text-white"
              >
                <ChevronLeft size={24} />
              </button>
              <div className="ml-2">
                <p className="text-white font-bold text-sm">
                  {activeChat.phoneNumber}
                </p>
                <p className="text-[10px] text-teal-500 font-medium">Online</p>
              </div>
            </div>

            <ChatWindow chat={activeChat} onSendMessage={handleSendMessage} />
          </>
        ) : (
          <div className="hidden md:flex flex-1 items-center justify-center text-gray-500">
            Select a lead to start chatting
          </div>
        )}
      </div>
    </div>
  );
}
