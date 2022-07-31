import React from "react";
import { FaSearchLocation} from 'react-icons/fa'

const Region = ({weather,city,setCity}) =>{

    return(
        <div className="Region">
            <h1 style={{fontSize:"60px",letterSpacing:"12px"}}><FaSearchLocation />  &nbsp;{weather.name}</h1>
            <h2>Lat:{weather.lat} &nbsp;  Lon:{weather.lon}</h2>
        </div>
    )
}


export default Region