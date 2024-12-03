import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import { useHamburger } from "../contexts/HamburgerContext";

const DefaultLayout = () => {

    const { isOpen, setIsOpen } = useHamburger(false);

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
            <Header isOpenMenu={isOpen} setIsOpenMenu={setIsOpen} />

            <main className={`${isOpen ? "h-0" : "opacity-100"} transform transition-all duration-600`}>
                <Outlet />
            </main>


        </>
    )
}
export default DefaultLayout;