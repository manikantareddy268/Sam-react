import './App.css'
import Joke from './Joke'
import Form from './Form'

function App() {

  const jokes =[
    {
      id: 1,
      // joke:
      text: "I'm reading a book about anti-gravity. It's impossible to put down!",
      // rating: 1  
    },
    {
      id: 2,
      // joke:
      text: "Why did the scarecrow win an award? Because he was outstanding in his field!",
      // rating: 4
    },
    {
      id: 3,
      // joke:
      text: "Why don't scientists trust atoms? Because they make up everything!",
      // rating: 5
    },
    {
      id: 4,
      // joke:
      text: "Why did the bicycle fall over? Because it was two-tired!",
      // rating: 4
    }
  ]

  function handleClick() {
    console.log("Button clicked!")          
  }

  function handleSubmit(e) {
    console.log("Form submitted!")
  }

  return (
      <div className="App">
        <h1>Dad Jokes</h1>

        {/* {jokes.map(joke => (
          <Joke key={joke.id} joke={joke.joke} rating={joke.rating} />
        ))}

        <h1>Best Jokes</h1>
        {jokes.filter(joke => joke.rating === 5).map(joke => (
          <Joke key={joke.id} joke={joke.joke} rating={joke.rating} />
        ))} */}

        {jokes.map(joke => (
          <Joke key={joke.id} id={joke.id} text={joke.text} />
        ))}

        {/* <button onClick={handleClick}>Do Something</button> */}

        {/* <Form onSubmit={handleSubmit} /> */}

      </div>
  )
}

export default App
