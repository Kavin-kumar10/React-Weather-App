import React from 'react'
import Box from './Box'
import '../App.css'


const Data = ({weather}) =>{
    let image = 'Sunny'
    if(weather.temp > 30) {
        image='Sunny'
    } else if(weather.temp < 30 && weather.temp > 15) {
        image='Moderate'
    } else if(weather.temp > 0){
        image='SunnyRain'
    }

    return(
        <div className="Data">
          <div className="Box">
                <img src={`${image}.png`} width={"300px"} alt="climate"/>
                <h1 style={{color:"white",fontSize:"50px"}}>{image}</h1>
          </div> 
         <Box value = {weather.temp} />   
         <div className="last-box">
            <h1 style={{color:"white",fontSize:"50px"}}>Pressure: {weather.pressure} mb &nbsp; Humidity: {weather.humidity}</h1>
            <h1 style={{color:"white",fontSize:"50px"}}>Wind - Speed:{weather.wind} Km/h</h1>
            <h1 style={{color:"white"}}>-------------------------------</h1>
            <h2 style={{color:"white",fontSize:"25px"}}>Min - Temp: {weather.temp_min} &deg;C &nbsp; Max - Temp: {weather.temp_max} &deg;C</h2>
         </div>
        </div>
    )
}




export default Data