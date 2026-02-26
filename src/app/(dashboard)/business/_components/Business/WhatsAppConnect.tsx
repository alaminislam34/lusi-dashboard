import React, { useState } from "react";
import { Search } from "lucide-react";
import Image from "next/image";

const WhatsAppConnect = () => {
  const [url, setUrl] = useState("");

  return (
    <div className="bg-[#11141b] border border-white/5 rounded-[20px] p-6 xl:p-8 w-full">
      {/* Header with Icon */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-8 h-8 fill-emerald-500">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 0 5.414 0 12.05c0 2.123.553 4.197 1.603 6.03L0 24l6.117-1.605a11.847 11.847 0 005.933 1.605h.005c6.637 0 12.05-5.414 12.05-12.05a11.85 11.85 0 00-3.645-8.522z" />
          </svg>
        </div>
        <h2 className="text-white text-2xl font-bold">WhatsApp</h2>
      </div>

      {/* Description */}
      <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-2xl">
        We'll need permissions to manage your WhatsApp Business Account in order
        to automate your replies. You can create WhatsApp bot on connected
        accounts.
      </p>

      {/* Input Field */}
      <div className="relative mb-8">
        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500">
          <Search size={22} />
        </div>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter your whatsapp URL"
          className="w-full bg-[#1a1d26] border border-white/10 rounded-2xl py-5 pl-14 pr-6 text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-emerald-500/50 transition-all text-lg"
        />
      </div>

      {/* Action Button */}
      <button className="bg-[#61c9b8] hover:bg-[#52ab9c] text-[#0a0a0b] font-bold py-4 px-10 rounded-2xl transition-all shadow-lg hover:scale-[1.02] active:scale-[0.98]">
        Connect Whatsapp
      </button>
    </div>
  );
};

export default WhatsAppConnect;
