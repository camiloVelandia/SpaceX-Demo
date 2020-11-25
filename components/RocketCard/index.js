import React from 'react';
import {Container, Status, Main, Image, Info, Text, Ul} from './styles'

const RocketCard = () => {
  return (
    <Container>
      <Main>
        <Image>
          <figure>
            <img src={"./images/falcon.webp"} />
          </figure>
        </Image>
        <Info>
          <Text>
            With the ability to lift into orbit over 54 metric tons (119,000
            lb)--a mass equivalent to a 737 jetliner loaded with passengers,
            crew, luggage and fuel--Falcon Heavy can lift more than twice the
            payload of the next closest operational vehicle, the Delta IV Heavy,
            at one-third the cost.
          </Text>

          <Ul>
            <h2>Specs</h2>
            <li> height: 70m</li>
            <li> height: 70m</li>
            <li> height: 70m</li>
            <li> height: 70m</li>
            <li> height: 70m</li>
          </Ul>
          <Ul>
            <h2>Specs</h2>
            <li> height: 70m</li>
            <li> height: 70m</li>
            <li> height: 70m</li>
            <li> height: 70m</li>
            <li> height: 70m</li>
          </Ul>
          <Ul>
            <h2>Specs</h2>
            <li> height: 70m</li>
            <li> height: 70m</li>
            <li> height: 70m</li>
            <li> height: 70m</li>
            <li> height: 70m</li>
          </Ul>
          <Ul>
            <h2>Specs</h2>
            <li> height: 70m</li>
            <li> height: 70m</li>
            <li> height: 70m</li>
            <li> height: 70m</li>
            <li> height: 70m</li>
          </Ul>
          <Ul>
            <h2>Specs</h2>
            <li> height: 70m</li>
            <li> height: 70m</li>
            <li> height: 70m</li>
            <li> height: 70m</li>
            <li> height: 70m</li>
          </Ul>
          

        </Info>
      </Main>
      <Status>
        <p>status: active</p>
      </Status>
    </Container>
  );
};

export default RocketCard;