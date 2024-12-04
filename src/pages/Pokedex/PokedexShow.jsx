import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PokedexShow = () => {

    const { id } = useParams();

    const [pokemon, setPokemon] = useState();

    const fetchPokemon = async () => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokemon = res.data;

        setPokemon(pokemon);
    }

    useEffect(() => {
        fetchPokemon();
    }, []);

    return (
        <section>

            <div className="container mx-auto">

                <ul>
                    <li>
                        <p>Name: <span className="capitalize">{pokemon.name}</span></p>
                    </li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>

            </div>

        </section>
    )
}

export default PokedexShow;