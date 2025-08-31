import { use, useState } from "react"

// export default function Joke({joke, rating=0}) {
export default function Joke({ id, text, favorite, onFavorite, onDelete, likes, onLike, onDislike }) {

    // let stars = ""
    // for (let i = 0; i < 5; i++) {
    //     if (i < rating) {
    //         stars += "★"
    //     } else {
    //         stars += "☆"
    //     }
    // }


    const handleLike = () => {
        onLike(id)
    }

    const handleDislike = () => {
        onDislike(id)
    }

    const handleFavorite = () => {
        onFavorite(id)
    } 
    
    return (
        <div>
            {/* <p>{joke}</p>
            <p>{stars}</p> */}

            <p>{text}</p>
            <p>likes: {likes}</p>
            <p>Favorite: {favorite ? "YES": "NO"}</p>
            <button onClick={handleLike}>👍🏻</button>
            <button onClick={handleDislike}>👎🏻</button>
            <button onClick={handleFavorite}>Favorite</button>
            <button onClick={() => onDelete(id)}>Delete</button>
        </div>
    )
}