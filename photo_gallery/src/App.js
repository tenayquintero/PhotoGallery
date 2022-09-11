import { useEffect, useState } from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import MyPhotos from './Pages/MyPhotos/MyPhotos';
import SearchPhotos from './Pages/SearchPhotos/SearchPhotos';
import HeaderBackground from './images/headerFeather.jpg'

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
      <header className="App-header" style={{backgroundImage:`url(${HeaderBackground })`}}>

        <Nav setShow={setShow} show={show} />

      </header>
      <main className='App-main'>

        {show === 'my-photos' &&
          <MyPhotos favorite={favorite} deleteToFavorite={deleteToFavorite} />}

        {show === 'search-photos' &&
          <SearchPhotos addToFavorite={addToFavorite} />}

      </main>
      <footer style={{backgroundImage:`url(${HeaderBackground})`}}>
        <p>Yanethftv @2022</p>
      </footer>
    </div>
  );
}

export default App;
