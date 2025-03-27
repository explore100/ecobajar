import { hotproduct } from "../Types/Types";
import { PopularProduct } from "../Utility/Data"
import { FaArrowRight } from "react-icons/fa6";
import { BsHandbag } from "react-icons/bs";
import { FaStar } from "react-icons/fa";


const Deals = () => {
    return (
        <section className="w-[82.5rem] h-[44.625rem] my-[3.75rem] mx-[300px]">
            <div className="flex justify-between h-[2.375rem] mt-[3.75rem] w-[82.5rempx]">
                <h1 className="font-semibold text-3xl">{PopularProduct?.title}</h1>
                <button className="flex items-center  gap-[.75rem] font-medium text- text-[#00B207]">View All <FaArrowRight /> </button>
            </div>
            <div className=" flex flex-wrap mt-[2rem]">
                {
                    hotproduct.ProductData.map((item, index) => (
                        <div key={index} className="border-2 ">
                            <img src={item.img} alt="" className="w-[15.875rem] h-[14.375rem] mx-[0.3125rem] my-[0.3125rem]" />
                            <div className="w-[16.5rem] h-[5.4375rem] px-[0.75rem] py[0.7813rem]">
                            <h1>{item.title}</h1>
                                <div className="flex  gap-[8.8125rem]">
                                    <p>{item.price}</p>
                                    <button><BsHandbag /></button>
                                </div>
                                <button><FaStar /></button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Deals