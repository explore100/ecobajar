import { hotproduct } from "../Types/Types";
import { BsHandbag } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { useCartStore } from "../Context/Main"; // ✅ import the store

function CartProd() {
  const addToCart = useCartStore((state) => state.addToCart); // ✅ get addToCart function

 const filterproduct = hotproduct.ProductData.filter((item) =>
  [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32].includes(item.id)
)
  return (
    <section className="w-[61.5rem] mx-[1.5rem] mt-[1.625rem] pl-[24px]">
      <div className="grid grid-cols-3 gap-[1.5rem]">
        {filterproduct.map((item) => (
          <div
            key={item.id}
            className="border w-[19.5rem] h-[25.4375rem] rounded-lg group relative transition hover:border-green-600"
          >
            <img src={item.img} className="h-[18.875rem] w-[18.875rem] p-[1.25rem]" alt="" />
            <div className="absolute top-[1.25rem] left-[15.75rem] flex flex-col gap-[6px] opacity-0 group-hover:opacity-100 transition">
              <button className="border rounded-full p-[10px] shadow-md"><CiHeart /></button>
              <button className="border rounded-full p-[10px]"><IoEyeOutline /></button>
            </div>
            <div className="px-[0.75rem]">
              <h1 className="text-sm text-[#4D4D4D] group-hover:text-green-500 transition">{item.title}</h1>
              <div className="flex justify-between items-center">
                <p className="text-base font-medium">{item.price}</p>
                <button
                  onClick={() => addToCart(item)}
                  className="bg-[#F2F2F2] h-[40px] w-[40px] rounded-full group-hover:bg-green-500 transition"
                >
                  <BsHandbag className="mx-auto group-hover:text-white" />
                </button>
              </div>
              <div className="flex">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} className={index === 4 ? "text-[#CCCCCC]" : "text-[#FF8A00]"} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CartProd;
