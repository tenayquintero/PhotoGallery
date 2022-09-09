const Photo = ({ photo }) =>{
    return(
        <section>
            <img src={photo.src.medium} alt={photo.alt}></img>
        </section>
    )
}
export default Photo;