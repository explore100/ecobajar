// src/Pages/Cartx.tsx

import { NavLink } from "react-router";
import { useCartStore } from "../Context/Main";
import { Vege } from "../Types/Types";
import Total from "./Total"; // your total summary component

const Cartx: React.FC = () => {
  const cartItems = useCartStore((state) => state.cartItems);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);

  const getSubtotal = (item: Vege): string =>
    (item.price * item.quantity).toFixed(2);

  const subtotal: number = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping: number = subtotal > 100 ? 0 : 10;

  return (
    <section className="flex gap-[24px]">
      <div className="border-2 w-[872px] ml-[300px] mr-[24px] rounded-lg">
        <div className="flex justify-evenly items-center h-[30px] font-semibold text-gray-500 border-b pb-[16px] mt-[16px]">
          <div>PRODUCT</div>
          <div>PRICE</div>
          <div>QUANTITY</div>
          <div>SUBTOTAL</div>
        </div>

        {cartItems.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-4 items-center w-[832px] h-[100px] mx-[20px] my-[12px] border-b"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.img}
                alt={item.title}
                className="w-16 h-16 object-contain"
              />
              <span>{item.title}</span>
            </div>

            <div className="ml-[80px]">${item.price}</div>

            <div className="flex items-center gap-2 ml-[35px]">
              <button
                onClick={() => updateQuantity(item.id, -1)}
                className="px-2 py-1 border rounded-full"
              >
                −
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, 1)}
                className="px-2 py-1 border rounded-full"
              >
                +
              </button>
            </div>

            <div className="flex justify-between items-center ml-[35px]">
              <span>${getSubtotal(item)}</span>
              <button
                onClick={() => removeItem(item.id)}
                className="text-gray-400 hover:text-red-500 border-2 px-[7px] rounded-full text-lg ml-4"
              >
                ×
              </button>
            </div>
          </div>
        ))}

        <div className="flex justify-between px-[20px] py-[16px]">
          <NavLink to="/shop" className="bg-gray-100 rounded-full hover:text-blue-500">
          <button className="px-4 py-2 bg-gray-100 rounded-full text-sm">
            Return to shop
          </button>
          </NavLink>
         
          <button className="px-4 py-2 bg-gray-100 rounded-full hover:text-blue-500 text-sm">
            Update Cart
          </button>
        </div>
      </div>

      {/* Total Summary */}
      <Total subtotal={subtotal} shipping={shipping} />
    </section>
  );
};

export default Cartx;
