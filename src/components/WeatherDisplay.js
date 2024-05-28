import React from 'react'

const WeatherDisplay = (props) => {
    return (
      <div>
         <p>Temperature: <span style={{color: Number(props.currTemp) > 20 ? "red" : "blue"}}>{props.currTemp}</span> </p>
         <p>Conditions: {props.currCond}</p> 
      </div>
    )
  }

export default WeatherDisplay