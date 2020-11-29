import React from "react";
import Banner from "../../components/Banner";
import Latest from "../../components/Latest";
import RecentLayout from "../../components/RecentLayout";
import BtnLaunches from "../../components/BtnLaunches";

const LaunchesPage = () => {
  return (
    <div>
      <Banner title={"launches"} backImage="/images/starlink1.webp" />
      <Latest />
      <RecentLayout />
      <BtnLaunches />
    </div>
  );
};

export default LaunchesPage;
