import './App.css'
import Joke from './Joke'

function App() {

  const jokes =[
    {
      id: 1,
      joke: "I'm reading a book about anti-gravity. It's impossible to put down!",
      rating: 1  
    },
    {
      id: 2,
      joke: "Why did the scarecrow win an award? Because he was outstanding in his field!",
      rating: 4
    },
    {
      id: 3,
      joke: "Why don't scientists trust atoms? Because they make up everything!",
      rating: 5
    },
    {
      id: 4,
      joke: "Why did the bicycle fall over? Because it was two-tired!",
      rating: 4
    }
  ]

  function handleClick() {
    console.log("Button clicked!")          
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log("Form submitted!")
  }

  function handleTextChange(e) {
    console.log(e.target.value)
  }

  return (
      <div className="App">
        {/* <h1>Dad Jokes</h1>

        {jokes.map(joke => (
          <Joke key={joke.id} joke={joke.joke} rating={joke.rating} />
        ))}

        <h1>Best Jokes</h1>
        {jokes.filter(joke => joke.rating === 5).map(joke => (
          <Joke key={joke.id} joke={joke.joke} rating={joke.rating} />
        ))} */}

        <button onClick={handleClick}>Do Something</button>

        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleTextChange} />
          <button type='submit'>Submit</button>
        </form>

      </div>
  )
}

export default App
