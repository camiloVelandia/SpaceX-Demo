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
            Hi, I'm Camilo Velandia, a passionate self-taught frontEnd web
            developer from Colombia. with an interest in web and mobile
            projects, with user-centered approaches. currently part of the
            Platzi master program.
          </Text>
          <Grid>
            <Item>
              <h3>experience</h3>
              <ul>
                <li>Software Developer at Platzi master</li>
                <li>Frontend Developer at 360 PMI</li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/camilo-velandia/"
                    target="_blank"
                  >
                    Find me in Linkedin{" "}
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/xander_coder" target="_blank">
                    Find me in Twitter
                  </a>
                </li>
              </ul>
            </Item>
            <Item>
              <h3> tools</h3>
              <ul>
                <li>Javascript</li>
                <li>React js</li>
                <li>Redux</li>
                <li>Next js</li>
                <li>Styled components</li>
                <li>Git</li>
              </ul>
            </Item>
          </Grid>
        </Article>
      </Container>
    </Section>
  );
};

export default About;