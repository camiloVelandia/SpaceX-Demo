import React from 'react';
import {Container, Status, Main, Image, Info, Text, Ul} from './styles'

const RocketCard = (props) => {
  return (
    <Container>
      <Main>
        <Image>
          <figure>
            <img src={props.image} />
          </figure>
        </Image>
        <Info>
          <h2>{props.name}</h2>
          <Text>{props.info}</Text>

          <Ul>
            <h2>Specs</h2>
            <li> boosters: {props.boosters}</li>
            <li> cost-launch: {props.costLaunch}</li>
            <li> stages: {props.stages}</li>
            <li> succes rate: {props.succesRate}</li>
          </Ul>
          <Ul>
            <h2>Engines</h2>
            <li> engine loss max: {props.engineLoss}</li>
            <li> layout: {props.layout}</li>
            <li> number: {props.number}</li>
            <li> type: {props.type}</li>
            <li> version: {props.version}</li>
            <li> propellant 1: {props.propellant1}</li>
          </Ul>
          <Ul>
            <h2>Other</h2>
            <li> fisrt flight: {props.fflight}</li>
            <li> country: {props.country}</li>
            
          </Ul>
        </Info>
      </Main>
      <Status status={props.status}>
        <p>status: {props.status}</p>
      </Status>
    </Container>
  );
};

export default RocketCard;