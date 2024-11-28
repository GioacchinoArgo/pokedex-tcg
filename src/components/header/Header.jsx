const Header = () => {
    return (
        <header className="flex justify-center items-center bg-red-400 h-[80px]">
            <div className="bg-orange-600 flex justify-center items-center w-[500px] h-[50px] gap-20">
                <div className="bg-yellow-600 w-[20%] h-[30px] flex justify-center items-center">
                    <a href="#" className="text-blue-800 font-bold hover:text-sky-600 transition ease-in-out">link 1</a>
                </div>
                <div className="bg-yellow-600 w-[20%] h-[30px] flex justify-center items-center">
                    <a href="#" className="text-blue-800 font-bold hover:text-sky-600 transition ease-in-out">link 2</a>
                </div>
                <div className="bg-yellow-600 w-[20%] h-[30px] flex justify-center items-center">
                    <a href="#" className="text-blue-800 font-bold hover:text-sky-600 transition ease-in-out">link 3</a>
                </div>
            </div>
        </header>
    )
}
export default Header;