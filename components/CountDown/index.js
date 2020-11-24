import React from 'react';
import { Section, Counter, Number, NumberContainer, Info } from "./styles";

const CountDown = () => {
  return (
    <Section>
      <Counter>
        <h1>Up Next</h1>

        <NumberContainer>
          <Number>
            <p>3</p>
            <small>days</small>
          </Number>
          <Number>
            <p>3</p>
            <small>days</small>
          </Number>
          <Number>
            <p>3</p>
            <small>days</small>
          </Number>
          <Number>
            <p>3</p>
            <small>days</small>
          </Number>
        </NumberContainer>
        <Info>
          <p>
            <span>mission:</span> name mission
          </p>
          <p>
            <span>Rocket:</span> name mission
          </p>
        </Info>
      </Counter>
    </Section>
  );
};

export default CountDown;