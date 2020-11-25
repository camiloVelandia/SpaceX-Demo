import React from 'react';
import RocketCard from "../RocketCard";
import {Container} from './styles'

const RocketLayout = () => {
  return (
    <Container>
      <RocketCard/>
      <RocketCard/>
      <RocketCard/>
    </Container>
  );
};

export default RocketLayout;