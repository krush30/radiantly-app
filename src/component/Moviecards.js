import React from 'react';

const Moviecards = ({ title, image, rating }) => {
    return (
        <div className='w-48'>
            <img
                src={image}
                alt={title}
                className='w-full h-64 object-cover rounded-lg'
            />
            <h4 className='text-white mt-2 text-center'>{title}</h4>
            <h4 className='text-yellow-400 text-center'>✰ {rating}/10</h4>
        </div>
    );
};

export default Moviecards;
