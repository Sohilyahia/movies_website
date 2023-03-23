import  { React,useEffect, useState } from 'react'
import { PopularMovieCard } from '../../components/index'
import { HighestRated, WillFerrell, TomCruise,Kids } from '../../sections';
import './Home.css'

let API_KEY = '&api_key=e09688488e47eddfb6a9c40e8ae46475';
let Base_url = 'https://api.themoviedb.org/3';
let URL = Base_url+'/discover/movie?sort_by=popularity.desc'+API_KEY;

function Home() {

    const [popularMovie, setPopularMovie] = useState([]);

    useEffect(()=>{
      fetch(URL)
      .then(res => res.json())
      .then((data)=>{
          setPopularMovie(data.results)
      })
    },[])

  return (
    <>  
          <HighestRated/>
          <TomCruise/>
          <Kids/>
      <h2 className='header-popular'>popular Movie</h2>
      <div className='results'>
          {
            popularMovie.map((info)=>{
              return(
                <PopularMovieCard key={info.id} info={info}/>
              )
            })
          }
      </div>
      <WillFerrell/>
    </>
  )
}

export default Home
