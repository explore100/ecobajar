import vegepic from "../assets/Image/sagar.png";
import { FaArrowRight } from "react-icons/fa6";
import ShopButton from "../Ui/ShopButton";

const DisProduct = () => {
  return (
    <section className="relative rounded-[0.625rem] bg-[#F2F2F2]">
      <img src={vegepic} className="pt-[120px] "  alt="Discount Banner" />
      <div className="h-[5.25rem] w-[19.5rem] absolute top-[1.25rem] left-[4rem]">
        <h1 className="font-semibold text-3xl text-orange-500">
          79% <span className="text-[#1A1A1A]">Discount</span>
        </h1>
        <p className="text-[#4D4D4D] font-normal text-base">on your first product</p>
        <ShopButton
          title="Shop Now"
          icon={<FaArrowRight />}
          bgcolor="bg-white"
          textcolor="text-[#00B207]"
        />
      </div>
    </section>
  );
};

export default DisProduct;
