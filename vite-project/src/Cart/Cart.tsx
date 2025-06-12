
import { MyShoppingCart } from "../Utility/Data";
import Cartx from "./Cartx";
import Coupon from "./Coupon";

const Cart = () => {
 
    
    return (
      <div className="px-4 sm:px-6 lg:px-8 py-6">
            <div className="text-center font-semibold text-2xl sm:text-3xl mb-8">
                <h1>{MyShoppingCart?.title}</h1>
            </div>
            <Cartx />
            <Coupon />
        </div>
    );
}
export default Cart;

