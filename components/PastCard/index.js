import React from 'react';
import {Section, Title, Figure,Name,Text,Info,Bullet} from './styles'

const PastCard = () => {
  return (
    <Section>
      <Title>recent missions</Title>
      <Figure>
        <img src={"/images/escudo.png"} />
      </Figure>
      <Name>name mission</Name>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipiscing elit montes a
        pellentesque felis, at sed quam quis praesent tempus arcu sociis
        habitasse donec eros, lacinia elementum etiam per faucibus bibendum
        lacus venenatis leo nam. Nec aliquet eros phasellus hendrerit consequat
        magnis malesuada nascetur posuere at, accumsan vestibulum cum gravida
        erat eget congue imperdiet sagittis, lacinia taciti ultricies mi pretium
      </Text>
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