import { useEffect, useState } from "react"

export default function Timer () {
    const [time, setTime] = useState(0)

    useEffect(() => {
        console.log("useEffect called")
        const interval = setInterval(() => {
            setTime(t => t + 1)
        }, 1000)

        return () => {
            // cleanup
            clearInterval(interval)
        }
    }, [])

    return (
        <>
            <h2>Timer</h2>
            <p>{time}</p>
        </>
    )
}