import React from 'react';
import Moviecards from './Moviecards';

const MoviesList = ({ title, movies }) => {
    return (
        <div className='py-6'>
            <h1 className='text-lg text-white px-8 mb-6'>{title}</h1>
            <div className='overflow-x-auto no-scrollbar px-6'>
                <div className='flex flex-wrap gap-4 justify-center'>
                    {movies.map((movie) => (
                        <Moviecards
                            key={movie.id}
                            title={movie.movie}
                            image={movie.image}
                            rating={movie.rating}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MoviesList;
