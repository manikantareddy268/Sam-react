 import { useEffect, useState } from 'react'

//  navigator.getBattery = () => Promise.reject() // to test error handling

 export default function BatteryStatus() {

    const {isCharging, error} = useBatteryStatus()

    return (
        <>
            <h2>Battery Status</h2>
            {error ? <p>Could not get the battery status</p> : <p>Battery is {isCharging? "charging" : "not charging"}</p>}
        </>
    )
}

function useBatteryStatus() {
    const [isCharging, setIsCharging] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        let cleanup
        let cancled = false
        navigator.getBattery().then(battery => {
            if(cancled) return
            const onBatteryChange = () => setIsCharging(battery.charging)
            onBatteryChange() 
            battery.addEventListener('chargingchange', onBatteryChange)
            cleanup = () => battery.removeEventListener('chargingchange', onBatteryChange)
        }).catch(err => {
            if(cancled) return
            console.error(err)
            setError(true)
        })

        return () => {
            //cleanup
            cancled = true
            cleanup?.()
        }
    }, [])

    return {isCharging, error}
}
