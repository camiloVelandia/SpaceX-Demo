import React from 'react';
import {Section, Title, Container} from './styles'
import { Doughnut } from "react-chartjs-2";




const StatCard = (props) => {
  return (
    <Section>
      <Title>{props.title || "titulo"}</Title>
      <Container>
        <Doughnut data={props.items} />
      </Container>
    </Section>
  );
};

export default StatCard;