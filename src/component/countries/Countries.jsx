import { useEffect, useState } from "react";
 import Country from '../country/Country'

const Countries = () => {
// store data use state
 const [countries,setCountries] =useState([])
// fetch data use effect

 useEffect(()=>{


    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data =>setCountries(data))


 },[])


 const [markVisited,setmarkVisited] =  useState([])



 const  handleMarkVisited =(country)=>{

      console.log("handle mark done",country)

       const newVisited = [...markVisited,country];

       setmarkVisited(newVisited);
    //  console.log(country.name.common)
 }


    return (
        <div className="flex">
           
           <div className="w-80 text-center">
           <p className="text-red-600 font-bold text-3xl underline">country:{countries.length}</p>
           <h1 className="bg-orange-600 text-white mt-6">VisitedCountry</h1>
       
         {
            markVisited.map((data)=>     <ul>  <div> <li> {data.name.common} </li>
            
            
            <img  className=" w-full h-16 "  src={data.flags.png} alt="flags" />
            
            </div> </ul>)
         }
           </div>

          <div className="grid grid-cols-3">
          {
                countries.map(country=> <Country  keys={country.cca3} handleMarkVisited={handleMarkVisited}   country={country} ></Country>)
            }
          </div>
        </div>
    );
};

export default Countries;