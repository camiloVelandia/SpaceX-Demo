import React from "react";
import Banner from "../../components/Banner";
import CapsulesLayout from "../../components/CapsuleLayout";

const CapsulesPage = () => {
  return (
    <div>
      <Banner title={"capsules"} backImage='/images/cap.jpg' />
      <CapsulesLayout />
    </div>
  );
};

export default CapsulesPage;
