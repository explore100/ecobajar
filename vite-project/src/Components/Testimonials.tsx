import { BiRightArrowAlt } from "react-icons/bi";
import { BiLeftArrowAlt } from "react-icons/bi";
import { SiComma } from "react-icons/si";
import { testimonial } from "../Types/Types";
import { FaStar } from "react-icons/fa";





const Testimonials = () => {
    return (
        <>
            <section className="w-full h-[28.1875rem] my-[3.75rem] px-[18.75rem]  bg-[#F2F2F2]">
                <div className="flex justify-between items-center pt-[3.75rem] h-[2.8125rem] ">
                    <h1 className="text-3xl font-semibold">Client Testimonials</h1>
                    <div className="flex gap-[0.75rem] ">
                        <BiLeftArrowAlt className="h-[2.8125rem] w-[2.8125rem] border rounded-full bg-white hover:bg-[#00B207]" />
                        <BiRightArrowAlt className="h-[2.8125rem] w-[2.8125rem] border rounded-full bg-white hover:bg-[#00B207] " />
                    </div>
                </div>
                <section className="w-[82.5rem] h-[15.875rem] mt-[4rem]  flex gap-[1.5rem]">
                    {
                        testimonial.TestimonialData.map((item, index) => (
                            <div key={index} className="  ">
                                <div className="h-[15.875rem] w-[26.5rem] rounded-lg bg-white px-[1.5rem]  ">
                                    <span className="flex pt-[24px] opacity-30  text-[#00B207]">
                                        <SiComma className="w-[2rem] h-[2rem]" /> <SiComma className="w-[2rem] h-[2rem]" />
                                    </span>
                                    <h1 className="pt-[1rem] font-normal text-sm text-[#4D4D4D]">{item.subtitle}</h1>
                                    <div className="mt-[1rem] h-[64px] ">
                                        <div className="flex gap-[0.75rem] items-center ">
                                            <img src={item.img} className="w-[3.5rem] h-[3.5rem]" />
                                            <div className="">
                                                <h1 className="font-medium text-base">{item.name}</h1>
                                                <h3 className="font-normal text-sm text-[#999999]">{item.person}</h3>
                                            </div>
                                            <div className="flex gap-0 pl-[6.5625rem]">
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

                        ))


                    }
                </section>

            </section>
        </>
    )
}

export default Testimonials