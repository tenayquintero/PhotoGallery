import { useState } from "react";
import FormSearch from "../../Components/FormSearch/FormSearch";
import ListPhotos from "../../Components/ListPhotos/ListPhotos";

const SearchPhotos = ({ addToFavorite }) =>{
    const [result,setResult] = useState([]);
    console.log(result)
return (
    <section>
        <h2>Search Photos</h2>
        <FormSearch setResult={ setResult } />
        <ListPhotos result={result} addToFavorite={addToFavorite}/>
    </section>
)
}
export default SearchPhotos;