import { insta } from "../Types/Types";
import { FaInstagram } from "react-icons/fa6";

const Insta = () => {
  return (
    <section className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 xl:px-0 py-10">
      {/* Title */}
      <h1 className="font-semibold text-xl sm:text-2xl lg:text-3xl text-center">
        Follow us on Instagram
      </h1>

      {/* Image Container */}
      <div className="mt-8 flex flex-wrap justify-center lg:justify-between gap-4 sm:gap-6">
        {insta.InstagramPicData.map((item, index) => (
          <div
            key={index}
            className="relative w-[8rem] sm:w-[10rem] md:w-[11rem] lg:w-[12.5rem] h-[8rem] sm:h-[10rem] md:h-[11rem] lg:h-[12.5rem] group rounded-xl overflow-hidden"
          >
            <img
              src={item.img}
              alt={`Instagram ${index + 1}`} 
            //``  allowing you to embed variables or expressions inside a string.${index + 1}: Injects the current index (plus 1) of the image in the loop, so the first image is "Instagram 1", the second is "Instagram 2", etc. 
              className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80"
            />
            <FaInstagram className="absolute inset-0 m-auto text-white text-2xl sm:text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Insta;
