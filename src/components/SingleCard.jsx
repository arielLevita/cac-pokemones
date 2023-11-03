import React from 'react';
import { Link } from 'react-router-dom';

const SingleCard = ({key, pokemon}) => {
    return (
        <div key={key} className='p-2'>
            <div className="card border-black">
                <img src={pokemon.sprites.front_default} className="card-img-top" alt={pokemon.name} />
                    <div className="card-body">
                        <h4 className="card-title text-center text-uppercase">{pokemon.name}</h4>
                        <Link to={`/${pokemon.id}`} className="d-block text-center btn border-black w-100 mt-5">+ info</Link>
                    </div>
            </div>
        </div>
    )
}

export default SingleCard;