import spinloader from "../../assets/img/spinloader.png"
import spiralRight from "../../assets/img/spiral-right.png"
import spiralLeft from "../../assets/img/spiral-left.png"

const Loader = () => {
    return (
        <div className="fixed top-0 bottom-0 left-0 right-0 h-full w-full bg-[#221f1f75] z-20 flex items-center justify-center">

            <figure className="relative h-[450px]">

                <img src={spinloader} alt="Loader" className="w-full h-full" />

                <figure className="h-[155px] absolute left-[35px] top-[180px] loader-spin">
                    <img src={spiralLeft} alt="" className="h-full" />
                </figure>

                <figure className="h-[155px] absolute left-[218px] top-[180px] animate-spin">
                    <img src={spiralRight} alt="" className="h-full" />
                </figure>

            </figure>

        </div>
    )
}

export default Loader;