import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";

const Header = ({ isOpenMenu, setIsOpenMenu }) => {
    return (
        <header className={`${isOpenMenu ? "h-screen" : "h-[80px]"} md:h-[80px] transform transition-all duration-700 text-white py-6 md:py-0 md:px-20 bg-[#101720] drop-shadow-md`}>
            <nav className="container md:h-full mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link className="text-2xl font-bold">Pokédex Tcg</Link>

                {/* Navbar Desktop */}
                <div className="hidden md:h-full md:flex justify-end items-center">
                    <ul className="flex md:h-full items-center text-[17px] font-semibold gap-10">
                        <li className="md:w-[100px] text-center md:h-full">
                            <NavLink to={"/"} className="transition md:h-full md:flex md:items-center md:justify-center border-transparent border-b-4 active:border-b-[#E3350D]">
                                Pokédex
                            </NavLink>
                        </li>
                        <li className="md:w-[100px] text-center md:h-full">
                            <NavLink className="transition md:h-full md:flex md:items-center md:justify-center border-transparent border-b-4 active:border-b-[#E6BC2F]">
                                TCG
                            </NavLink>
                        </li>
                        <li className="md:w-[100px] text-center md:h-full">
                            <NavLink className="transition md:h-full md:flex md:items-center md:justify-center border-transparent border-b-4 active:border-b-[#4DAD5B]">
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
                    {isOpenMenu ? <AiOutlineClose /> : <RxHamburgerMenu />}
                </button>
            </nav>

            {/* Navbar Mobile */}
            <div className={`md:hidden flex-col font-semibold text-center text-[#101720] bg-white mt-10 ${isOpenMenu ? "flex" : "hidden"}`}>
                <Link className="py-4 text-2xl w-full border-l-4 border-[#E3350D] hover:bg-[#E3350D] hover:text-white transition duration-400">Pokédex</Link>
                <div className="h-[1px] bg-gray-400"></div>
                <Link className="py-4 text-2xl w-full border-l-4 border-[#E6BC2F] hover:bg-[#E6BC2F] hover:text-white transition duration-400">TCG</Link>
                <div className="h-[1px] bg-gray-400"></div>
                <Link className="py-4 text-2xl w-full border-l-4 border-[#4DAD5B] hover:bg-[#4DAD5B] hover:text-white transition duration-400">About Us</Link>
            </div>
        </header>
    );
};

export default Header;