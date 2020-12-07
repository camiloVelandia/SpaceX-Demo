const API = `https://api.spacexdata.com/v4/launches/query`,
 params = {
        method: 'POST', 
        body:JSON.stringify( {
        "query":{},
          "options":{
              "limit":10,
              "sort":{
                "date_utc":"desc"
              }
            }        
        } ),    
        headers: new Headers( {
            'Content-Type': 'application/json'
        } )
    };   

export default async function getAllLaunches() {
  let response = await fetch(API, params);
  let data = await response.json();
  return data;
}
