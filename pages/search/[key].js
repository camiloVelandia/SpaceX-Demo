import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import getFilterLaunches from "../../services/getFilterLaunches";
import PastCard from "../../components/PastCard";

const Result = () => {
  const router = useRouter();
  const [launches, setlaunches] = useState({docs:[]});
  const [result, setresult] = useState([]);
  const [keyword, setkeyword] = useState(router.query.key);


useEffect(() => {
  getFilterLaunches(keyword).then((data) => {
    setlaunches(data);
  });
  
}, [keyword]);



useEffect(()=>{
  setresult(launches.docs)
  setkeyword(router.query.key)
},[launches])




  return (
    <div className="result">
      <p className="result-title">
        <span> results for:</span> {keyword}
      </p>
      <div className="resultContainer">
      
        {!result.length > 0? <p className="notFound">Not found results</p> : result.map((item, index) => {
          return (
            <PastCard
              key={item.id}
              title={item.name}
              detail={item.details}
              image={item.links.patch.small}
              number={item.flight_number}
              date={item.date_local}
              succes={item.succes ? "succes" : "fail"}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Result;