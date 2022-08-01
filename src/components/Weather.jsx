import React from 'react'
import axios from 'axios';

const Weather = ({weather,city,setCity,setWeather}) =>{
    const onSubmit = (e)=> {
        e.preventDefault()
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
      .then(data=>{
        data = data.data
        setWeather({
          name:data.name,
          temp:data.main.temp,
          humidity:data.main.humidity,
          lat:data.coord.lat,
          lon:data.coord.lon,
          pressure:data.main.pressure,
          temp_min:data.main.temp_min,
          temp_max:data.main.temp_max,
          wind:data.wind.speed
      })})
    }

    return(
        <div className="Weather">
            <form>
                <h1><span>L</span>ive <span>C</span>limate <span>F</span>orecast</h1>
                <input 
                    type="text"
                    placeholder='City Name'
                    onChange={(e)=>{setCity(e.target.value)}}
                    value = {city}    
                />
                <button onClick={onSubmit}>Search</button>
            </form>
        </div>
    )
}

export default Weather