// import { useState } from "react";
import { useState } from "react";
import './FormSearch.css'

const FormSearch = ({ setResult }) => {

  const [search, setSearch] = useState('');

  const handle = async (e) => {
    e.preventDefault();
    //creo la query
    const queryParams = new URLSearchParams();
    queryParams.append('query', search);
    queryParams.append('locale', 'es-ES');
    queryParams.append('per_pages', 80)

    const res = await fetch(`https://api.pexels.com/v1/search?query=${queryParams.toString()}`,
      {
        headers: {
          Authorization: process.env.REACT_APP_API_KEY
        }
      })
    const data = await res.json();
    setResult(data.photos)
   

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

    </>
  )
}
export default FormSearch;