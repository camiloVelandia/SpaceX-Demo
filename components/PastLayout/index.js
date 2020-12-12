import React,{useState, useEffect} from 'react';
import PastCard from '../PastCard'
import {Section, Pagination} from './styles'
import getPastLaunches from "../../services/getPastLaunches";
import Spinner from "../Spinner";

const PastLayout = () => {

  const [pastlaunches, setpastlaunches] = useState({docs:[]});
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);


  useEffect(() => {
    setLoading(true);
    getPastLaunches().then((data) => {
      setpastlaunches(data);
      setPage(data.page)
      setLoading(false);
    });
  }, []);


  const handleNextPage=()=>{
    setPage(prevPage => prevPage+1)
  }

  useEffect(()=>{
    if(page===0)return
    getPastLaunches(page)
    .then(nextPagelaunch=>{
      const total= pastlaunches
      setpastlaunches( nextPagelaunch)
    })
  },[page])

  if (loading) {
    return <Spinner />;
  }
  if(!pastlaunches.nextPage){
    return <Spinner/>
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
        <Pagination onClick={handleNextPage}>view more</Pagination>
    </Section>
  );
};

export default PastLayout;