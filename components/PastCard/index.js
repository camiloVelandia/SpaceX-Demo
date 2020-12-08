import React,{useState, useEffect} from 'react';
import {Section, Title, Figure,Name,Text,Info,Bullet} from './styles'

const PastCard = (props) => {

  const [date, setDate] = useState('');

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const today = new Date(props.date);
 
  useEffect(() => {
    setDate(today.toLocaleDateString("en-US"));
  },[]);

  return (
    <Section>
      <Title>recent missions</Title>
      <Figure>
        <img src={props.image || "/images/escudo.png"} />
      </Figure>
      <Name>{props.title}</Name>
      <Text>{props.detail}</Text>
      <Info>
        <Bullet>
          <p>
            <span>date:</span>
          </p>
          <p>{date}</p>
        </Bullet>
        <Bullet>
          <p><span>flight number:</span></p>
          <p>{props.number}</p>
        </Bullet>
        <Bullet>
          <p><span>succes:</span></p>
          <p>{props.succes}</p>
        </Bullet>
      </Info>
    </Section>
  );
};

export default PastCard;