import React,{useState, useEffect} from 'react';
import {Section, Title, Main, Image, Info, Bullets} from './styles'
import getLatestLaunch from "../../services/getLatestLaunch";
import getOneRocket from "../../services/getOneRocket";

const Latest = () => {

const [latest, setLatest] = useState({links:{patch:{}}})
const [rocketUsed, setRocketUsed] = useState({})

useEffect(() => {
   getLatestLaunch()
   .then((data) => setLatest({...data}))
   if(latest.rocket){
    return getOneRocket(latest.rocket).then((data) => setRocketUsed({ ...data }));
  }
}, []);
  return (
    <Section>
      <Title>
        <h2>latest mission</h2>
      </Title>
      <Main>
        <Image>
          <figure>
            <img src={latest.links.patch.large} />
          </figure>
        </Image>
        <Info>
          <h3>{latest.name}</h3>
          <p>{latest.details}</p>
        </Info>
        <Bullets>
          <p>Date: {latest.date_local}</p>
          <p>succes: {latest.success ? "yes" : "fail"}</p>
          <p>rocket: {rocketUsed.name}</p>
        </Bullets>
      </Main>
    </Section>
  );
};

export default Latest;