import React from 'react'
import useMoviesDatabase from '../hooks/usemoviedatabase';
import Moviecomponent from './Moviecomponent';

const Maincomponent = () => {
    useMoviesDatabase();

    return (
        <div>
            <Moviecomponent />
        </div>
    )
}

export default Maincomponent;
