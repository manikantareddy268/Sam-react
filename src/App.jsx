import './App.css'
import Joke from './Joke'
import Form from './Form'
import { useState } from 'react'
import JokeForm from './JokeForm'

function App() {

  const [favorite, setFavorite] = useState(1)
  const [showForm, setShowForm] = useState(false)

  const [jokes, setJokes] = useState([
    {
      id: 1,
      // joke:
      text: "I'm reading a book about anti-gravity. It's impossible to put down!",
      // rating: 1  
      likes: 0
    },
    {
      id: 2,
      // joke:
      text: "Why did the scarecrow win an award? Because he was outstanding in his field!",
      // rating: 4
      likes: 0
    },
    // {
    //   id: 3,
    //   // joke:
    //   text: "Why don't scientists trust atoms? Because they make up everything!",
    //   // rating: 5
    // },
    // {
    //   id: 4,
    //   // joke:
    //   text: "Why did the bicycle fall over? Because it was two-tired!",
    //   // rating: 4
    // }
  ])

  function handleClick() {
    console.log("Button clicked!")          
  }

  function handleSubmit(e) {
    console.log("Form submitted!")
  }

  const handleFavorite = (id) => {
    setFavorite(id)
  }

  const handleNewJoke = (text) => {
    const joke = {
      text,
      id: self.crypto.randomUUID(),
      likes: 0
    }
    // jokes.push(joke) // This won't actually update the state or re-render the component
    setJokes([joke, ...jokes])
    setShowForm(false)
  }

  const handleDeleteJoke = (id) => {
    setJokes(jokes.filter(joke => joke.id !== id))
    console.log("Delete joke with id: ", id) 
  }

  const handleLike = (id) => {
    
    setJokes(jokes.map(joke => {
      if (joke.id === id) {
        return {
          ...joke,
          likes: joke.likes + 1
        }
      }
      return joke
    }))
  }

  const handleDislike = (id) => {
    setJokes(jokes.map(joke => {
      if (joke.id === id) {
        return {
          ...joke,
          likes: joke.likes - 1
        }
      }
      return joke
    }))
  }

  const handleSort = () => {
    setJokes([...jokes].sort((a, b) => b.likes - a.likes))
  }

  const handleAddNewJoke = () => {
    setShowForm(true)
  }

  return (
      <div className="App">
        <h1>Dad Jokes</h1>

        <button onClick={handleAddNewJoke}>Add a new joke</button> <br /> 

        {showForm ? 
          <JokeForm onNewJoke={handleNewJoke} /> 
          : 
          <>
            <button onClick={handleSort}>Sort</button>

            {jokes.map(joke => (
              <Joke 
              onDelete={handleDeleteJoke} 
              onFavorite={handleFavorite} favorite={favorite === joke.id} 
              key={joke.id} 
              onLike={handleLike}
              onDislike={handleDislike}
              {...joke} />
            ))}
          </>
        }
      </div>
  )
}

export default App
