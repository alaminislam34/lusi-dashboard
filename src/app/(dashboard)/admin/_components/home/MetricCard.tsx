// components/MetricCard.tsx
import { TrendingUp, TrendingDown } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  trend: string;
  trendType: "up" | "down";
  subText?: string;
}

export default function MetricCard({
  title,
  value,
  trend,
  trendType,
  subText,
}: MetricCardProps) {
  const isPositive = trendType === "up";

  return (
    <div className="bg-[#11141b] border border-gray-800/50 p-6 rounded-[20px] flex flex-col justify-between min-h-40">
      <div>
        <h3 className="text-gray-400 text-xs font-medium mb-4">{title}</h3>
        <p className="text-white text-lg md:text-xl lg:text-3xl font-bold tracking-tight">
          {value}
        </p>
      </div>

      <div
        className={`flex items-center gap-2 mt-4 font-medium text-sm ${isPositive ? "text-[#55b5a6]" : "text-red-500"}`}
      >
        {isPositive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
        <span>{trend}</span>
        {subText && (
          <span className="text-gray-500 ml-1 font-normal">{subText}</span>
        )}
      </div>
    </div>
  );
}
