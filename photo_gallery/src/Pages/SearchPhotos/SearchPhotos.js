import { useState } from "react";
import FormSearch from "../../Components/FormSearch/FormSearch";
import ListPhotos from "../../Components/ListPhotos/ListPhotos";
import './SearchPhotos.css'

const SearchPhotos = ({ addToFavorite }) =>{
    const [result,setResult] = useState([]);
   
return (
    <section className="searchPhotos">
        <h2>Search Photos</h2>
        <FormSearch setResult={ setResult } />
        <ListPhotos result={result} addToFavorite={addToFavorite}/>
    </section>
)
}
export default SearchPhotos;