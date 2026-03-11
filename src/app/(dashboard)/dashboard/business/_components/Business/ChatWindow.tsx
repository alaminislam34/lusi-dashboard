import React, { useState, useRef, useEffect } from "react";
import { Send, Paperclip } from "lucide-react";

export default function ChatWindow({ chat, onSendMessage }: any) {
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom on new message
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chat.messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSendMessage(input);
    setInput("");
  };

  return (
    <div className="flex flex-col h-full relative">
      {/* Dynamic Header */}
      <div className="p-4 flex gap-4 bg-[#11141b]/90 backdrop-blur-xl border-b border-white/5 z-20">
        <button className="flex-1 py-3 rounded-xl border border-teal-500/30 text-teal-400 text-xs font-bold hover:bg-teal-500/5 transition-all">
          TAKE OVER CONVERSATION
        </button>
        <button className="flex-1 py-3 rounded-xl bg-teal-400 text-[#0a0a0b] text-xs font-black hover:bg-teal-300 transition-all shadow-[0_0_20px_rgba(45,212,191,0.2)]">
          AI SUGGESTED REPLY
        </button>
      </div>

      {/* Messages */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-8 space-y-8 custom-scrollbar"
      >
        {chat.messages.map((m: any) => (
          <div
            key={m.id}
            className={`flex gap-4 ${m.sender === "ai" ? "flex-row-reverse" : "flex-row"}`}
          >
            <div className="w-9 h-9 rounded-full bg-gray-800 border border-white/10 shrink-0" />
            <div
              className={`max-w-[65%] p-4 rounded-2xl text-[13px] leading-relaxed shadow-sm ${
                m.sender === "ai"
                  ? "bg-[#1e222b] text-gray-200 border border-white/5 rounded-tr-none"
                  : "bg-[#262a33] text-white border border-white/10 rounded-tl-none"
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
