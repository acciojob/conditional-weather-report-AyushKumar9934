import React from 'react'

const WeatherDisplay = (props) => {
  return (
    <div style={{color:Number(props.currTemp)>20?"red":"blue"}}>
       temperature: {props.currTemp}<br></br>
       conditions: {props.currCond} 
    </div>
  )
}

export default WeatherDisplay