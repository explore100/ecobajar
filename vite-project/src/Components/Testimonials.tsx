import { BiRightArrowAlt } from "react-icons/bi";
import { BiLeftArrowAlt } from "react-icons/bi";
import { SiComma } from "react-icons/si";
import { testimonial } from "../Types/Types";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <>
      <section className="w-full h-[28.1875rem] my-[3.75rem] px-6 sm:px-12 md:px-24 lg:px-[18.75rem] bg-[#F2F2F2]">
        <div className="flex justify-between items-center pt-[3.75rem] h-[2.8125rem]">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">Client Testimonials</h1>
          <div className="flex gap-3 sm:gap-[0.75rem]">
            <BiLeftArrowAlt className="h-[2.8125rem] w-[2.8125rem] border rounded-full bg-white hover:bg-[#00B207]" />
            <BiRightArrowAlt className="h-[2.8125rem] w-[2.8125rem] border rounded-full bg-white hover:bg-[#00B207]" />
          </div>
        </div>
        <section className="w-full max-w-[82.5rem] h-[15.875rem] mt-10 flex flex-col sm:flex-row gap-4 sm:gap-[1.5rem] overflow-x-auto no-scrollbar">
          {testimonial.TestimonialData.map((item, index) => (
            <div key={index} className="">
              <div className="h-[15.875rem] w-full max-w-[26.5rem] rounded-lg bg-white px-6 sm:px-[1.5rem]">
                <span className="flex pt-6 opacity-30 text-[#00B207]">
                  <SiComma className="w-8 h-8" /> <SiComma className="w-8 h-8" />   
                </span>
                <h1 className="pt-4 font-normal text-xs sm:text-sm text-[#4D4D4D]">{item.subtitle}</h1>
                <div className="mt-4 h-16">
                  <div className="flex gap-3 items-center">
                    <img src={item.img} className="w-14 h-14" />
                    <div>
                      <h1 className="font-medium text-sm sm:text-base">{item.name}</h1>
                      <h3 className="font-normal text-xs sm:text-sm text-[#999999]">{item.person}</h3>
                    </div>
                    <div className="flex gap-0 pl-16 sm:pl-[6.5625rem]">
                      {[...Array(5)].map((_, index) => (
                        <button key={index} className="text-[#FF8A00]">
                          <FaStar />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </section>
    </>
  );
};

export default Testimonials;
