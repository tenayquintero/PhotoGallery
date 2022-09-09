import { useState } from "react";
// import useFetch from "../../hooks/useFetch";
import { useSearch } from "../../hooks/api";

const FormSearch = () => {
  
   const [search,setSearch] = useState('');
   
   //creo la query
   const queryParams = new URLSearchParams();
    queryParams.append('query', search);
    queryParams.append('locale', 'es-ES');
    queryParams.append('per_pages', 80)
   
    //traigo la ruta ya completa
    const itemsSearchs = useSearch(queryParams.toString());
    console.log(itemsSearchs)

    //segundo intento
    // const data = useFetch()

   const handle=(e)=>{
    e.preventDefault();
    
  }
    return (
        <form onSubmit={handle}>
           <input 
           onChange={(e)=>setSearch(e.target.value)}
           value={search}
           placeholder='Introduce your search'
           ></input>
           <button>search</button>
        </form>
    )
}
export default FormSearch;