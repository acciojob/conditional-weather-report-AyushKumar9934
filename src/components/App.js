
import React, { useState } from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay";

const App = () => {
  const [currTemp, setCurrTemp] = useState("25");
  const [currCond, setCurrCond] = useState("Sunny");
  
  return (
    <div>
        {/* Do not remove the main div */}
       <input type="num" onChange={(e)=>setCurrTemp(e.target.value)} value={currTemp} placeholder="Temp"/>
       <input type="text" onChange={(e)=>setCurrCond(e.target.value)} value={currCond} placeholder="condition"/>
       <WeatherDisplay currTemp={currTemp} currCond={currCond} />
    </div>
  )
}

export default App;