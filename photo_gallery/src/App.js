import { useEffect, useState } from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import MyPhotos from './Pages/MyPhotos/MyPhotos';
import SearchPhotos from './Pages/SearchPhotos/SearchPhotos';



function App() {


//Guardar las fotos en un array favoritas
  const [favorite, setFavorite] = useState(JSON.parse(localStorage.getItem('photos'))||[]);

 //Guardar en localStorage
 useEffect(()=>{
   localStorage.setItem('photos', JSON.stringify(favorite))
 },[favorite])


  //Mostrar MyPhotos || SearchPhots
  const [show, setShow] = useState('my-photos');

  //función para añadir a favorite
  const addToFavorite = (photo) => {
    setFavorite([...favorite, photo])
  }

  //función para eliminar de favoritos
  const deleteToFavorite=(photoToDelete)=>{
    setFavorite(favorite.filter(photo => photo.id !== photoToDelete.id))
  }


  return (
    <div className="App">
      <header className="App-header">

        <Nav setShow={setShow} />

      </header>
      <main className='App-main'>

        {show === 'my-photos' &&
          <MyPhotos favorite={favorite} deleteToFavorite={deleteToFavorite}/>}

        {show === 'search-photos' &&
          <SearchPhotos addToFavorite={addToFavorite} />}

      </main>
    </div>
  );
}

export default App;
