import { use, useState } from "react"

// export default function Joke({joke, rating=0}) {
export default function Joke({id, text}) {

    // let stars = ""
    // for (let i = 0; i < 5; i++) {
    //     if (i < rating) {
    //         stars += "★"
    //     } else {
    //         stars += "☆"
    //     }
    // }

    const [likes, setLike] = useState(0)
    const [dislikes, setDislike] = useState(0)
    const [favorite, setFavorite] = useState(false)

    const handleLike = () => {
        const newLikes = likes + 1
        setLike(newLikes)
        console.log(`Liked joke with id: ${id}, total likes: ${newLikes}`)
    }

    const handleDislike = () => {
        setDislike(dislikes + 1)
        console.log(`Disliked joke with id: ${id}, total likes: ${likes}`)
    }

    const handleFavorite = () => {
        setFavorite(!favorite)
    } 
    
    return (
        <div>
            {/* <p>{joke}</p>
            <p>{stars}</p> */}

            <p>{text}</p>
            <p>likes: {likes - dislikes}</p>
            <p>Favorite: {favorite ? "YES": "NO"}</p>
            <button onClick={handleLike}>👍🏻</button>
            <button onClick={handleDislike}>👎🏻</button>
            <button onClick={handleFavorite}>Favorite</button>
        </div>
    )
}