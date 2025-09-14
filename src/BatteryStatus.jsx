 import { useEffect, useState } from 'react'

 export default function BatteryStatus() {
    const [isCharging, setIsCharging] = useState(false)

    useEffect(() => {
        navigator.getBattery().then(battery => {
            setIsCharging(battery.charging)
        })
    }, [])

    return (
        <>
            <h2>Battery Status</h2>
            <p>Charging : {isCharging? "Yes" : "No"}</p>
        </>
    )
 }