import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = ({ isOpenMenu, setIsOpenMenu }) => {
    return (
        <header className={`${isOpenMenu ? "h-screen" : "h-[80px]"} md:h-[80px] transform transition-all duration-700 text-white py-6 md:px-32 bg-[#101720] drop-shadow-md`}>
            <nav className="container md:h-full mx-auto flex items-center justify-between px-8">
                {/* Logo */}
                <Link className="text-2xl font-bold">Pokédex Tcg</Link>

                {/* Navbar Desktop */}
                <div className="hidden md:h-full md:flex justify-center items-center flex-1">
                    <ul className="flex md:h-full items-center text-[16px] font-semibold gap-9">
                        <li><Link className="hover:text-gray-400 transition">Pokédex</Link></li>
                        <li><Link className="hover:text-gray-400 transition">TCG</Link></li>
                        <li><Link className="hover:text-gray-400 transition">About Us</Link></li>
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
                <Link className="py-4 text-2xl w-full border-l-4 border-l-[#E6BC2F] border-[#E6BC2F] hover:bg-[#E6BC2F] hover:text-white transition duration-400">TCG</Link>
                <div className="h-[1px] bg-gray-400"></div>
                <Link className="py-4 text-2xl w-full border-l-4 border-l-[#4DAD5B] border-[#4DAD5B] hover:bg-[#4DAD5B] hover:text-white transition duration-400">About Us</Link>
            </div>
        </header>
    );
};

export default Header;