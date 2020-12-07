import React,{useState, useEffect} from 'react';
import PastCard from '../PastCard'
import {Section} from './styles'
import getPastLaunches from "../../services/getPastLaunches";
import Spinner from "../Spinner";

const PastLayout = () => {

  const [pastlaunches, setpastlaunches] = useState({docs:[]});
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
    getPastLaunches().then((data) => {
      setpastlaunches(data);
      setLoading(false);
    });
  }, []);

    console.log(pastlaunches);
  if (loading) {
    return <Spinner />;
  }
  return (
    <Section>
       {pastlaunches.docs.map((item, index)=>{
        return (
          <PastCard
            key={item.id}
            title={item.name}
            detail={item.details}
            image={item.links.patch.small}
            number={item.flight_number}
            date={item.date_local}
            succes={item.success ? "succes" : "fail"}
          />
        );})
        } 
    </Section>
  );
};

export default PastLayout;