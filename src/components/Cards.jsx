import React, {useEffect, useState} from 'react';
import axios from 'axios';
import SingleCard from './SingleCard.jsx';

export const Cards = () => {

    const [pokemones, setPokemones] = useState([]);
    const totalPokemones = 24;

    async function getPokemones() {
        const pokemonData = [];

        for (let i = 1; i <= totalPokemones; i++) {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
            pokemonData.push(response.data);
        }
        setPokemones(pokemonData);
    }
    
    useEffect(() => {
        getPokemones()
    }, []);

    console.log(pokemones)
    
    return (
        <div>
            <div className='d-flex flex-wrap'>
                {
                    pokemones?.map((pokemon) => (
                        <SingleCard key={pokemon.id} pokemon={pokemon} />
                    ))
                }
            </div>
        </div>
    )
}
export default Cards;
