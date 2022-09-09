import { useSearch } from "../../Contexts/SearchContext"
import { useSearchQuery } from "../../hooks/api";
import Photo from "../Photo/Photo";

const ListPhotos =()=>{

    const search = useSearch();

    //creo la query
    const queryParams = new URLSearchParams();
    queryParams.append('query', search);
    queryParams.append('locale', 'es-ES');
    queryParams.append('per_pages', 80)

    //traigo la ruta ya completa
    const itemsSearches = useSearchQuery(queryParams.toString());

    console.log('i am itemsSearch', itemsSearches.photos)
    
   return (
        <ul>
            {itemsSearches.photos.map(photo=>
                <li key={photo.id}>
                    <Photo photo={photo} />
                </li>
                )}
        </ul>

    )
}
export default ListPhotos;