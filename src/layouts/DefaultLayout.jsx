import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import { useHamburger } from "../contexts/HamburgerContext";

const DefaultLayout = () => {

    const { isOpen, setIsOpen } = useHamburger(false);

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