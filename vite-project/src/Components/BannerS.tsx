import ShopButton from "../Ui/ShopButton";
import { bannerproduct } from "../Types/Types"
import { FaArrowRight } from "react-icons/fa6";




const BannerS = () => {

  return (
    <>
      <section className="w-[82.5rem] h-[33.5rem] mx-[18.75rem] my-[3.75rem] flex gap-[1.5rem]">
        {
          bannerproduct.BannerProductData.filter((item) => [40, 41, 42].includes(item.id)).map((item) => (
            <div key={item.id} className="relative">
              <img src={item.img} className="w-[26.5rem] h-[33.5rem]" />
              <div className="absolute top-0 left-0 w-full h-full flex flex-col mt-[2.1875rem] items-center gap-[16px]  text-white p-4">
                <h2 className={`text-base font-medium uppercase ${item.id === 42 ? 'text-black' : ''}`}>{item.subtitle}</h2>
                <h1 className={`text-4xl font-semibold ${item.id === 42 ? 'text-black' : ''}`}>{item.title}</h1>

                {item.id === 40 && (
                  <div className="w-[18.125rem] h-[3.25rem] pt-[0.5rem] flex justify-center" id="sagar">
                    <div className="w-[3.5rem] h-[3.25rem] text-center">
                      <p className="font-normal text-2xl">00</p>
                      <h1 className="text-xs text-[#FFFFFFCC] uppercase">days</h1>
                    </div>
                    <div className="w-[3.5rem] h-[3.25rem] text-center">
                      <p className="font-normal text-2xl">00</p>
                      <h1 className="text-xs text-[#FFFFFFCC]  uppercase">hours</h1>
                    </div>
                    <div className="w-[3.5rem] h-[3.25rem] text-center">
                      <p className="font-normal text-2xl">00</p>
                      <h1 className="text-xs text-[#FFFFFFCC]  uppercase">mins</h1>
                    </div>
                    <div className="w-[3.5rem] h-[3.25rem] text-center">
                      <p className="font-normal text-2xl">00</p>
                      <h1 className="text-xs text-[#FFFFFFCC]  uppercase">secs</h1>
                    </div>
                  </div>
                )}
                <p className="text-xl font-semibold ">
                  {item.id === 41 ? (
                    <span className="text-white">Started at</span>
                  ) : item.id === 42 ? (
                    <span className="text-black">Up to</span>
                  ) : (
                    ""
                  )}

                  {/* Conditional Rendering for Price */}
                  {item.id === 42 ? (
                    <span className="bg-black text-[#FCC900] px-2 py-1 rounded  ml-2">
                      {item.price}
                    </span>
                  ) : item.id === 41 ? (
                    <span className="text-orange-500 ml-2">{item.price}</span>
                  ) : (
                    ""
                  )}
                </p>
                <ShopButton
                  title="Shop Now"
                  icon={<FaArrowRight />}
                  bgcolor="bg-white" // Tailwind bg color
                  textcolor="text-[#00B207]" // Tailwind text color
                />


              </div>
            </div>
          ))
        }
      </section>
    </>
  )
}

export default BannerS