import React,{useState, useEffect} from 'react';
import { Section, Counter, Number, NumberContainer, Info } from "./styles";
import getNextLaunch from "../../services/getNextLaunch";
import getOneRocket from "../../services/getOneRocket";


const CountDown = () => {
  const [nextlaunch, setNextlaunch] = useState({});
  const [rocketUsed, setRocketUsed] = useState({});
  const [date, setDate] = useState('');
  

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
    
    setDate(nextlaunch.date_local);
    
  }, []);

  
  const calculateTimeLeft = (date) => {
      // let year = new Date().getFullYear();
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
      setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
      if (!timeLeft[interval]) {
        return;
      }

      timerComponents.push(
        <span>
          {timeLeft[interval]} {interval}{" "}
        </span>
      );
    });

    console.log(nextlaunch)
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
            <p>
              3
              {timerComponents.length ? (
                timerComponents
              ) : (
                <span>Time's up!</span>
              )}
            </p>
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
            <span>mission:</span> {nextlaunch.name}
          </p>
          <p>
            <span>Rocket:</span> {rocketUsed.name}
          </p>
        </Info>
      </Counter>
    </Section>
  );
};

export default CountDown;