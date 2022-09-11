import './Nav.css'
const Nav = ({ setShow, show }) => {
    console.log(show)
    return (
        <nav className="nav">
            <h1>Photo Gallery</h1>
            <div className='nav-buttons'>
                <button
                    className={'nav-button ' + (show === 'search-photos' && 'search-photos')}
                    onClick={() => setShow('search-photos')}>Search Photos</button>

                <button
                    className={'nav-button ' + (show === 'my-photos' && 'my-photos')}
                    onClick={() => setShow('my-photos')}>MyPhotos</button>
            </div>
        </nav>
    )
}
export default Nav;