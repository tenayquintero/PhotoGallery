import Photo from "../Photo/Photo";


const ListPhotos = ({ result, addToFavorite })=>{
console.log('I am result',result)
  return (
        <ul>
            {result.map(photo=>
                <li key={photo.id} >
                    <Photo photo={photo} addToFavorite={addToFavorite} />
                </li>
                )}
        </ul>

    )
}
export default ListPhotos;