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

  const jokesComponents = []

  for (const joke of jokes) {
    jokesComponents.push(<Joke key={joke.id} joke={joke.joke} rating={joke.rating} />)
  }

  return (
      <div>
        <h1>Dad Jokes</h1>

        {jokesComponents}

      </div>
  )
}

export default App
