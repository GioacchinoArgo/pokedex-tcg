import { ImSpinner2 } from "react-icons/im";

const Loader = () => {
    return (
        <div className="fixed top-0 bottom-0 left-0 right-0 h-full w-full bg-[#221f1f75] z-20 flex items-center justify-center">
            <ImSpinner2 className="text-[400px] text-[#bf0603] animate-spin " />
            <span className="text-[200px] font-bold text-[#bf0603] absolute">P</span>
        </div>
    )
}

export default Loader;