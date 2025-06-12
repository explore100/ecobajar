import { useState } from "react";
import { useCartStore } from "../Context/Main";
import ShopButton from "../Ui/ShopButton";

const Coupon = () => {
  const [code, setCode] = useState("");
  const applyCoupon = useCartStore((state) => state.applyCoupon);

  const handleApply = () => {
    applyCoupon(code.trim().toUpperCase());
  };

  return (
    <section className="w-full lg:w-[872px] h-auto mt-6 lg:mt-[24px] lg:ml-[300px] px-4 py-4 border-2 rounded-lg flex flex-col lg:flex-row items-center gap-4">
      <h1 className="font-medium text-xl text-center lg:text-left">Coupon code</h1>

      <div className="relative w-full lg:w-[33.5rem] h-[3.25rem] flex items-center">
        <input
          type="text"
          placeholder="Enter code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="border border-[#E5E5E5] bg-[#FFFFFF] w-full h-full rounded-[2.875rem] py-[0.875rem] px-[1.5rem] pr-[6rem]"
        />
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
          <ShopButton
            title="Apply Coupon"
            icon=""
            bgcolor="bg-[#333333]"
            textcolor="text-[#FFFFFF]"
            onClick={handleApply}
          />
        </div>
      </div>
    </section>
  );
};

export default Coupon;
