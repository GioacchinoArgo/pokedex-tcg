import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLoader } from "../../contexts/LoaderContext";

const apiKey = import.meta.env.VITE_API_KEY;

const TcgIndex = () => {

    const [cards, setCards] = useState();

    const { loader, setLoader } = useLoader();

    // Funzione per cercare le prime 20 carte
    const fetchCardsDetails = async () => {
        setLoader(true);

        const res = await axios.get('https://api.pokemontcg.io/v2/cards?pageSize=20&q=set.name:base', {
            headers: {
                'X-Api-Key': apiKey
            }
        });

        const cards = res.data.data;

        // Imposto il setTimeout per vedere il loader
        setTimeout(() => {

            setCards(cards);

            setLoader(false);

        }, 500);

        console.log(cards)
    }

    useEffect(() => {
        fetchCardsDetails()
    }, [])

    return (

        // Lista delle carte
        <section>
            {loader ||
                <div className="container mx-auto py-8">
                    <h1 className="text-center text-6xl font-semibold mb-8">Trading Card Game</h1>
                    <div className="flex justify-center items-center gap-4 flex-wrap">
                        {cards?.map(card => (
                            <Link to={`/tcg/${card.id}`} 
                            className="flex flex-col h-[350px] items-center justify-center overflow-hidden hover:scale-110 cursor-pointer ease-in-out duration-200"
                            key={`card-${card.id}`}
                            >
                                <img className="shadow-lg rounded-md h-full select-none drag" src={card.images.large} alt={card.name} />
                            </Link>
                        ))}
                    </div>
                </div>
            }
        </section>
    )
}
export default TcgIndex;