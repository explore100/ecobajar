import { BsHandbag } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import ShopButton from "./ShopButton";
import { useCartStore } from "../Context/Main";


interface Props {
    img: string;
    price:  number;
    title: string;
    id: number;   
}
const Card = ({ img, price, title, id }: Props) => {
    const addtoCart = useCartStore((state) => state.addToCart);
    const item = {
        id: id, // Optional: Use index or some real unique ID
        img: img,
        title,
        price,
        images: [],
        quantity: 0
    };
    return (
        <div key={item.id} className="border-2 rounded-lg w-[16.5rem] h-[20.4375rem] group relative transition-all duration-300 hover:border-green-600  ">
            <div>
                <img src={item.img} alt="" className="w-[15.875rem] h-[14.375rem] mx-[0.3125rem] my-[0.3125rem] " />
                <div className="absolute inset-0 top-[1rem] left-[13rem] flex flex-col gap-[6px] h-[40px] w-[40px] opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="border rounded-full p-[10px] shadow-md bg-[#F2F2F2]" ><CiHeart /></button>
                    <button className="border rounded-full p-[10px] shadow-md bg-[#F2F2F2]"  ><IoEyeOutline /></button>
                </div>
            </div>

            <div className="w-[16.5rem] h-[5.4375rem] px-[0.75rem] ">
                <h1 className="font-normal text-sm text-[#4D4D4D] group-hover:text-green-500 transition ">{item.title}</h1>
                <div className="flex justify-between  gap-[10rem]">
                    <p className="font-medium text-base">{item.price}</p>
                    <button onClick={() => addtoCart(item)} className="rounded-full bg-[#F2F2F2] px-[0.625rem] py-[0.6563rem] h-[40px] w-[40px] group-hover:bg-green-500 transition">
                        <BsHandbag className="group-hover:text-white transition" />
                    </button>
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
            <div className="w-[32.9375rem] h-[2.875rem] justify-evenly hidden ">
                <button className="border rounded-full p-[10px] shadow-md" ><CiHeart /></button>
                <ShopButton
                    title="Read More"
                    icon={<BsHandbag />}
                    bgcolor="bg-[#00B207]"
                    textcolor="text-[#ffffff]" />
                <button className="border rounded-full p-[10px]"  ><IoEyeOutline /></button>
            </div>
        </div>
    )
}

export default Card