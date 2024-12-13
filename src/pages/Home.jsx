import { useEffect } from "react";
import { useLoader } from "../contexts/LoaderContext";

const Home = () => {

    const { loader, setLoader } = useLoader();

    useEffect(() => {
        setLoader(true);
        setTimeout(() => {
            setLoader(false);
        }, 500)
    }, []);

    return (
        <section>

            {loader ||
                <div className="container mx-auto">
                    <h1 className="text-4xl text-center">Home</h1>
                </div>
            }

        </section>
    )
}

export default Home;