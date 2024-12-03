import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const Header = ({ isOpenMenu, setIsOpenMenu }) => {

    return (
        <header className={`${isOpenMenu ? "h-screen items-start" : "h-[80px]"} xl:h-[80px] transform transition-all duration-600 flex justify-between text-white py-6 px-8 md:px-32 bg-[#101720] drop-shadow-md`}>
            <a href="#">Pokédex Tcg</a>
            <div className="flex-1 xl:flex justify-center hidden">
                <ul className="flex items-center text-[16px] font-semibold gap-9">
                    <li>Pokédex</li>
                    <li>TCG</li>
                    <li>About Us</li>
                </ul>
            </div>


            <Link type="button" className="xl:hidden inline text-3xl"
                onClick={() => setIsOpenMenu(!isOpenMenu)}>
                <RxHamburgerMenu />
            </Link>

        </header>
    );
};

export default Header;