import React, {useState, useEffect} from 'react';
import getCompanyInfo from '../../services/getCompanyInfo';
import { Section, Container, Article, Title,Text,Grid,Item } from './styles';

const About = () => {

  const [info, setinfo] = useState({links:{}} )


  useEffect(()=>{
    getCompanyInfo()
    .then(data=>setinfo({...data}))
  },[])

  return (
    <Section>
      <Container>
        <Article>
          <Title>about: {info.name}</Title>
          <Text>{info.summary}</Text>
          <Grid>
            <Item>
              <h3>company info</h3>
              <ul>
                <li>Founded: {info.founded}</li>
                <li>CEO: {info.ceo}</li>
                <li>CTO: {info.cto}</li>
                <li>COO: {info.coo}</li>
                <li>CTO propulsion: {info.cto_propulsion}</li>
              </ul>
            </Item>
            <Item>
              <h3>More</h3>
              <ul>
                <li>Employees: {info.employees}</li>
                <li>Launch Sites: {info.launch_sites}</li>
                <li>Valuation: {info.valuation}</li>
                <li>
                  Website:{" "}
                  <a href={info.links.website} target="_blank">
                    {info.links.website}
                  </a>
                </li>
                <li>
                  twitter:{" "}
                  <a href={info.links.twitter} target="_blank">
                    {info.links.twitter}
                  </a>
                </li>
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
                <li>
                  <a href="https://github.com/camiloVelandia" target="_blank">
                    Find me in Github
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