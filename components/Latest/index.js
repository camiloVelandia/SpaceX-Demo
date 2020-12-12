import React,{useState, useEffect} from 'react';
import {Section, Title, Main, Image, Info, Bullets} from './styles'
import getLatestLaunch from "../../services/getLatestLaunch";
import getOneRocket from "../../services/getOneRocket";
import Spinner from "../Spinner";

const Latest = () => {

const [latest, setLatest] = useState({links:{patch:{}}})
const [rocketUsed, setRocketUsed] = useState({})
const [loading, setLoading] = useState(false);
const [date, setDate] = useState('')

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const today = new Date(latest.date_local);
useEffect(() => {
  setLoading(true);
   getLatestLaunch()
   .then((data) =>{
      setLatest({...data})
      setLoading(false)
    })
   if(latest.rocket){
    return getOneRocket(latest.rocket).then((data) => setRocketUsed({ ...data }));
  }
}, []);

useEffect(()=>{
  setDate(today.toLocaleDateString("en-US"))
},[latest])

if (loading) {
  return <Spinner />;
}


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
          <p>Date: {date}</p>
          <p>succes: {latest.success ? "yes" : "fail"}</p>
          <p>rocket: {rocketUsed.name || 'falcon'}</p>
        </Bullets>
      </Main>
    </Section>
  );
};

export default Latest;