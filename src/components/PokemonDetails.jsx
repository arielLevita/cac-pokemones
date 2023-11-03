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
            <div className='min-vh-100 d-flex justify-content-center align-items-center flex-column px-2'>
                <h2 className='text-center text-uppercase my-3'>{pokemon?.name}</h2>
                <div className="col col-md-6 d-flex justify-content-around my-3">
                    <img src={pokemon?.sprites.front_default} alt={pokemon?.name} />
                    <img src={pokemon?.sprites.back_default} alt={pokemon?.name} />
                </div>
                <div className="col col-md-6 my-3">
                    <h3 className='text-center'>Estadísticas:</h3>
                    <ul className='list-unstyled fw-semibold lh-lg'>
                        <li>
                            <div className='base-data d-flex justify-content-between flex-wrap rounded-pill px-3'>
                                <div>
                                    <span className='fw-bold'>Height: </span>{pokemon?.height}
                                </div>
                                <div>
                                    <span className='fw-bold'>Weight: </span>{pokemon?.weight}
                                </div>
                                <div>
                                    <span className='fw-bold'>Base Experience: </span>{pokemon?.base_experience}
                                </div>
                            </div>
                        </li>
                        <li><span className='fw-bold'>Abilities: </span>
                            <span>
                                {
                                    pokemon?.abilities.map((ability) => (
                                        <span key={ability.ability.name} className='ms-2'>{ability.ability.name}</span>
                                    )
                                    )
                                }
                            </span>
                        </li>
                        <li><span className='fw-bold'>Types: </span>
                            <span>
                                {
                                    pokemon?.types.map((type) => (
                                        <span key={type.type.name} className='ms-2'>{type.type.name}</span>
                                    )
                                    )
                                }
                            </span>
                        </li>
                        <li><span className='fw-bold'>Stats: </span>
                            <span>
                                {
                                    pokemon?.stats.map((stat) => (
                                        <div className="progress border border-dark my-1" role="progressbar" aria-label="example" aria-valuenow={stat.base_stat} aria-valuemin="0" aria-valuemax="100">
                                            <div className="progress-bar" style={{width: `${stat.base_stat}%`}}>{stat.stat.name}</div>
                                        </div>
                                    )
                                    )
                                }
                            </span>
                        </li>
                    </ul>
                </div>
                <GoBackButton />
            </div>
        </div>
    )
}

export default PokemonDetails;