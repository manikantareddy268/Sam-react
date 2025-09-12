import { useEffect, useState } from "react"

export default function Timer ({interval}) {
    const [time, setTime] = useState(0)

    useEffect(() => {
        console.log("useEffect called")
        const i = setInterval(() => {
            setTime(t => t + 1)
        }, interval)

        return () => {
            // cleanup
            clearInterval(i)
        }
    }, [interval])

    return (
        <>
            <h2>Timer {interval}</h2>
            <p>{time}</p>
        </>
    )
}