import React from 'react';
import {Section, Title, Figure,Name,Text,Info,Bullet} from './styles'

const PastCard = (props) => {
  console.log(props)
  return (
    <Section>
      <Title>recent missions</Title>
      <Figure>
        <img src={"/images/escudo.png"} />
      </Figure>
      <Name>{props.title}</Name>
      <Text>{props.detail}</Text>
      <Info>
        <Bullet>
          <p>date:</p>
          <p>november 10</p>
        </Bullet>
        <Bullet>
          <p>date:</p>
          <p>november 10</p>
        </Bullet>
        <Bullet>
          <p>date:</p>
          <p>november 10</p>
        </Bullet>
      </Info>
    </Section>
  );
};

export default PastCard;