import './App.css'
import { useEffect, useState } from 'react'
import ThisIsFine from './memes/this_is_fine.jpg'
import LoveYourself from './memes/love_yourself.jpg'
import Code from './memes/code.jpg'



function App() {
  const [images, setImages] = useState([])
  const [title, setTitle] = useState("")

  useEffect(() => {
    console.log("after rendered")
    document.title = title

    window.scroll({
      top: Number.MAX_SAFE_INTEGER,
      behavior: 'smooth' 
    })
  })

  const handleAddImage = (src) => {
    setImages([...images, {
      id: self.crypto.randomUUID(),
      src
    }])
  }

  const handleDeleteImage = (id) => {
    setImages(images.filter(image => image.id !== id))
  }

  return (
    <div className="App">

      <h1>{title}</h1>

      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

      {images.map(({id, src}) => (
        <img onClick={() => handleDeleteImage(id)} key={id} src={src} alt="random" />
      ))}

      <div className="buttons">
        <button onClick={() => handleAddImage(ThisIsFine)}>
          This is fine
        </button>

        <button onClick={() => handleAddImage(LoveYourself)}>
          Love yourself
        </button>

        <button onClick={() => handleAddImage(Code)}>
          Code
        </button>
      </div>

    </div>
  )
}

export default App
