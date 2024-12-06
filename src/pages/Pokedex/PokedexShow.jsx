import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PokedexShow = () => {

    const { id } = useParams();

    const [pokemon, setPokemon] = useState();

    const fetchPokemon = async () => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        let pokemon = res.data;

        // Chiamata per i tipi
        const dataTypes = await Promise.all(

            pokemon.types.map(async ({ type }) => {

                // Prendo tutti i tipi
                const typeRes = await axios.get(type.url);

                // Cerco l'immagine per ogni tipo, se c'è, se no metto ''
                const image = typeRes.data.sprites?.['generation-viii']?.['sword-shield']?.name_icon || '';

                // restituisco un oggetto con nome e immagine
                return { name: type.name, image }
            })
        )


        // Chiamata API per recuperare le descrizioni dei Pokemon
        const descriptionRes = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);
        const pokemonDescription = descriptionRes.data;

        // Cerco le descrizioni in inglese
        const descriptions = pokemonDescription.flavor_text_entries.filter(description => description.language.name === 'en');
        // Ciclo sull'array delle descrizioni per pulirlo
        descriptions.forEach(description => description.flavor_text = description.flavor_text.replace(/[\x00-\x1F\x7F]/g, " "));

        // Cerco la categoria in inglese
        const category = pokemonDescription.genera.filter(category => category.language.name === 'en');

        // Creo l'oggeto con tutte le chiavi che mi servono
        pokemon = { ...pokemon, dataTypes, descriptions, category }
        setPokemon(pokemon);
        console.log(pokemon);
    }

    useEffect(() => {
        fetchPokemon();
    }, []);

    return (
        <section>

            <div className="container mx-auto py-8">

                <ul className="flex justify-center items-center flex-col">

                    {/* Immagine */}
                    <li className="flex">
                        <figure>
                            <img className="select-none drag" src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
                        </figure>
                        <figure>
                            <img className="select-none drag" src={pokemon?.sprites.other['official-artwork'].front_shiny} alt="" />
                        </figure>
                    </li>

                    {/* Nome */}
                    <li>
                        <p className="capitalize text-3xl">{pokemon?.name}</p>
                    </li>

                    {/* Tipi */}
                    <li className="flex items-center justify-center gap-4 my-4">
                        {pokemon?.dataTypes.map(({ name, image }, i) => (
                            <div key={`type-${i}`}>
                                <img src={image} alt={name} className="h-6 w-[95px] rounded-md" />
                            </div>
                        ))}
                    </li>

                    {/* Peso */}
                    <li>
                        <p className="text-xl">Peso: <span>{pokemon?.weight / 10} </span>Kg</p>
                    </li>

                    {/* Altezza */}
                    <li>
                        <p className="text-xl">Altezza: <span>{pokemon?.height / 10} </span>m</p>
                    </li>

                    {/* Categoria */}
                    <li>
                        <p className="text-xl">Categoria: {pokemon?.category[0].genus}</p>
                    </li>

                    {/* Abilità */}
                    <li>
                        <p className="text-xl">Abilità: <span className="capitalize">{pokemon?.abilities[0].ability.name}</span></p>
                    </li>

                    {/* Descrizione */}
                    <li>
                        <ul>
                            {pokemon?.descriptions.map(({ flavor_text, version }, i) => (
                                <li key={`description-${i}`} className="my-4">
                                    <ul>
                                        <li>
                                            <p>{flavor_text}</p>
                                        </li>
                                        <li>
                                            <p className="capitalize">{version.name}</p>
                                        </li>
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </li>

                    <li></li>
                </ul>

            </div>

        </section>
    )
}

export default PokedexShow;