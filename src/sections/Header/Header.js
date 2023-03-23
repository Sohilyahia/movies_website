import './Header.css'
import { Link, NavLink } from 'react-router-dom'


function Header() {
  return (
   <> 
        <nav className="navbar navbar-expand-lg navbar-dark ">
            <div className="container">
               <Link to='/' className='navbar-brand'>
                    <img src="https://www.nicepng.com/png/full/486-4868686_horror-movie-logo-for-ihorror-website-illustration.png" alt="YIFY"/>
               </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to='./watchlist' className="nav-link" aria-current="page">WatchList</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='./watched' className="nav-link">Watched</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='./Search' className="nav-link">Search</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
   </>
  )
}

export default Header