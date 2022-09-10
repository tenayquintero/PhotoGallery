const MyPhotos = ({ favorite, deleteToFavorite }) => {
    console.log(favorite)
    return (
        <section>
            <h2>My Photos</h2>
            {favorite.map(myFavorite =>
                <section key={myFavorite.id}>
                <img src={myFavorite.src.medium} alt={myFavorite.alt}  />
                    <button onClick={() => deleteToFavorite(myFavorite)}>delete</button>
                </section>

            )}
        </section>
    )
}
export default MyPhotos;