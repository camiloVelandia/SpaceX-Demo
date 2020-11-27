import React from 'react';
import { Container, Status, Figure, Info,Name, Text, Ul, Lists } from "./styles";

const CapsulCard = () => {
  return (
    <Container>
      <Info>
      <Name>name capsule</Name>
        <Text>
          With the ability to lift into orbit over 54 metric tons (119,000
          lb)--a mass equivalent to a 737 jetliner loaded with passengers, crew,
          luggage and fuel--Falcon Heavy can lift more than twice the payload of
          the next closest operational vehicle, the Delta IV Heavy, at one-third
          the cost.
        </Text>
        <Lists>
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
        </Lists>
        <Figure>
          <img src={'./images/capsul.png'} /> 
        </Figure>
      </Info>

      <Status>
        <p>status: active</p>
      </Status>
    </Container>
  );
};

export default CapsulCard;