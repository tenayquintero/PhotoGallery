import { useState } from 'react'
import './Photo.css'
const Photo = ({ photo, addToFavorite }) =>{
    const [heart,setHeart] =useState(false);

    const handleOnclick=()=>{
           addToFavorite(photo)
            setHeart(true)

    }
    
return(
        <section>
            <img src={photo.src.medium} alt={photo.alt}></img>
        <button 
        onClick={ handleOnclick }
        className='button-heart'
        >
            {heart ? '❤️' : '🤍'  }
            </button>
        </section>
    )
}
export default Photo;