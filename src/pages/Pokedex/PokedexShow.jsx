import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLoader } from "../../contexts/LoaderContext";

const PokedexShow = () => {

    const { id } = useParams();

    const [pokemon, setPokemon] = useState();

    const { loader, setLoader } = useLoader();

    // Funzione ricorsiva per ottenere tutta la linea evolutiva
    const getAllEvolutions = async (chain, evolutions = []) => {

        const evolutionPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${chain.species.name}`);

        // Chiamata per i tipi
        const types = await Promise.all(

            evolutionPokemon.data.types.map(async ({ type }) => {

                // Prendo tutti i tipi
                const typeRes = await axios.get(type.url);

                // Cerco l'immagine per ogni tipo, se c'è, se no metto ''
                const image = typeRes.data.sprites?.['generation-viii']?.['sword-shield']?.name_icon || '';

                // restituisco un oggetto con nome e immagine
                return { name: type.name, image }
            })
        )

        const evolutionInfo = {
            name: chain.species.name,
            image: evolutionPokemon.data.sprites.other['official-artwork'].front_default,
            types
        }

        // Aggiungi il Pokémon attuale alla lista delle evoluzioni
        evolutions.push(evolutionInfo);

        // Se ci sono evoluzioni, vai avanti nella catena
        if (chain.evolves_to.length > 0) {
            await Promise.all(
                chain.evolves_to.map(async (subChain) => {
                    await getAllEvolutions(subChain, evolutions);  // Aggiungi ricorsione
                })
            );
        }

        return evolutions;
    };

    // Funzione per cercare il Pokemon
    const fetchPokemon = async (id) => {
        setLoader(true);
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        let pokemon = res.data;

        // Chiamata per ottenere la specie e l'URL della catena evolutiva
        const speciesRes = await axios.get(pokemon.species.url);
        const evolutionUrl = speciesRes.data.evolution_chain.url;

        // Chiamata per ottenere i dati della catena evolutiva
        const evolutionRes = await axios.get(evolutionUrl);
        const evolutionData = evolutionRes.data.chain;

        // Ottieni tutte le evoluzioni
        const evolutions = await getAllEvolutions(evolutionData);

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
        pokemon = { ...pokemon, dataTypes, descriptions, category, evolutions, totalEvolution: evolutions.length }

        // Imposto il setTimeout per vedere il loader
        setTimeout(() => {

            setPokemon(pokemon);

            setLoader(false);

        }, 500);

        console.log(pokemon);
    }

    useEffect(() => {
        fetchPokemon(id);
    }, []);

    return (
        <section>

            {loader ||
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
                                    <img src={image} alt={name} className="h-6 w-[95px] rounded-md select-none drag" />
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

                        {/* Stats */}
                        <li>
                            <h4 className="text-2xl">Statistics</h4>
                            <ul>
                                {pokemon?.stats.map((stat, i) => (
                                    <li key={`stat-${i}`}>
                                        <p className="capitalize">{stat.stat.name}: {stat.base_stat}</p>
                                    </li>
                                ))}
                            </ul>
                        </li>

                        {/* Linea Evolutiva */}
                        <li className="w-4/5 h-[400px] bg-slate-600 my-16 rounded-md p-6">
                            <div className="h-full w-full rounded-md flex justify-center gap-10">

                                {pokemon?.evolutions.map((evolution, i) => (
                                    <div key={`pokemon-${i}`} className={`basis-1/${pokemon?.totalEvolution} bg-orange-300 p-4 rounded-full`}>
                                        <figure className="h-3/4 overflow-hidden flex justify-center">
                                            <img className="h-full select-none drag" src={evolution.image} alt={evolution.name} />
                                        </figure>
                                        <h2 className="capitalize text-center text-xl">{evolution.name}</h2>
                                        <div className="flex gap-2 justify-center items-center my-4">

                                            {evolution.types.map(({ image, name }, i) => (
                                                <div key={`type-${i}`}>
                                                    <img src={image} alt={name} className="h-6 w-[95px] rounded-md" />
                                                </div>
                                            ))}

                                        </div>

                                    </div>
                                ))}

                            </div>
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

                    </ul>

                </div>
            }

        </section>
    )
}

export default PokedexShow;