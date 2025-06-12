import data from "../Types/Types";
import Deals from "./Deals";
import ViewButton from "../Ui/VIewButton";

const Item = () => {
  return (
    <>
      <section
        className="
          w-full max-w-[82.5rem] mx-auto xl:mx-[18.75rem] mt-[3.75rem] px-4 sm:px-6 xl:px-0
        "
      >
        <div className="flex justify-between items-center h-[2.375rem]">
          <h1 className="font-semibold text-3xl">Popular Categories</h1>
          <ViewButton />
        </div>

        <div className="flex flex-wrap gap-6 mt-[2rem] justify-center xl:justify-start">
          {data.CardData.map((item, index) => (
            <div
              key={index}
              className="border border-[#E5E5E5] rounded-[0.3125rem] transition-all duration-300  hover:border-green-600 h-[13.3125rem] 
                xl:w-[12.5rem] w-[45%] sm:w-[30%] md:w-[22%] flex-shrink-0 flex flex-col items-center "
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-[11.875rem] h-[8.125rem] mt-[1rem] object-contain"
              />
              <div className="w-full h-[1.6875rem] mt-[1rem] flex justify-center">
                <h1 className="font-medium text-lg">{item.title}</h1>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Deals />
    </>
  );
};

export default Item;
