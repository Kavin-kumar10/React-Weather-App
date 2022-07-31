import React,{useState,useEffect} from 'react';
import Weather from './components/Weather'
import Data from './components/Data'
import Region from './components/Region';
import './App.css';

function App() {
  const [weather,setWeather] = useState({
    name:"LOCATION",
    temp:0,
    humidity:0,
    lat:0,
    lon:0,
    pressure:0,
    temp_max:0,
    temp_min:0,
    wind:0

  })
  const [city,setCity] = useState("")

  return (
    <div className="App">
      <div className="weather-head">
      <div className="left">
        <Weather weather = {weather} city = {city} setCity = {setCity} setWeather={setWeather}/>
      </div>
      <div className="right">
          <Region weather = {weather} city = {city} setCity = {setCity} />
      </div>
      </div>
      <div className="data-contain">
        <Data weather = {weather} city={city} setCity = {setCity} />
      </div>
      <h1 id='footer'>Created by Kavin-kumar10</h1>
    </div>
  );
}

export default App;




  // const [val,setVal] = useState({})
  // const [page,setPage] = useState("todos")
  // // useEffect(()=>{
  // //   fetch(`https://jsonplaceholder.typicode.com/${page}`)
  // //     .then(response => response.json())
  // //     .then(json=>setVal(json))
  // // },[page])

{/* <button onClick={()=>setPage("comments")}>Comments</button>
<button onClick={()=>setPage("albums")}>Album</button>
{JSON.stringify(val)} */}