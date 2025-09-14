import './App.css'
import { useEffect, useState } from 'react'
import Timer from './Timer' 
import BatteryStatus from './BatteryStatus'

function App() {

  const [interval, setInterval] = useState(1000)
  
  return (
    <>
      <BatteryStatus />
      <Timer interval={interval} /> 
      <button onClick={() => setInterval(interval + 100)}>Increase Interval</button>
      <button onClick={() => setInterval(interval - 100)}>Decrease Interval</button>
    </>
  )
}

export default App
