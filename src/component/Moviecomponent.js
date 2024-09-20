import React from 'react'
import { useSelector } from 'react-redux';
import MoviesList from './MoviesList';

const Moviecomponent = () => {
    const movies = useSelector(store => store.movies);

    return (
        movies.currentmovies && (
            <div className='bg-black'>
                <div className='mt-0  pl-4  relative z-20'>
                    <MoviesList title={"MoviesDatabase"} movies={movies.currentmovies} />
                </div>


            </div>)
    )
}

export default Moviecomponent;
