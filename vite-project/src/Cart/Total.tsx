import { useCartStore } from "../Context/Main";
import { NavLink } from "react-router-dom"; // ✅ fixed import
import ShopButton from "../Ui/ShopButton";

type TotalProps = {
  subtotal: number;
  shipping: number;
};

const Total: React.FC<TotalProps> = ({ subtotal, shipping }) => {
  const discount = useCartStore((state) => state.discount);
  const coupon = useCartStore((state) => state.coupon);
  const cartItems = useCartStore((state) => state.cartItems);

  const discountAmount = subtotal * (discount / 100);
  const total = subtotal - discountAmount + shipping;

  return (
    <div className="w-full max-w-md lg:w-[424px] lg:h-[296px] border-2 rounded-lg p-6 bg-white shadow-md mx-auto lg:mx-0">
      <h1 className="text-xl font-medium mb-6">Cart Total</h1>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-base font-normal">Subtotal:</span>
          <span className="text-base font-semibold">${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-base font-normal">Shipping:</span>
          <span className="text-base font-semibold">
            {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
          </span>
        </div>

        {coupon && (
          <div className="flex justify-between items-center text-green-600">
            <span className="text-base font-normal">Coupon ({coupon}):</span>
            <span className="text-base font-semibold">
              −${discountAmount.toFixed(2)}
            </span>
          </div>
        )}

        <div className="flex justify-between items-center">
          <span className="text-base font-normal">Total:</span>
          <span className="text-base font-semibold">${total.toFixed(2)}</span>
        </div>
      </div>

      <NavLink
        to="/CheckOut"
        state={{
          subtotal: subtotal.toFixed(2),
          discount: discount.toFixed(2),
          discountAmount: discountAmount.toFixed(2),
          shipping: shipping.toFixed(2),
          total: total.toFixed(2),
          cartItems,
        }}
      >
        <div className="mt-8">
          <ShopButton
            title="Proceed to checkout"
            icon=""
            bgcolor="bg-[#00B207]"
            textcolor="text-white"
          />
        </div>
      </NavLink>
    </div>
  );
};

export default Total;
