"use client";

import React, { useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ScriptableContext,
  ChartData,
  ChartOptions,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Registering the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
);

export default function RevenueChart() {
  // FIXED: Using the base ChartJS type directly.
  // This avoids the 'dist/types' import issue entirely.
  const chartRef = useRef<ChartJS<"line">>(null);

  const createGradient = (ctx: CanvasRenderingContext2D, color: string) => {
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, `${color}44`);
    gradient.addColorStop(1, `${color}00`);
    return gradient;
  };

  // Defining data with proper types
  const data: ChartData<"line"> = {
    labels: Array.from({ length: 20 }, (_, i) => `Jan ${i + 1}`),
    datasets: [
      {
        label: "Net Profit",
        data: [
          20, 30, 45, 60, 90, 110, 120, 125, 128, 130, 135, 160, 180, 200, 210,
          220, 230, 240, 245, 250,
        ],
        borderColor: "#22c55e",
        backgroundColor: (context: ScriptableContext<"line">) => {
          const ctx = context.chart.ctx;
          return createGradient(ctx, "#22c55e");
        },
        fill: true,
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 6,
      },
      {
        label: "AI Cost",
        data: [
          45, 55, 40, 30, 50, 80, 100, 90, 110, 150, 190, 210, 180, 130, 110,
          105, 100, 105, 110, 120,
        ],
        borderColor: "#3b82f6",
        backgroundColor: (context: ScriptableContext<"line">) => {
          const ctx = context.chart.ctx;
          return createGradient(ctx, "#3b82f6");
        },
        fill: true,
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 6,
      },
      {
        label: "MRR",
        data: [
          15, 25, 15, 10, 20, 45, 60, 40, 35, 40, 55, 80, 95, 80, 60, 45, 35,
          30, 40, 50,
        ],
        borderColor: "#a855f7",
        backgroundColor: (context: ScriptableContext<"line">) => {
          const ctx = context.chart.ctx;
          return createGradient(ctx, "#a855f7");
        },
        fill: true,
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 6,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    // ADD THIS: Interaction mode 'index' makes the tooltip show
    // for all items at the same X-axis point
    interaction: {
      mode: "index",
      intersect: false,
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        backgroundColor: "#1e222d",
        titleColor: "#94a3b8",
        bodyColor: "#ffffff",
        padding: 12,
        cornerRadius: 12,
        displayColors: true,
        boxPadding: 6,
        // Optional: formatting the value in the tooltip
        callbacks: {
          label: (context) =>
            ` ${context.dataset.label}: $${context.parsed.y?.toLocaleString?.() ?? "0"}`,
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#64748b", font: { size: 10 } },
      },
      y: {
        grid: {
          color: "rgba(255, 255, 255, 0.05)",
          // @ts-ignore - tickBorderDash is valid but sometimes types act up
          tickBorderDash: [5, 5],
        },
        ticks: {
          color: "#64748b",
          font: { size: 10 },
          callback: (value) => `${value}K`,
        },
      },
    },
  };

  return (
    <div className="bg-[#11141b] border border-gray-800/50 p-6 rounded-[20px] w-full">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Revenue vs Cost vs Net Profit
          </h3>
          <div className="flex flex-wrap gap-6">
            <LegendItem color="bg-[#a855f7]" label="MRR" />
            <LegendItem color="bg-[#3b82f6]" label="AI Cost" />
            <LegendItem color="bg-[#22c55e]" label="Net Profit" />
          </div>
        </div>
        <div className="bg-[#1a1d26] border border-gray-800 px-4 py-2 rounded-lg flex items-center justify-between min-w-35 text-xs text-gray-400 cursor-pointer">
          <span>Jan 1 - Jan 20</span>
          <div className="w-2 h-2 border-r border-b border-gray-400 rotate-45 mb-1 ml-2" />
        </div>
      </div>

      <div className="h-87.5 w-full">
        <Line ref={chartRef} data={data} options={options} />
      </div>
    </div>
  );
}

function LegendItem({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className={`w-2 h-2 rounded-full ${color}`} />
      <span className="text-gray-400 text-sm">{label}</span>
    </div>
  );
}
