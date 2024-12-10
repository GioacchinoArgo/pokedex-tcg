import axios from "axios";
import { useEffect, useState } from "react";

const TcgIndex = () => {

    const [cards, setCards] = useState();

    // Funzione per cercare le prime 20 carte
    const fetchCards = async () => {
        const res = await axios.get('https://api.pokemontcg.io/v2/cards?pageSize=20', {
            headers: {
                'X-Api-Key': '307349a3-9010-4b96-993c-efe364b54878'
            }
        });

        const cards = res.data.data;

        setCards(cards);
    }

    useEffect(() => {
        fetchCards()
    }, [])

    return (

        // Lista delle carte
        <section>
            <div className="container mx-auto">
                <ul className="">
                    {cards?.map(card => (
                        <li key={`card-${card.id}`}> <img src={card.images.large} alt={card.name} /> </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
export default TcgIndex;