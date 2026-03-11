// components/DashboardStats.tsx
import MetricCard from "./MetricCard";

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-[#0b0e14] mb-6">
      {/* Row 1 */}
      <MetricCard
        title="Monthly Recurring Revenue"
        value="$124,320"
        trend="8.4%"
        trendType="up"
      />
      <MetricCard
        title="Daily Revenue"
        value="$4,820"
        trend="5.4%"
        trendType="up"
      />
      <MetricCard
        title="Average Revenue Per User"
        value="$182"
        trend="+1.8%"
        trendType="up"
      />

      {/* Row 2 */}
      <MetricCard
        title="Customer Lifetime Value (CLV)"
        value="$1,240"
        trend="+10%"
        trendType="up"
      />
      <MetricCard
        title="Customer Acquisition Cost (CAC)"
        value="$340"
        trend="+6.5%"
        trendType="up"
      />
      <MetricCard
        title="Active Paying Businesses"
        value="312"
        trend="+18"
        trendType="up"
        subText="new this month"
      />

      {/* AI Cost Section (Spans 2 columns on large screens) */}
      <div className="lg:col-span-2 bg-[#11141b] border border-gray-800/50 p-6 rounded-[20px]">
        <h3 className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-6">
          Ai cost
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <div className="flex flex-col justify-between">
            <p className="text-gray-400 text-xs mb-2">Cost per Lead</p>
            <p className="text-white text-lg md:text-xl lg:text-3xl font-bold">
              $1.80
            </p>
          </div>
          <div className="flex flex-col justify-between">
            <p className="text-gray-400 text-xs mb-2">Cost per Conversion</p>
            <p className="text-white text-lg md:text-xl lg:text-3xl font-bold">
              $12.40
            </p>
          </div>
          <div className="flex flex-col justify-between">
            <p className="text-gray-400 text-xs mb-2">Cost per Customer</p>
            <p className="text-white text-lg md:text-xl lg:text-3xl font-bold">
              $28.10
            </p>
          </div>
        </div>
      </div>

      <MetricCard
        title="Leads Processed"
        value="18,420"
        trend="12%"
        trendType="up"
        subText="vs last month"
      />

      {/* Row 4 */}
      <MetricCard
        title="Platform Conversion Rate"
        value="27.8%"
        trend="1.2%"
        trendType="up"
        subText="improvement"
      />
      <MetricCard
        title="AI Operating Cost"
        value="$24,800"
        trend="6.1%"
        trendType="up"
        subText="vs last month"
      />
      <MetricCard
        title="Churn Rate"
        value="3.2%"
        trend="0.4%"
        trendType="down"
        subText="vs last month"
      />
    </div>
  );
}
