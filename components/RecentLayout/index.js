import React from "react";
import PastCard from "../PastCard";
import { Section } from "./styles";

const PastLayout = () => {
  return (
    <Section>
      <PastCard />
      <PastCard />
    </Section>
  );
};

export default PastLayout;
