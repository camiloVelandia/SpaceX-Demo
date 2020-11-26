import React from 'react';
import Link from 'next/link'

import {Section, Btn} from './styles'

const BtnLaunches = () => {
  return (
    <Section>
      <Link href='/launches/prev'>
        <Btn>past launches</Btn>
      </Link>
      <Link href='/launches/next'>
        <Btn>next launches</Btn>
      </Link>
    </Section>
  );
};

export default BtnLaunches;