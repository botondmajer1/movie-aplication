import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from '../axios';
import './movie.css'
const Movie = () => {
  const [movies, setMovies] = useState([])
  const [actors, setActors] = useState([])

  const { id } = useParams()
  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/movie_id/credits?language=en-US');

    async function fetchData() {
      const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTIyYjg5ODcwZjQzNGRkOTFjNWNhNTA4NTRlYmEzMyIsInN1YiI6IjY1YTAzZGYxMWZhMWM4MDEyYjZjZDkzMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bLXC8vsSqyJzTaC437Ruibt1_q8R6XxfxPEVH9e_8yY'
        }
      };
      try {
        const { data } = await axios(options);
        console.log("API response:", data, "detalii film");
        setMovies(data);
        return data;
      } catch (error) {
        console.error("Error fetching data:", error.message);
        throw error;
      }
    }

    async function fetchDataCredits() {
      const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTIyYjg5ODcwZjQzNGRkOTFjNWNhNTA4NTRlYmEzMyIsInN1YiI6IjY1YTAzZGYxMWZhMWM4MDEyYjZjZDkzMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bLXC8vsSqyJzTaC437Ruibt1_q8R6XxfxPEVH9e_8yY'
        }
      };
      try {
        const { data } = await axios(options);
        console.log("API response:", data, "actori");
        setActors(data);
        return data;
      } catch (error) {
        console.error("Error fetching data:", error.message);
        throw error;
      }
    }
    fetchDataCredits()
    fetchData();
  }, [id]);

  return (
    <div className='detaliiFilm'>
        <div className='titlu'>{movies.original_title}</div>
        <div className='banner'><img src={`https://image.tmdb.org/t/p/w1280${movies.backdrop_path}`} alt="" />
        
        <div className='descriere'>{movies.overview}</div>
        </div>
        <div>


        <div className='titluActori'>CAST</div>
        <div className='actori'>
        
        {actors.cast?.map(actori => {

console.log(actori)
return (
      
    <div className='grup'> 
        <div className='numeActori'>{actori.name}</div>
        <div className='departamentActori'>{actori.known_for_department}</div>
        <div class="shape-outer circle">
	
  <img class="shape-inner circle" src={`https://image.tmdb.org/t/p/w1280${actori.profile_path}`} alt="" />
  
</div>   
    
    

</div>    

)
})}
</div>
        
        </div>
      

        
    
    
   </div>

    
    
  )
}



    
  


export default Movie
