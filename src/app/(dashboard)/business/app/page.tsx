"use client";

import WhatsAppConnect from "../_components/Business/WhatsAppConnect";

export default function AppPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-start justify-start">
        <WhatsAppConnect />
      </div>
    </div>
  );
}

const IntegrationCard = ({ name }: { name: string }) => (
  <div className="bg-[#11141b] border border-white/5 rounded-[20px] p-6 flex flex-col items-center gap-4">
    <div className="w-16 h-16 bg-gray-800 rounded-full" />
    <h3 className="text-white font-bold">{name}</h3>
    <button className="w-full py-3 rounded-xl border border-white/10 text-gray-500 text-sm font-bold">
      Coming Soon
    </button>
  </div>
);
