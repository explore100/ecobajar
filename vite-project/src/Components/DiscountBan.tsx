import img from "../assets/Image/fullimage.png"
import ShopButton from "../Ui/ShopButton"
import { FaArrowRight } from "react-icons/fa6";



const DiscountBan = () => {
    return (
        <>
            <section className="mx-[18.75rem] my-[3.75rem] relative  ">
                <img src={img} className="w-[1320px] h-[358px] rounded-lg " />
                <div className="w-[27.5625rem] h-[9.9375rem] flex flex-col absolute top-[60px] left-[51.75rem]  gap-[1rem] ml-[3.1875rem] ">
                    <h2 className="font-medium text-base uppercase text-white">summer sale</h2>
                    <h1 className="font-semibold text-6xl text-white"><span className="text-orange-500">37%</span >OFF</h1>
                    <p className="font-normal text-base text-[#FFFFFF]">Free on all your order, Free Shipping and 30 days <br /> money-back guarantee</p>
                    <ShopButton title="Shop Now"
                        icon={<FaArrowRight />}
                        bgcolor="bg-[#00B207]" // Tailwind bg color
                        textcolor="text-[#ffffff]" />
                </div>
            </section>
        </>
    )
}

export default DiscountBan