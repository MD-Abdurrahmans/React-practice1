
import { useState } from 'react';
import './country.css'
const Country = ({country,handleMarkVisited}) => {
    const  {name,flags,population,cca3 } =country;

    const [Visited,setVisited] =useState(false)

    const handleVisit =()=>{

            setVisited(!Visited)
    }

    return (


        <div className={`cards  ${Visited? 'bg-lime-500 text-white' :'bg-white text-black'}` }>
             <h1 style={{backgroundColor: Visited? 'red':'whitecards  visited? "bg-red-500": "bg-balck"'}} >name:{name?.common}</h1>
             <img  className='img' src={flags?.png} alt="flag" />
              <p>population:{population}</p>
               <p>code:{cca3}</p>
               <button onClick={handleVisit}  className='btn bg-green-950 text-white'>{Visited? 'Visited':'GoThere'}</button>
                <br/>
                <button onClick={()=>handleMarkVisited(country)} className='btn bg-pink-700 text-white'> Mark Visited</button>
             <p>{Visited?'visited this country': 'i wanna go there'}</p>
        </div>



    );
};

export default Country;