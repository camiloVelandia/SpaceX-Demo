import React, {useState, useEffect} from 'react';
import CapsulCard from '../CapsulCard'
import getDragonsInfo from "../../services/getDragonsInfo";


import {Container} from './styles'

const CapsulesLayout = () => {

  const [dragon, setDragon] = useState([])

   useEffect(() => {
     getDragonsInfo().then((data) => setDragon(data));
   }, []);


  
  return (
    <Container>
      {
        dragon.map(item=>(
          <CapsulCard 
          key={item.id}
          name={ item.name} 
          info={item.description} 
          image={item.flickr_images[0]} 
          status={item.active? 'active': 'disabled'}
          capacity={item.crew_capacity}
          first_flight={item.first_flight}
          type={item.type}
          height={item.diameter.meters}
          feet={item.diameter.feet}
          tpropulsor={item.thrusters[0].type}
          fuel1={item.thrusters[0].fuel_1}
          fuel2={item.thrusters[0].fuel_2}
          isp={item.thrusters[0].isp}
          pods={item.thrusters[0].pods}
          amount={item.thrusters[0].amount}
           />
        ))
      }
    </Container>
  );
};

export default CapsulesLayout;