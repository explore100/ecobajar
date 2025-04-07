import { latestnewz } from "../Types/Types"
import { GoTag } from "react-icons/go";
import { IoPersonOutline } from "react-icons/io5";
import { FaRegCommentAlt } from "react-icons/fa";
import ShopButton from "../Ui/ShopButton";
import { FaArrowRight } from "react-icons/fa6";



const Latest = () => {
  return (
    <>
    <section className="w-[82.5rem] h-[35.25rem] mx-[18.75rem] my-[3.75rem] ">
      <h1 className="flex justify-center items-center font-semibold text-3xl">Latest News</h1>
      <div className="flex gap-[1.5rem] pt-[32px]">
        {
          latestnewz.LatestNewsData.filter((item) => [50, 51, 52]. includes(item.id)).map((item) =>(
            <div key={item.id} className="relative">
              <img src={item.img} className="w-[26.5rem] h-[20.25rem] " />
              <div className="bg-[#FFFFFFD9] w-[3.625rem] px-[1rem] py-[0.375rem] h-[3.625rem] absolute top-[15.125rem] left-[1.5rem] rounded-md">
                <p className="font-medium text-xl">29</p>
                <h4 className="uppercase font-medium text-xs">jan</h4>
              </div>
              <div className=" h-[10.625rem] w-[26.5rem]  px-[1.5rem] pt-[1.5rem] border rounded-b-lg shadow-md " >
                <div className="flex  gap-[1rem] font-normal text-sm text-[#4D4D4D]">
                <h2 className="flex items-center  gap-[0.25rem]"><GoTag/>{item.titleA}</h2>
                <h2 className="flex items-center  gap-[0.25rem]"><IoPersonOutline/>{item.titleB}</h2>
                <h2 className="flex items-center  gap-[0.25rem]"><FaRegCommentAlt/>{item.titleC}</h2>
                </div>
                <p className="pt-[0.5rem] text-[#2C742F] font-medium text-lg">{item.subtitle}</p>
                <ShopButton 
                        title="Read More"
                        icon={<FaArrowRight />}
                        bgcolor="" // Tailwind bg color
                        textcolor="text-[#00B207]" />
              </div>
         
            </div>
          ))
        }
          </div>
    </section>
    </>
  )
}

export default Latest