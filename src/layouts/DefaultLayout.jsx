import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { useHamburger } from "../contexts/HamburgerContext";
import Loader from "../components/Loader/Loader";
import { useLoader } from "../contexts/LoaderContext";

const DefaultLayout = () => {

    const { isOpen, setIsOpen } = useHamburger(false);

    const { loader } = useLoader();

    // Funzione per rimontare ogni volta il main quando l'hamburger menù è sopra i 768px
    useEffect(() => {
        const handleResize = () => {
            // Chiudo il menu se la larghezza della finestra è >= 768px
            if (window.innerWidth >= 768 && isOpen) {
                setIsOpen(false);
            }
        };

        // Aggiungo l'event listener all'evento resize
        window.addEventListener("resize", handleResize);

        // Rimuovo l'event listener quando il componente viene smontato
        return () => {
            window.removeEventListener("resize", handleResize);
        };

    }, [isOpen]);

    return (
        <>
            {!loader &&
                <Loader />
            }

            <Header isOpenMenu={isOpen} setIsOpenMenu={setIsOpen} />

            <main className={`${isOpen ? "h-0" : "opacity-100"} transform transition-all duration-700`}>
                <Outlet />
            </main>

        </>
    )
}
export default DefaultLayout;