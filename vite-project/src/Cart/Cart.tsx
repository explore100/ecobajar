
import { MyShoppingCart } from "../Utility/Data";
import Cartx from "./Cartx";
import Coupon from "./Coupon";

const Cart = () => {
 
    
    return (
        <div className="">
            <div className="font-semibold text-3xl mx-[814px] my-[36px] ">
                <h1>{MyShoppingCart?.title}</h1>
            </div>
            <Cartx /> 
            <Coupon/>
        </div>
    );
}
export default Cart;

