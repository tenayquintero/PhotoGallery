
const Photo = ({ photo, addToFavorite }) =>{
    
return(
        <section>
            <img src={photo.src.medium} alt={photo.alt}></img>
        <button onClick={() => { addToFavorite (photo)}}>click</button>
        </section>
    )
}
export default Photo;