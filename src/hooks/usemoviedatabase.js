import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addcurrentmovies } from '../utils/movieslice';

const useMoviesDatabase = () => {
    const dispatch = useDispatch();
    const nowPlayingMovies = async () => {
        const data = await fetch('https://dummyapi.online/api/movies');
        const json = await data.json();

        console.log(json);
        dispatch(addcurrentmovies(json));


    }

    useEffect(() => {
        nowPlayingMovies();
    }, [])



}

export default useMoviesDatabase;
