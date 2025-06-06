import banner from "../assets/Image/mixbeg.png";
import { bannerproduct } from "../Types/Types";
import ShopButton from "../Ui/ShopButton";
import { FaArrowRight } from "react-icons/fa6";
import Filter from "./Filter";
import { useState, useEffect } from "react";

const ShopBanner = () => {
  let clock = new Date().toLocaleTimeString();
  const [currentTime, setNewTime] = useState(clock);
  const [hour, minute, second] = currentTime.split(":");

  const updateTime = () => {
    clock = new Date().toLocaleTimeString();
    setNewTime(clock);
  };
  useEffect(() => {
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <section className="w-[82.5rem] h-[22.375rem] mt-[1.5rem]">
        <img
          src={banner}
          className="rotate-180  object-cover w-[82.5rem] h-[22.375rem] rounded-lg mx-[18.75rem] absolute "
          alt=""
        />
        <div className="w-[26.5rem] h-[14.5rem] relative top-[4.25rem] left-[340px]">
          {bannerproduct.BannerProductData.filter((item) =>
            [40].includes(item.id)
          ).map((item) => (
            <div key={item.id}>
              <h2 className={`text-base font-medium uppercase text-[#FFFFFF] `}>
                {item.subtitle}
              </h2>
              <h1 className={`text-4xl font-semibold text-[#FFFFFF] `}>
                {item.title}
              </h1>

              <div className="flex gap-4 mt-4 mb-6">
                <div className="w-14 h-13 text-center">
                  <p className="font-normal text-2xl text-[#00B207]">00</p>
                  <h1 className="text-xs text-white/80 uppercase">days</h1>
                </div>
                <div className="w-14 h-13 text-center">
                  <p className="font-normal text-2xl text-[#00B207]">{hour}</p>
                  <h1 className="text-xs text-white/80 uppercase">hours</h1>
                </div>
                <div className="w-14 h-13 text-center">
                  <p className="font-normal text-2xl text-[#00B207]">
                    {minute}
                  </p>
                  <h1 className="text-xs text-white/80 uppercase">mins</h1>
                </div>
                <div className="w-14 h-13 text-center">
                  <p className="font-normal text-2xl text-[#00B207]">
                    {second.split(" ")[0]}
                  </p>
                  <h1 className="text-xs text-white/80 uppercase">secs</h1>
                </div>
              </div>

              <ShopButton
                title="Shop Now"
                icon={<FaArrowRight />}
                bgcolor="bg-[#00B207]"
                textcolor="text-[#ffffff]"
              />

              <div>
                <div className="w-[6.25rem] h-[6.25rem] rounded-full bg-[#FF8A00] text-white flex items-center justify-center font-bold text-sm absolute right-[-1.5rem] top-[-1rem] shadow-lg">
                  56% <br /> OFF
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Filter />
    </>
  );
};

export default ShopBanner;
