"use client";

import BusinessStats from "./_components/Business/BusinessStats";
import LeadOverview from "./_components/Business/Chart";
import GrowthSection from "./_components/Business/GrowthSection";

function Home() {
  return (
    <div>
      <BusinessStats />
      <LeadOverview />
      <GrowthSection/>
    </div>
  );
}

export default Home;
