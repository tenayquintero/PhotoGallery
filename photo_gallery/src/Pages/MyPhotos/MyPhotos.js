import './MyPhotos.css'
const MyPhotos = ({ favorite, deleteToFavorite }) => {
    console.log(favorite)
    return (
        <section className='myPhotos'>
            <h2>My Photos</h2>
            <ul>
                {favorite.map(myFavorite =>
                    <li className='myPhotos-card' key={myFavorite.id}>
                        <img src={myFavorite.src.medium} alt={myFavorite.alt} />
                        <button
                            onClick={() => deleteToFavorite(myFavorite)}
                            className='deleted'>🗑️</button>
                    </li>

                )}
            </ul>
        </section>
    )
}
export default MyPhotos;