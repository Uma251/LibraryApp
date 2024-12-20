import React, { useEffect, useState } from 'react'



const Youtube = () => {
  let[timer,setTimer]=useState(0)
  let[counter,setCounter]=useState(0)
  useEffect(()=>{
    console.log("use effect")
  },[counter,timer])
  return(
    <>
    <h1>Timer:{timer}
      {console.log("Inside Component")}
    </h1>
      <button onClick={()=>{
        setTimer(timer+1)
      }}>Timer</button>
      <h1>
      {console.log("Inside Component")}
    </h1>
      <button onClick={()=>{
        setCounter(counter+1)
      }}>Counter</button>
    </>
  )
 
}
export default Youtube
