import './App.css'
import Joke from './Joke'

function App() {

  const jokes =[
    {
      joke: "I'm reading a book about anti-gravity. It's impossible to put down!",
      rating: 1  
    },
    {
      joke: "Why did the scarecrow win an award? Because he was outstanding in his field!",
      rating: 4
    },
    {
      joke: "Why don't scientists trust atoms? Because they make up everything!",
      rating: 5
    },
    {
      joke: "Why did the bicycle fall over? Because it was two-tired!",
      rating: 4
    }
  ]
  return (
      <div>
        <h1>Dad Jokes</h1>

        <Joke joke={jokes[0].joke} rating={jokes[0].rating} />
        <Joke joke={jokes[1].joke} rating={jokes[1].rating} />
      </div>
  )
}

export default App
