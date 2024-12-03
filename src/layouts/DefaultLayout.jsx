import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import { useHamburger } from "../contexts/HamburgerContext";

const DefaultLayout = () => {

    const { isOpen, setIsOpen } = useHamburger(false);

    return (
        <>
            <Header isOpenMenu={isOpen} setIsOpenMenu={setIsOpen} />

            {!isOpen &&
                <main>
                    <Outlet />
                </main>
            }

        </>
    )
}
export default DefaultLayout;