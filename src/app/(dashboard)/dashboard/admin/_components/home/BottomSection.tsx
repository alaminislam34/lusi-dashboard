export default function DashboardBottomSection() {
  return (
    <div className="space-y-6 mt-6">
      {/* Top Row: Leads and Support */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Leads Overview */}
        <div className="bg-[#11141b] border border-gray-800/50 p-6 rounded-[20px]">
          <h3 className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-8">
            Leads Overview
          </h3>
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-6">
            <StatGroup label="Leads Today" value="248" />
            <StatGroup label="Leads This Week" value="1,480" />
            <StatGroup label="Avg AI Response Time" value="3.2 s" />
            <StatGroup label="Missed Leads" value="2.1%" />
          </div>
        </div>

        {/* Support & SLA Health */}
        <div className="bg-[#11141b] border border-gray-800/50 p-6 rounded-[20px]">
          <h3 className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-8">
            Support & SLA Health
          </h3>
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-6">
            <StatGroup label="Open Tickets" value="42" />
            <StatGroup label="Closed Today" value="18" />
            <StatGroup label="Avg Resolution Time" value="4h 12m" />
            <StatGroup label="SLA Breaches" value="3" />
          </div>
        </div>
      </div>

      {/* Bottom Row: AI Performance Health (Full Width) */}
      <div className="bg-[#11141b] border border-gray-800/50 p-6 rounded-[20px]">
        <h3 className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-8">
          AI Performance Health
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <StatGroup label="Total Conversations" value="18,420" />
          <StatGroup label="Avg Qualification Time" value="2m 14s" />
          <StatGroup label="AI Failure Rate" value="1.8%" />
          <StatGroup label="Average Lead Score" value="7.8 / 10" />
        </div>
      </div>
    </div>
  );
}

function StatGroup({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-gray-500 text-xs min-h-8">
        {label}
      </p>
      <p className="text-white text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold tracking-tight">
        {value}
      </p>
    </div>
  );
}
