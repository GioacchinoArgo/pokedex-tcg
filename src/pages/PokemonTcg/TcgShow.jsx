import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLoader } from "../../contexts/LoaderContext";

const apiKey = import.meta.env.VITE_API_KEY;

const TcgShow = () => {

    const { id } = useParams();
    const [card, setCard] = useState();
    const { loader, setLoader } = useLoader();

    // Funzione per prendere i dati della singola carta
    const fetchCardDetails = async () => {

        setLoader(true);

        const res = await axios.get(`https://api.pokemontcg.io/v2/cards/${id}`, {
            headers: {
                'X-Api-Key': apiKey
            }
        });
        const card = res.data.data

        setTimeout(() => {
            setCard(card);
            setLoader(false);
        }, 500)

        console.log(card)
    };

    useEffect(() => {
        fetchCardDetails();
    }, []);

    return (

        <section>
            {loader ||
                <div className="container mx-auto py-8">
                    <div className="flex flex-col items-center">

                        {/* Info di base */}
                        <div className="flex gap-20 items-center">
                            <div>
                                <img
                                    className="shadow-lg rounded-md mb-4"
                                    src={card?.images.large}
                                    alt={card?.name}
                                />
                            </div>
                            <div>
                                <h1 className="text-4xl font-bold mb-2">{card?.name}</h1>
                                <p className="text-lg mb-4">Set: {card?.set.name}</p>
                                <p className="text-lg mb-4">HP: {card?.hp}</p>
                                <p className="text-lg mb-4">Rarity: {card?.rarity}</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div>
                                {/* Mosse e abilità del Pokémon */}
                                <div className="mb-4">

                                    {/* Abilità del Pokémon */}
                                    {card?.abilities &&
                                        <div className="mb-4">
                                            <h2 className="text-2xl font-bold mb-2">Abilities</h2>
                                            <div className="flex">
                                                <p className="text-lg font-semibold">{card.abilities[0].type}:</p>
                                                <p className="text-lg font-semibold ms-2">{card.abilities[0].name}</p>
                                            </div>
                                            <p className="text-sm italic">{card.abilities[0].text}</p>
                                        </div>
                                    }

                                    {/* Mosse del Pokémon */}
                                    <h2 className="text-2xl font-bold mb-2">Attacks</h2>
                                    {card?.attacks.map((attack, i) => (
                                        <div key={i} className="mb-2">
                                            <p className="text-lg font-semibold">{attack.name}</p>
                                            <p className="text-sm italic">{attack.text}</p>
                                            <p className="text-sm">Damage: {attack.damage || "---"}</p>
                                            <div className="text-sm flex items-center">
                                                <p>Energy Cost:</p>
                                                {attack.cost.map((energy, i) => (
                                                    <span
                                                        key={i}
                                                        className="px-2 mx-1 py-1 bg-gray-200 rounded-full text-sm"
                                                    >
                                                        {energy}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                {/* Debolezze del Pokémon */}
                                <div className="mb-4">
                                    <h2 className="text-2xl font-bold mb-2">Weaknesses</h2>
                                    {card?.weaknesses.map((weakness, i) => (
                                        <p key={i} className="text-lg">
                                            {weakness.type}: {weakness.value}
                                        </p>
                                    ))}
                                </div>

                                {/* Resistenze del Pokémon */}
                                <div className="mb-4">
                                    <h2 className="text-2xl font-bold mb-2">Resistances</h2>
                                    {card?.resistances?.map((resistance, i) => (
                                        <p key={i} className="text-lg">
                                            {resistance.type} : {resistance.value}
                                        </p>
                                    ))}
                                </div>


                                {/* Costo di ritirata del Pokémon */}
                                <div className="mb-4">
                                    <h2 className="text-2xl font-bold mb-2">Retreat Cost</h2>
                                    <div className="flex gap-2">
                                        {card?.retreatCost.map((energy, i) => (
                                            <span
                                                key={i}
                                                className="px-2 py-1 bg-gray-200 rounded-full text-sm"
                                            >
                                                {energy}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Descrizione del Pokémon del Pokémon */}
                        {card?.flavorText &&
                            <div className="mb-4">
                                <h2 className="text-2xl font-bold mb-2">Description</h2>
                                <p className="text-lg">{card.flavorText}</p>
                            </div>
                        }
                    </div>
                </div>
            }
        </section>
    );
};

export default TcgShow;