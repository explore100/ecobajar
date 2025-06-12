import ShopButton from "../Ui/ShopButton";
import { FaInstagram } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";

const Subscribe = () => {
  return (
    <section className="bg-[#F7F7F7] w-full py-8 px-4 lg:px-[18.75rem] mt-[3.75rem]">
      <div
        className="
          flex flex-col lg:flex-row 
          items-start lg:items-center 
          justify-between 
          gap-y-6 lg:gap-y-0
          gap-x-8
        "
      >
        {/* Text Section */}
        <div className="w-full lg:w-[28rem]">
          <h1 className="font-semibold text-2xl text-[#1A1A1A] mb-2">
            Subscribe our Newsletter
          </h1>
          <p className="font-normal text-sm text-[#999999]">
            Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
            Phasellus imperdiet elit eu magna.
          </p>
        </div>

        {/* Input and Button */}
        <div className="relative w-full lg:w-[33.5rem] h-[3.25rem]">
          <input
            type="email"
            placeholder="Your Email Address"
            className="
              border border-[#E5E5E5] bg-white 
              w-full h-full rounded-full 
              py-[0.875rem] px-[1.5rem] pr-[7rem]
              focus:outline-none focus:ring-2 focus:ring-[#00B207]
            "
          />
          <div className="absolute right-0 top-1/2 -translate-y-1/2">
            <ShopButton
              title="Subscribe"
              icon=""
              bgcolor="bg-[#00B207]"
              textcolor="text-[#ffffff]"
            />
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 justify-center lg:justify-start w-full lg:w-auto">
          <a href="#" aria-label="Facebook">
            <CiFacebook className="h-10 w-10 text-[#1A1A1A] hover:text-[#00B207]" />
          </a>
          <a href="#" aria-label="Twitter">
            <FaTwitter className="h-10 w-10 text-[#1A1A1A] hover:text-[#00B207]" />
          </a>
          <a href="#" aria-label="Pinterest">
            <FaPinterestP className="h-10 w-10 text-[#1A1A1A] hover:text-[#00B207]" />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram className="h-10 w-10 text-[#1A1A1A] hover:text-[#00B207]" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
 