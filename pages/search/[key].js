import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import getAllLaunches from "../../services/getAllLaunches";
import PastCard from "../../components/PastCard";

const Result = () => {
  const router = useRouter();
  const [launches, setlaunches] = useState([]);
  const [result, setresult] = useState([]);

useEffect(() => {
  getAllLaunches().then((data) => setlaunches(data));
}, []);


useEffect(()=>{
  const search = launches.filter(item => item.name === router.query.key);
  setresult(search)
},[])

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <p>{router.query.key}</p>
      <div>
        {result.map((item, index) => {
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
        { }
      </div>
    </div>
  );
};

export default Result;