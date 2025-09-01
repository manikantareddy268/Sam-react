import { useState } from "react"

export default function JokeForm({onNewJoke}) {

    const [text, setText] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.length < 5) {
            setError("Joke must be at least 5 characters long")
            return
        }
        setError("")
        onNewJoke(text)
        setText("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="text">New Joke:</label> <br />
            <input type="text" placeholder="Enter a joke" value={text} onChange={e => setText(e.target.value)} /> <br />
            {error && <p>{error}</p>}
            <button type="submit">Add Joke</button>
        </form>
    )
}