
import { hotproduct } from "../Types/Types"
import { BsHandbag } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";


function CartProd() {
    return (
        <>
            <section className="w-[1320px] h-[1700px] mx-[18.75rem] mt-[2rem]">
                <div className="grid  grid-cols-4 gap-[1.5rem] ">
                    {hotproduct.ProductData.filter((item) => [18,19,20,21,22,23,24,25,26,27,28,29,30,31, 32, 33].includes(item.id)).map((item) => (
                        <div key={item.id} className="border-[1px] w-[19.5rem] h-[25.4375rem] rounded-lg group relative transition-all duration-300 hover:border-green-600  ">
                            <img src={item.img} className="h-[18.875rem] w-[18.875rem] p-[1.25rem]" alt="" />
                            <div className="absolute inset-0 top-[1.25rem] left-[15.75rem] flex flex-col gap-[6px] h-[40px] w-[40px] opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="border rounded-full p-[10px] shadow-md"><CiHeart /></button>
                                <button className="border rounded-full p-[10px]"><IoEyeOutline /></button>
                            </div>
                            <div className="w-[19.5rem] h-[5.9375rem] px-[0.75rem]  ">
                                <h1 className="font-normal text-sm text-[#4D4D4D] group-hover:text-green-500 transition ">{item.title}</h1>
                                <div className="flex gap-[12rem]">
                                    <p className="font-medium text-base">{item.price}</p>
                                    <button className=" rounded-full bg-[#F2F2F2] px-[0.625rem] py-[0.6563rem] h-[40px] w-[40px] group-hover:bg-green-500 transition "><BsHandbag className="group-hover:text-white transition" /></button>
                                </div>

                                {[...Array(5)].map((_, index) => (
                                    <button
                                        key={index}
                                        className={index === 4 ? "text-[#CCCCCC]" : "text-[#FF8A00]  "}
                                    >
                                        <FaStar />
                                    </button>
                                ))}
                            </div>

                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default CartProd