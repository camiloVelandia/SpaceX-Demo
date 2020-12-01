import React, {useState, useEffect} from "react";
import PastCard from "../PastCard";
import { Section } from "./styles";
import getAllLaunches from "../../services/getAllLaunches";

const PastLayout = () => {

const [launches, setlaunches] = useState([])

useEffect(() => {
  getAllLaunches().then((data) => setlaunches(data));
}, []);
console.log(launches[launches.length-1])
  return (
    <Section>
      {launches.map((item, index)=>{
        if (index > launches.length-3){
        return (
          <PastCard key={item.id} title={item.name} detail={item.details} />
        );
        } 
 
      })}
    </Section>
  );
};

export default PastLayout;
