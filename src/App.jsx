import './App.css'
import Joke from './Joke'

function App() {

  const dadJoke2 ={
    joke: "Why did the scarecrow win an award? Because he was outstanding in his field!",
    rating: 4
  }
  return (
      <div>
        <h1>Dad Jokes</h1>

        <Joke joke="I'm reading a book about anti-gravity. It's impossible to put down!" rating={3} />
        <Joke joke={dadJoke2.joke} rating={dadJoke2.rating} />
        <Joke {...dadJoke2} />
      </div>
  )
}

export default App
