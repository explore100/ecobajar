import data from "../Types/Types";
import { FaArrowRight } from "react-icons/fa6";
import Deals from "./Deals";

const Item = () => {
    return (
        <>
        <section className="w-[82.5rem] h-[32.25rem] mx-[18.75rem]">
            <div className="flex justify-between h-[2.375rem] mt-[3.75rem] w-[82.5rempx]">
                <h1 className="font-semibold text-3xl">Popular Categories</h1>
                <button className="flex items-center  gap-[.75rem] font-medium text- text-[#00B207]">View All <FaArrowRight/> </button>
            </div>
            <div className="flex gap-6 flex-wrap mt-[2rem] ">
                {
                    data.CardData.map((item, index) => (
                        <div key={index} className="h-[13.3125rem] w-[12.5rem] border-[1px] rounded-[0.3125rem] border-[#E5E5E5]">
                            <img src={item.img} className="w-[11.875rem] h-[8.125rem] mt-[1rem]" />
                            <div className="w-[12.5rem] h-[1.6875rem] mt-[1rem] ">
                                <h1 className="flex items-center justify-center font-medium  text-lg">{item.title}</h1>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
        <Deals/>
        </>
    )
}

export default Item
