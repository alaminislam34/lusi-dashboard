import React from "react";

interface GrowthStat {
  label: string;
  value: string;
}

const growthData: GrowthStat[] = [
  { label: "Total AI Conversations", value: "18,420" },
  { label: "Time Saved This Month", value: "86 Hours Saved" },
  { label: "Avg Qualification Time", value: "42 sec" },
  { label: "Missed Leads", value: "3.4%" },
  { label: "AI Confidence Score", value: "94%" },
];

const GrowthSection = () => {
  return (
    <div className="bg-[#121417] rounded-3xl p-8 mt-6">
      <h2 className="text-gray-400 text-sm font-medium mb-8">
        How LUSI Is Growing Your Business
      </h2>

      <div className="flex flex-col md:flex-row md:flex-wrap md:items-center justify-between gap-8 md:gap-4 ">
        {growthData.map((item, index) => (
          <div key={index} className="flex flex-col gap-3 justify-between">
            <span className="text-gray-300 text-sm font-medium whitespace-nowrap">
              {item.label}
            </span>
            <span className="text-white text-lg md:text-xl xl:text-2xl 2xl:text-3xl font-bold tracking-tight">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GrowthSection;
