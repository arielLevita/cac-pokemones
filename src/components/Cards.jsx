import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SingleCard from './SingleCard.jsx';

export const Cards = () => {
    //Guardar el array de pokemones.
    const [pokemones, setPokemones] = useState([]); 
    //Guardar la cantidad de tarjetas a mostrar.
    const [totalPokemones, setTotalPokemones] = useState(24); 

    // Obtener la información de la API.
    async function getPokemones() {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${totalPokemones}`);
            const results = response.data.results;
            await getFullData(results); //Tomar los resultados de la API/pokemon para la actualización del array con la información completa.
        } catch (error) {
            console.log(error);
        }
    }

    //Tomar el array fetcheado de getPokemones y utilizar los valores de url para obtener el resto de los datos de cada pokemon y actualizar la const pokemones con el array resultante.
    async function getFullData(pokemones) { 
        const fullData = [];
        for (let pokemon of pokemones) {
            try {
                const response = await axios.get(pokemon.url);
                fullData.push(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        setPokemones(fullData);
    }

    // Aumentar la cantidad de pokemones cargados
    const handleAddMore = () => {
        setTotalPokemones(totalPokemones + 6)
    };

    // Ejecutar la carga de pokemones y actualizar en función del limitador de cantidad.
    useEffect(() => {
        getPokemones();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [totalPokemones]);

    console.log(pokemones)

    return (
        <div className='min-vh-100'>
            <div className="d-flex flex-wrap justify-content-center">
                {pokemones.map((pokemon) => (
                    <SingleCard key={pokemon.id} pokemon={pokemon} />
                ))}
            </div>
            <div className='d-flex justify-content-center'>
                <button onClick={handleAddMore} className='btn border border-black fw-semibold m-5'>
                    <i class="bi bi-chevron-double-down text-dark fw-semibold"></i> ADD MORE
                </button>
            </div>
        </div>
    );
};

export default Cards;
