import { useLocation } from "react-router";
import { Vege } from "../Types/Types";
import Payment from "./Payment";




const OrderSum = () => {
    const location = useLocation();
    const {
        subtotal = "0.00",
        shipping = "0.00",
        total = "0.00",
        cartItems = [],
    } = location.state || {};

    return (
        <div className="flex">

       
        <section className="w-[424px] h-auto mt-[32px] border-2 rounded-lg">
            <div className="w-[376px] h-auto p-[24px]  bg-white">
                <h1 className="font-medium text-xl mb-4">Order Summary</h1>

                {/* Render each cart item */}
                {cartItems.length > 0 ? (
                    <div className="space-y-4 mb-6">
                        {cartItems.map((item: Vege) => (
                            <div
                                key={item.id}
                                className="flex items-center justify-between  pb-2"
                            >
                                <div className="flex items-center gap-2">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-12 h-12 object-contain"
                                    />
                                    <div>
                                        <h2 className="text-sm font-medium">{item.title}</h2>
                                        <p className="text-xs text-gray-500">
                                            {item.quantity} x ${item.price}
                                        </p>
                                    </div>
                                </div>
                                <span className="text-sm font-semibold">
                                    ${(item.quantity * item.price).toFixed(2)}
                                </span>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No items in order.</p>
                )}

                {/* Price summary */}
                <div className="space-y-4">
                    <div className="flex justify-between items-center pb-3 border-b">
                        <span className="text-base font-normal">Subtotal:</span>
                        <span className="text-base font-semibold">${subtotal}</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b">
                        <span className="text-base font-normal">Shipping:</span>
                        <span className="text-base font-semibold">
                            {parseFloat(shipping) === 0 ? "Free" : `$${shipping}`}
                        </span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b">
                        <span className="text-base font-normal">Total:</span>
                        <span className="text-base font-semibold">${total}</span>
                    </div>
                </div>
            </div>
            <Payment/>
        </section>
         </div>
    );
};

export default OrderSum;
