import Leaf from "../assets/Image/plant 1.jpg"
import { IoIosSearch } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsHandbag } from "react-icons/bs";


const Heade = () => {
    return (
        <section className="border-t-4 border-[#E5E5E5] w-full h-[93px] flex justify-evenly items-center  px-8">
            {/* Logo Section */}
            <div className="flex items-center gap-2">
                <img src={Leaf} alt="Plant Logo" className="h-8 w-8" />
                <h1 className="font-medium text-3xl">Ecobazar</h1>
            </div>

            {/* Search Bar */}
            <div className="relative flex items-center justify-center w-[500px]">
                <IoIosSearch className="absolute left-4 top-3 h-5 w-5 text-gray-500" />
                <input
                    type="text"
                    placeholder="Search..."
                    className="border-2 border-gray-300 px-12 text-lg rounded-l-lg py-3 w-[400px] h-[45px] focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button className="bg-[#00B207] text-white py-3 px-6 font-semibold text-sm rounded-r-lg h-[45px] w-[98px] ">
                    Search
                </button>
            </div>
            <div className="flex flex-cols-3 justify-end items-center gap-4">
                <div className="border-r-4 pr-4">
                    <IoMdHeartEmpty className="h-[32px] w-[32px]" />
                </div>
                <BsHandbag className="text-3xl cursor-pointer" />
                <div>
                    <h1 className="text-[0.8125rem]">Shopping cart:</h1>
                    <h1 className="font-bold text-[0.873rem]">$57.00</h1>
                </div>
            </div>
        </section>
    )
}

export default Heade