import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import aboutUs from "../../assets/img/about-us.png";
import cards from "../../assets/img/cards.png";
import pokedex from "../../assets/img/pokedex.png";

const Header = ({ isOpenMenu, setIsOpenMenu }) => {
    return (
        <header className={`${isOpenMenu ? "h-screen" : "h-[80px]"} md:h-[80px] transform transition-all duration-700 text-white py-6 md:py-0 md:px-20 bg-[#101720] drop-shadow-md`}>
            <nav className="container md:h-full mx-auto flex items-center justify-between">
                {/* Logo */}
                <NavLink to={"/"} className="border-b-4 border-transparent h-full text-4xl flex items-center md:uppercase font-bold ml-3 md:pt-[4px]">Pokédex TCG</NavLink>

                {/* Navbar Desktop */}
                <div className="hidden md:h-full md:flex justify-end items-center">
                    <ul className="flex md:h-full items-center text-[17px] gap-10">
                        <li className="md:w-[100px] text-center md:h-full">

                            <NavLink to={"/pokedex"} className="transition md:h-full md:flex md:items-center md:justify-center border-b-[4px] border-transparent hover:border-[#E3350D] pt-[4px] red">
                                Pokédex
                            </NavLink>
                        </li>
                        <li className="md:w-[100px] text-center md:h-full">
                            <NavLink to={"/tcg"} className="transition md:h-full md:flex md:items-center border-b-[4px] border-transparent pt-[4px] md:justify-center hover:border-[#E6BC2F] yellow">
                                TCG
                            </NavLink>
                        </li>
                        <li className="md:w-[100px] text-center md:h-full">
                            <NavLink to={"/about"} className="transition md:h-full md:flex md:items-center border-b-[4px] border-transparent pt-[4px] md:justify-center hover:border-[#4DAD5B] green">
                                About Us
                            </NavLink>
                        </li>
                    </ul>
                </div>

                {/* Hamburger Menu */}
                <button
                    type="button"
                    className="md:hidden text-3xl"
                    onClick={() => setIsOpenMenu(!isOpenMenu)}
                >
                    {isOpenMenu ? <AiOutlineClose className="mr-3" /> : <RxHamburgerMenu className="mr-3" />}
                </button>
            </nav>

            {/* Navbar Mobile */}
            <div className={`md:hidden flex-col font-semibold transform transition-all duration-500 flex text-[#101720] bg-white mt-6 ${isOpenMenu ? "" : "invisible opacity-0"}`}>
                <Link
                    to={"/"}
                    className="py-4 pl-6 flex items-center text-[18px] font-bold w-full border-l-8 border-[#E3350D]"
                    onClick={() => setIsOpenMenu(!isOpenMenu)}
                >
                    <img className="h-12 me-4" src={pokedex} alt="about-us" />
                    Pokédex
                </Link>
                <div className="h-[1px] bg-gray-400"></div>
                <Link
                    to={"/tcg"}
                    className="py-4 pl-6 flex items-center text-[18px] font-bold text-2xl w-full border-l-8 border-y-1-[9ca3af] border-[#E6BC2F]"
                    onClick={() => setIsOpenMenu(!isOpenMenu)}
                >
                    <img className="h-12 me-4" src={cards} alt="about-us" />
                    TCG
                </Link>
                <div className="h-[1px] bg-gray-400"></div>
                <Link
                    to={"/about"}
                    className="py-4 pl-4 flex items-center text-[18px] font-bold w-full border-l-8 border-[#4DAD5B]"
                    onClick={() => setIsOpenMenu(!isOpenMenu)}
                >
                    <img className="h-12 me-4" src={aboutUs} alt="cards" />
                    About Us
                </Link>
            </div>
        </header>
    );
};

export default Header;