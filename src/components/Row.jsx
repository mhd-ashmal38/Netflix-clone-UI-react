import React, { useEffect, useState } from 'react';
import "./Row.css"
import instance from '../instance';


function Row({ title, fetchUrl, isPoster }) {
    console.log(fetchUrl);

    const [allMovies, setAllMovies] = useState()

    const base_url = "https://image.tmdb.org/t/p/original/";

    const fetchData = async () => {
        const { data } = await instance.get(fetchUrl)
        // console.log(data.results);
        setAllMovies(data.results)
    }
    console.log(allMovies);
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div className='row'>
            <h1>{title}</h1>
            <div className="movies-row">
                {
                    allMovies?.map(item => (
                        <img className={`movie ${isPoster && 'movie_poster'}`} src={`${base_url}${isPoster ? item.poster_path : item.backdrop_path}`} alt="no image" />
                    ))
                }
            </div>
        </div>
    )
}

export default Row