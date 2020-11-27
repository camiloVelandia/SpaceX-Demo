import React from 'react';
import { Section, Container, Article, Title,Text,Grid,Item } from './styles';

const About = () => {
  return (
    <Section>
      <Container>
        <Article>
          <Title>about: space x</Title>
          <Text>
            SpaceX designs, manufactures and launches advanced rockets and
            spacecraft. The company was founded in 2002 to revolutionize space
            technology, with the ultimate goal of enabling people to live on
            other planets.
          </Text>
          <Grid>
            <Item>
              <h3>company info</h3>
              <ul>
                <li>Founded: 2002</li>
                <li>Founded: 2002</li>
                <li>Founded: 2002</li>
                <li>Founded: 2002</li>
                <li>Founded: 2002</li>
              </ul>
            </Item>
            <Item>
              <h3>company info</h3>
              <ul>
                <li>Founded: 2002</li>
                <li>Founded: 2002</li>
                <li>Founded: 2002</li>
                <li>Founded: 2002</li>
                <li>Founded: 2002</li>
              </ul>
            </Item>
          </Grid>
        </Article>
        <Article>
          <Title>about: me</Title>
          <Text>
            SpaceX designs, manufactures and launches advanced rockets and
            spacecraft. The company was founded in 2002 to revolutionize space
            technology, with the ultimate goal of enabling people to live on
            other planets.
          </Text>
          <Grid>
            <Item>
              <h3>company info</h3>
              <ul>
                <li>Founded: 2002</li>
                <li>Founded: 2002</li>
                <li>Founded: 2002</li>
                <li>Founded: 2002</li>
                <li>Founded: 2002</li>
              </ul>
            </Item>
            <Item>
              <h3>company info</h3>
              <ul>
                <li>Founded: 2002</li>
                <li>Founded: 2002</li>
                <li>Founded: 2002</li>
                <li>Founded: 2002</li>
                <li>Founded: 2002</li>
              </ul>
            </Item>
          </Grid>
        </Article>
      </Container>
    </Section>
  );
};

export default About;