import React from 'react';

const SingleCard = ({pokemon}) => {
    return (
        <div className='p-2'>
            <div className="card border-black">
                <img src={pokemon.sprites.front_default} className="card-img-top" alt={pokemon.name} />
                    <div className="card-body">
                        <h4 className="card-title text-center text-uppercase">{pokemon.name}</h4>
                        <a href={pokemon.sprites.url} className="d-block text-center btn border-black w-100 mt-5">+ info</a>
                    </div>
            </div>
        </div>
    )
}

export default SingleCard