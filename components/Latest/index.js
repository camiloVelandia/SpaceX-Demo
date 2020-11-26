import React from 'react';
import {Section, Title, Main, Image, Info, Bullets} from './styles'

const Latest = () => {
  return (
    <Section>
      <Title>
        <h2>latest mission</h2>
      </Title>
      <Main>
        <Image>
          <figure>
            <img src={"./images/escudo.png"} />
          </figure>
        </Image>
        <Info>
          <h3>Name Mission</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit montes a
            pellentesque felis, at sed quam quis praesent tempus arcu sociis
            habitasse donec eros, lacinia elementum etiam per faucibus bibendum
            lacus venenatis leo nam. Nec aliquet eros phasellus hendrerit
            consequat magnis malesuada nascetur posuere at, accumsan vestibulum
            cum gravida erat eget congue imperdiet sagittis, lacinia taciti
            ultricies mi pretium
          </p>
        </Info>
        <Bullets>
          <p>Date: november 10</p>
          <p>site: november 10</p>
          <p>rocket: november 10</p>
        </Bullets>
      </Main>
    </Section>
  );
};

export default Latest;