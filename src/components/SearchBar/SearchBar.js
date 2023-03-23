import {useState ,useEffect } from 'react'
import  './SearchBar.css'
import ResultCard from '../ResultCard/ResultCard'

function SearchBar() {
  const [Search , setSearch] = useState('')
  const [movies , setMovies] = useState([])
  

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=e09688488e47eddfb6a9c40e8ae46475&query=${Search}`)
         .then((res)=> res.json())
         .then((data)=>{
            setMovies(data.results)
         })
    
  },[Search])

  return (
    <div>
          <div className='SearchBar'>
            <div className='SearchBar_content'>
                <input 
                  type='text' 
                  placeholder='Search For a Movie'
                  value={Search}
                  onChange={(e)=> setSearch(e.target.value)}
                  />
            </div>
          </div>
          {
              movies && 
              <ul className='results'>
                  {movies.map((movie)=> 
                  (<li key={movie.id}>{<ResultCard movie={movie}/>}</li>)
                  )}
              </ul>
          }
    </div>

  )
}

export default SearchBar