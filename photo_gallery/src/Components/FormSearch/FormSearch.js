// import { useState } from "react";
import {  useSearch, useSetSearch } from "../../Contexts/SearchContext";
// import useFetch from "../../hooks/useFetch";


const FormSearch = () => {
  
  //  const [search,setSearch] = useState('');
   const search = useSearch();
   const setSearch = useSetSearch();
   console.log('i am search',search)
   


    //segundo intento
    // const data = useFetch()

   const handle=(e)=>{
    e.preventDefault();
    
  }
    return (
      <>
        <form onSubmit={handle}>
           <input 
            onChange={(e) => setSearch(e.target.value)}
           value={search}
           placeholder='Introduce your search'
           ></input>
           <button>search</button>
        </form>
        {/* <ul>{itemsSearches.photos.map(photo=>
          <li>{photo.src.medium}</li>
          )}</ul> */}
      </>
    )
}
export default FormSearch;