import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Calendar } from "lucide-react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const data = {
  labels: [
    "Jan 1",
    "Jan 2",
    "Jan 3",
    "Jan 4",
    "Jan 5",
    "Jan 6",
    "Jan 7",
    "Jan 8",
    "Jan 9",
    "Jan 10",
    "Jan 11",
    "Jan 12",
    "Jan 13",
    "Jan 14",
    "Jan 15",
  ],
  datasets: [
    {
      label: "Converted leads",
      data: [80, 110, 60, 150, 65, 70, 95, 55, 130, 60, 50, 85, 45, 100, 80],
      backgroundColor: "#22c55e", // Green
      borderRadius: { topLeft: 0, topRight: 0, bottomLeft: 0, bottomRight: 0 },
    },
    {
      label: "Qualified leads",
      data: [120, 130, 20, 100, 30, 100, 110, 20, 90, 30, 80, 90, 15, 80, 40],
      backgroundColor: "#3b82f6", // Blue
      borderRadius: { topLeft: 0, topRight: 0, bottomLeft: 0, bottomRight: 0 },
    },
    {
      label: "Total leads",
      data: [110, 50, 120, 50, 110, 130, 50, 100, 60, 70, 100, 30, 80, 40, 120],
      backgroundColor: "#a855f7", // Purple
      borderRadius: {
        topLeft: 10,
        topRight: 10,
        bottomLeft: 0,
        bottomRight: 0,
      },
    },
  ],
};

const options: any = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false }, // Custom legend handled via Tailwind below
    tooltip: {
      backgroundColor: "#1a1d21",
      titleColor: "#9ca3af",
      bodyColor: "#fff",
      padding: 12,
      cornerRadius: 12,
      displayColors: true,
      borderColor: "rgba(255,255,255,0.1)",
      borderWidth: 1,
    },
  },
  scales: {
    x: {
      stacked: true,
      grid: { display: false },
      ticks: { color: "#9ca3af", padding: 10 },
    },
    y: {
      stacked: true,
      border: { display: false, dash: [5, 5] },
      grid: { color: "rgba(255,255,255,0.1)", drawTicks: false },
      ticks: { color: "#9ca3af", stepSize: 100, padding: 10 },
    },
  },
};

const LeadOverview = () => {
  return (
    <div className="bg-[#0f1115] p-8 rounded-3xl w-full mb-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-white text-2xl font-medium">Lead Overview</h2>
          <div className="flex gap-6 mt-4">
            <LegendItem color="bg-[#a855f7]" label="Total leads" />
            <LegendItem color="bg-[#3b82f6]" label="Qualified leads" />
            <LegendItem color="bg-[#22c55e]" label="Converted leads" />
          </div>
        </div>

        <button className="flex items-center gap-2 bg-[#1a1d21] border border-white/10 text-gray-300 px-4 py-2 rounded-xl text-sm">
          <Calendar size={16} />
          Jan 1 - Jan 20
          <span className="ml-1 opacity-50">▼</span>
        </button>
      </div>

      {/* Chart Container */}
      <div className="h-100 w-full">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

const LegendItem = ({ color, label }: { color: string; label: string }) => (
  <div className="flex items-center gap-2">
    <div className={`w-3 h-3 rounded-full ${color}`} />
    <span className="text-gray-400 text-sm">{label}</span>
  </div>
);

export default LeadOverview;
