import Leaf from "../assets/Image/plant 1.jpg";
import { footer } from "../Types/Types";
import { footerData } from "../Utility/Data";

const Footer = () => {
  return (
    <section className="w-full bg-[#1A1A1A]">
      {/* Top Footer Section */}
      <section
        className="
          w-full max-w-[1248px] px-4 lg:px-0 mx-auto pt-16 lg:pt-[3.875rem] 
          flex flex-col lg:flex-row 
          gap-10 lg:gap-[7rem]
        "
      >
        {/* Left - Logo & Description */}
        <div
          className="
            w-full max-w-full lg:max-w-[21rem]
          "
        >
          <div className="flex items-center gap-2">
            <img src={Leaf} alt="Plant Logo" className="h-8 w-8" />
            <h1 className="font-medium text-3xl text-white">Ecobazar</h1>
          </div>
          <p className="font-normal text-sm text-[#808080] pt-4">
            Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
            dui, eget bibendum magna congue nec.
          </p>
          <div className="flex flex-wrap gap-2 pt-4 text-sm">
            <p className="border-b-2 border-[#20B526] text-white font-medium">
              (219) 555-0114
            </p>
            <p className="text-[#808080]">or</p>
            <p className="border-b-2 border-[#20B526] text-white font-medium">
              Proxy@gmail.com
            </p>
          </div>
        </div>

        {/* Right - Footer Links */}
        <div
          className="
            w-full flex flex-wrap gap-10 justify-between 
            lg:justify-start lg:gap-[7rem] lg:flex-nowrap
          "
        >
          {footerData.map((section, index) => (
            <div
              key={index}
              className="
                min-w-[140px] flex-grow 
                lg:flex-grow-0 lg:w-auto
              "
            >
              <h1 className="font-normal text-sm text-white pb-4">
                {section.title}
              </h1>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li
                    key={i}
                    className="text-sm text-gray-400 hover:text-white cursor-pointer"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Footer Section */}
      <section
        className="
          w-full max-w-[1320px] mx-auto px-4 lg:px-0 mt-12 border-t border-[#333333] py-6
          flex flex-col lg:flex-row justify-between items-center
          text-sm text-[#808080]
        "
      >
        <p className="text-center lg:text-left">
          Ecobazar eCommerce © 2021. All Rights Reserved
        </p>
        <div className="flex gap-2 mt-4 lg:mt-0">
          {footer.FooterData.map((item, index) => (
            <img
              key={index}
              src={item.img}
              alt="payment"
              className="w-[45px] h-[32px] object-contain"
            />
          ))}
        </div>
      </section>
    </section>
  );
};

export default Footer;
