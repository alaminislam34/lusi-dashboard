import { Search } from "lucide-react";

export default function ChatList({ conversations, activeId, onSelect }: any) {
  return (
    <div className="flex flex-col h-full">
      <div className="p-6">
        <div className="relative">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
            size={18}
          />
          <input
            className="w-full bg-[#16191d] border border-white/5 rounded-2xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-teal-500/50 transition-all"
            placeholder="Search conversations..."
          />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        {conversations.map((conv: any) => (
          <button
            key={conv.id}
            onClick={() => onSelect(conv.id)}
            className={`w-full flex items-center gap-4 px-6 py-5 transition-all border-b border-white/2 ${
              activeId === conv.id ? "bg-white/5" : "hover:bg-white/2"
            }`}
          >
            <div className="w-12 h-12 rounded-full bg-linear-to-tr from-gray-700 to-gray-600 border border-white/10 shrink-0" />
            <div className="flex-1 text-left min-w-0">
              <div className="flex justify-between items-center mb-1">
                <h4 className="text-white font-bold text-sm tracking-wide">
                  {conv.phoneNumber}
                </h4>
                <span className="text-[10px] text-gray-500">{conv.time}</span>
              </div>
              <p className="text-xs text-gray-400 truncate leading-relaxed">
                {conv.lastMessage}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
