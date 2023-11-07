import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import GoBackButton from './GoBackButton';

const PokemonDetails = () => {

    // Recupera las claves y valores vinculados al ID del fetch.
    let { id } = useParams();
    // Guarda los datos del pokemon importado.
    const [pokemon, setPokemon] = useState();

    // Importa el pokemon vinculado al ID seleccionado en el componente padre y lo guarda en la variable del useState.
    async function getSinglePokemon() {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = response.data;
            setPokemon(data)
        } catch (error) {
            console.log(error);
        }
    }

    // Llama a la función de importar el pokemon.
    useEffect(() => {
        getSinglePokemon();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    return (
        <div id='pokemon-details' >
            <div className='min-vh-100 d-flex justify-content-center align-items-center px-2'>
                <div className="col-12 col-sm-8 col-md-4 d-flex flex-column my-3">
                    <div className='poke-details rounded p-4'>
                        <h2 className='rounded-pill text-center text-uppercase text-break mb-3 py-2 px-4'>{pokemon?.name}</h2>
                        <div className='d-flex justify-content-around mb-5'>
                            <img src={pokemon?.sprites.front_default} alt={pokemon?.name} />
                            <img src={pokemon?.sprites.back_default} alt={pokemon?.name} />
                        </div>
                        <h3 className='text-center'>Estadísticas:</h3>
                        <ul className='list-unstyled fw-semibold lh-lg'>
                            <li>
                                <div className='base-data d-flex justify-content-around flex-wrap rounded-pill px-3'>
                                    <div>
                                        <span className='fw-bold mx-1'>Height: </span>{pokemon?.height}
                                    </div>
                                    <div>
                                        <span className='fw-bold mx-1'>Weight: </span>{pokemon?.weight}
                                    </div>
                                    <div>
                                        <span className='fw-bold mx-1'>Base Experience: </span>{pokemon?.base_experience}
                                    </div>
                                </div>
                            </li>
                            <li>
                                <span className='fw-bold'>Abilities: </span>
                                <span className='ms-2'>
                                    {pokemon?.abilities.map((ability, index) => (
                                        <span key={ability.ability.name}>
                                            {index > 0 && <span> + </span>}
                                            {ability.ability.name}
                                        </span>
                                    ))}
                                </span>
                            </li>
                            <li>
                                <span className='fw-bold'>Types: </span>
                                <span className='ms-2'>
                                    {pokemon?.types.map((type, index) => (
                                        <span key={type.type.name}>
                                            {index > 0 && <span> + </span>}
                                            {type.type.name}
                                        </span>
                                    ))}
                                </span>
                            </li>
                            <li>
                                <span className='fw-bold'>Stats: </span>
                                <span>
                                    {
                                        pokemon?.stats.map((stat, index) => (
                                            <div key={index} className="progress border border-dark rounded-pill my-1" role="progressbar" aria-label="example" aria-valuenow={stat.base_stat} aria-valuemin="0" aria-valuemax="100">
                                                <div className="progress-bar" style={{ width: `${stat.base_stat}%` }}>{stat.stat.name}</div>
                                            </div>
                                        )
                                        )
                                    }
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-center'>
                <GoBackButton />
            </div>
        </div>
    )
}

export default PokemonDetails;