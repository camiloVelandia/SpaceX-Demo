import React from 'react';
import {Section} from './styles'

const Banner = (props) => {
  return (
    <Section>
      <h1> {props.title}</h1>
    </Section>
  );
};

export default Banner;