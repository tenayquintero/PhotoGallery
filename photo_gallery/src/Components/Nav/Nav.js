const Nav = ({ setShow }) => {

    return (
        <nav>
            <button onClick={() => setShow('search-photos')}>Search Photos</button>
            <button onClick={()=> setShow('my-photos')}>MyPhotos</button>
        </nav>
    )
}
export default Nav;