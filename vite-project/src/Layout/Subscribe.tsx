import ShopButton from "../Ui/ShopButton"
import { FaInstagram } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";

import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";




const Subscribe = () => {
    return (
        <>
            <section className="bg-[#F7F7F7] w-full h-[10.125rem] mt-[3.75rem] flex px-[18.75rem] items-center">
                <div className="h-[5.125rem] w-[28rem] ">
                    <h1 className="font-semibold text-2xl text-[#1A1A1A]">Suscribe our NewsLetter</h1>
                    <p className="font-normal text-sm text-[#999999]">Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.</p>
                </div>
                <div className="relative w-[33.5rem] h-[3.25rem] flex items-center">
                    <input
                        type="email"
                        placeholder="Your Email Address"
                        className="border border-[#E5E5E5] bg-[#FFFFFF] w-full h-full rounded-[2.875rem] py-[0.875rem] px-[1.5rem] pr-[6rem]" // Add right padding to avoid overlap
                    />
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                        <ShopButton
                            title="Subscribe"
                            icon=""
                            bgcolor="bg-[#00B207]" 
                            textcolor="text-[#ffffff]"

                        />
                    </div>
                </div>

                <span className="flex gap-8 ml-[2.5rem]">
                    <a href="#" className=""><CiFacebook className=" h-[2.5rem] w-[2.5rem]" /></a>
                    <a href="#" className=""><FaTwitter className=" h-[2.5rem] w-[2.5rem]"  /></a>
                    <a href="#" className=""><FaPinterestP className=" h-[2.5rem] w-[2.5rem]"  /></a>
                    <a href="#" className=""><FaInstagram className=" h-[2.5rem] w-[2.5rem]"  /></a>
                </span>
            </section>
        </>
    )
}

export default Subscribe