import React,{useState, useEffect} from 'react';
import { Section, Counter, Number, NumberContainer, Info } from "./styles";
import getNextLaunch from "../../services/getNextLaunch";
import getOneRocket from "../../services/getOneRocket";


const CountDown = () => {
  const [nextlaunch, setNextlaunch] = useState({});
  const [rocketUsed, setRocketUsed] = useState({});
  const [date, setDate] = useState(`2020-12-05T11:39:00-05:00`);
  
  const calculateTimeLeft = () => {
     let year = new Date().getFullYear();
     const difference = +new Date(date) - +new Date();
     let timeLeft = {};
     
     if (difference > 0) {
       timeLeft = {
         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
         hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
         minutes: Math.floor((difference / 1000 / 60) % 60),
         seconds: Math.floor((difference / 1000) % 60),
       };
      }
      
      return timeLeft;
    };
    
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());


  useEffect(() => {
    getNextLaunch()
    .then((data) =>{ 
      setNextlaunch({...data})
      if (nextlaunch.rocket) {
        return getOneRocket(nextlaunch.rocket).then((data) =>
        setRocketUsed({ ...data })
        )
      }
    })
    
    // ;
    
  }, []);

   

    useEffect(() => {
      setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
      setDate(nextlaunch.date_local);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval, index) => {
   

      timerComponents.push(
        <Number key={index}>
          <p>{timeLeft[interval]}</p>
          <span>{interval}</span>{" "}
        </Number>
      );
    });
 
  return (
    <Section>
      <Counter>
        <h1>Up Next</h1>

        <NumberContainer>
          {timerComponents.length ? timerComponents : <small>Time's up!</small>}
        </NumberContainer>
        <Info>
          <p>
            <span>mission:</span> {nextlaunch.name}
          </p>
          <p>
            <span>Rocket:</span> {rocketUsed.name || 'falcon'}
          </p>
        </Info>
      </Counter>
    </Section>
  );
};

export default CountDown;