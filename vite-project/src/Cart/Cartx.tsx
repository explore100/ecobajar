import { NavLink } from "react-router-dom"; // ✅ fixed typo
import { useCartStore } from "../Context/Main";
import { Vege } from "../Types/Types";
import Total from "./Total";

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
    <section className="flex flex-col lg:flex-row gap-6 lg:gap-[24px]">
      {/* Cart Items */}
      <div className="border-2 w-full lg:w-[872px] lg:ml-[300px] lg:mr-[24px] rounded-lg">
        {/* Header */}
        <div className="hidden md:flex justify-evenly items-center h-[30px] font-semibold text-gray-500 border-b pb-4 mt-4">
          <div>PRODUCT</div>
          <div>PRICE</div>
          <div>QUANTITY</div>
          <div>SUBTOTAL</div>
        </div>

        {/* Items */}
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-1 md:grid-cols-4 items-center px-4 py-4 border-b"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.img}
                alt={item.title}
                className="w-16 h-16 object-contain"
              />
              <span>{item.title}</span>
            </div>

            <div className="md:ml-[80px] mt-2 md:mt-0">${item.price}</div>

            <div className="flex items-center gap-2 mt-2 md:mt-0 md:ml-[35px]">
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

            <div className="flex justify-between md:justify-start items-center mt-2 md:mt-0 md:ml-[35px]">
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

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-between items-center px-4 py-4 gap-4">
          <NavLink to="/shop">
            <button className="px-4 py-2 bg-gray-100 rounded-full hover:text-blue-500 text-sm">
              Return to shop
            </button>
          </NavLink>

          <button className="px-4 py-2 bg-gray-100 rounded-full hover:text-blue-500 text-sm">
            Update Cart
          </button>
        </div>
      </div>

      {/* Total Summary */}
      <div className="w-full lg:w-auto lg:mr-8">
        <Total subtotal={subtotal} shipping={shipping} />
      </div>
    </section>
  );
};

export default Cartx;
