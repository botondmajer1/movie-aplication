import React, { useState, useEffect } from 'react'
import axios from '../axios';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import { useNavigate } from 'react-router-dom'

const base_url = "https://image.tmdb.org/t/p/original/"


function Row({ title, fetchUrl, isLargeRow }) {

    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    const navigate = useNavigate()

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    }

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            movieTrailer(movie?.name || "")
                .then(url => {
                    const ulrParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(ulrParams.get('v'));
                })
                .catch((error) => console.log(error));
        }
    };



    return (<div className="row">
        <h2>{title}</h2>

        <div className="row_posters">

            {movies?.map(movie => {

                console.log(movie)
                return (
                    <div className='movie_detail'>
                        <button onClick={() => navigate(`/movie/${movie.id}`)}>See details</button>
                        <img
                            onClick={() => handleClick(movie)}
                            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                            alt={movie.name} />
                    </div>
                )
            })}

        </div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}


    </div>)
}





export default Row
