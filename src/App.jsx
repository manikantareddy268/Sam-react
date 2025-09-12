import './App.css'
import { useEffect, useState } from 'react'
import Timer from './Timer' 

function App() {

  const [interval, setInterval] = useState(1000)
  
  return (
    <>
      <Timer interval={interval} /> 
      <button onClick={() => setInterval(interval + 100)}>Increase Interval</button>
      <button onClick={() => setInterval(interval - 100)}>Decrease Interval</button>
    </>
  )
}

export default App
