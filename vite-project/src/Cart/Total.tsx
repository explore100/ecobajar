import { NavLink } from "react-router";
import ShopButton from "../Ui/ShopButton";
type TotalProps = {
    subtotal: number;
    shipping: number;
  };
  
  const Total: React.FC<TotalProps> = ({ subtotal, shipping }) => {
    const total = subtotal + shipping;
  
    return (
      <div className="w-[424px] h-[296px] border-2 rounded-lg p-6 relative bg-white shadow-md">
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
          <div className="flex justify-between items-center">
            <span className="text-base font-normal">Total:</span>
            <span className="text-base font-semibold">${total.toFixed(2)}</span>
          </div>
        </div>
       
       
        <NavLink to="/CheckOut">
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
  