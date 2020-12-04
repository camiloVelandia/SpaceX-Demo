import React from "react";
import Banner from "../../components/Banner";
import HistoryLaunch from "../../components/HistoryLaunch";
import GridStats from "../../components/GridStats";

const StatsPage = () => {
  return (
    <div>
      <Banner title={"stats"} backImage="/images/stats.jpeg" />
      <HistoryLaunch />
      <GridStats />
    </div>
  );
};

export default StatsPage;
