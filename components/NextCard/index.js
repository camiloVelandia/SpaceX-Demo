import React from "react";
import { Section, Title, Figure, Name, Text, Info, Bullet } from "./styles";

const NextCard = (props) => {
  return (
    <Section>
      <Title>Next missions</Title>
      <Figure>
        <img src={props.image || "/images/escudo.png"} />
      </Figure>
      <Name>{props.name}</Name>
      <Text>
        {props.details || 'Details must be ready in the upcomings days, the information is not provides still.'}
      </Text>
      <Info>
        <Bullet>
          <p>date:</p>
          <p>{props.date}</p>
        </Bullet>
        <Bullet>
          <p>flight number:</p>
          <p>{props.number}</p>
        </Bullet>
        
      </Info>
    </Section>
  );
};

export default NextCard;
