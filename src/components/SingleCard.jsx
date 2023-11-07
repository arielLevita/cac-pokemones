import React from 'react';
import { Link } from 'react-router-dom';

const SingleCard = ({key, pokemon}) => {
    return (
        <div key={key} className='p-2'>
            <div className="card shadow-lg">
                <h5 className='card-title rounded text-center text-uppercase text-break text-light m-3 p-1'>{pokemon.name}</h5>
                {/* <h4 className="card-title text-center text-uppercase my-2">{pokemon.name}</h4> */}
                <img src={pokemon.sprites.front_default} className="card-img-top" alt={pokemon.name} />
                    <div className="card-body">
                        <Link to={`/${pokemon.id}`} className="d-block text-center btn border-black shadow w-100 mt-2"><span className='fw-bold'>+</span> INFO</Link>
                    </div>
            </div>
        </div>
    )
}

export default SingleCard;