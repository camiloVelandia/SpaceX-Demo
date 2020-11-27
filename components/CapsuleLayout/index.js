import React from 'react';
import CapsulCard from '../CapsulCard'

import {Container} from './styles'

const CapsulesLayout = () => {
  return (
    <Container>
      <CapsulCard/>
      <CapsulCard/>
    </Container>
  );
};

export default CapsulesLayout;