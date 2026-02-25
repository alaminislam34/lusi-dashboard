"use client";

import DashboardBottomSection from "./_components/home/BottomSection";
import RevenueChart from "./_components/home/Chart";
import DashboardStats from "./_components/home/DashboardStats";

function Home() {
  return (
    <div>
      <DashboardStats />
      <RevenueChart />
      <DashboardBottomSection />
    </div>
  );
}

export default Home;
