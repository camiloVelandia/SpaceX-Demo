import React from 'react';
import {Section, Title, Figure,Name,Text,Info,Bullet} from './styles'

const PastCard = (props) => {
  return (
    <Section>
      <Title>recent missions</Title>
      <Figure>
        <img src={props.image || "/images/escudo.png"} />
      </Figure>
      <Name>{props.title}</Name>
      <Text>{props.detail}</Text>
      <Info>
        <Bullet>
          <p>date:</p>
          <p>{props.date}</p>
        </Bullet>
        <Bullet>
          <p>flight number:</p>
          <p>{props.number}</p>
        </Bullet>
        <Bullet>
          <p>succes:</p>
          <p>{props.succes}</p>
        </Bullet>
      </Info>
    </Section>
  );
};

export default PastCard;