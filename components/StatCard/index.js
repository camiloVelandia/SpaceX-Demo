import React from 'react';
import {Section, Title, Container} from './styles'

const StatCard = (props) => {
  return (
    <Section>
      <Title>{props.title || 'titulo'}</Title>
      <Container>grafica</Container>
    </Section>
  );
};

export default StatCard;