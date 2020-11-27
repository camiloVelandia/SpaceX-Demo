import React from "react";
import Banner from "../../components/Banner";
import HistoryLaunch from "../../components/HistoryLaunch";
import StatCard from "../../components/StatCard";

import {Grid} from './styles'

const StatsPage = () => {
  return (
    <div>
      <Banner title={"stats"} />
      <HistoryLaunch />
      <Grid>
        <StatCard title="dragon misions" />
        <StatCard title="Starlink- in space" />
      </Grid>
    </div>
  );
};

export default StatsPage;
