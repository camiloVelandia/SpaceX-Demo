import React from 'react';
import { Container, Status, Figure, Info,Name, Text, Ul, Lists } from "./styles";

const CapsulCard = (props) => {
  return (
    <Container>
      <Info>
      <Name>{props.name}</Name>
        <Text>
          {props.info}
        </Text>
        <Lists>
          <Ul>
            <h2>Specs</h2>
            <li> capacity: {props.capacity}</li>
            <li> first flight: {props.first_flight}</li>
            <li> type: {props.type}</li>
            <li> height: {props.height}</li>
            <li> feet: {props.feet}</li>
          </Ul>
         
          <Ul>
            <h2>thrusters</h2>
            <li> type: {props.tpropulsor}</li>
            <li> amount: {props.amount}</li>
            <li> fuel1: {props.fuel1}</li>
            <li> fuel2: {props.fuel2}</li>
            <li> isp: {props.isp}</li>            
            <li> pods: {props.pods}</li>            
          </Ul>
          
        </Lists>
        <Figure>
          <img src={props.image} /> 
        </Figure>
      </Info>

      <Status>
        <p>status: {props.status}</p>
      </Status>
    </Container>
  );
};

export default CapsulCard;