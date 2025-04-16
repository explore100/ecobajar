
import { IoFilter } from "react-icons/io5";
import CartProd from "./CartProd";
import Category from "./Category";


const Filter = () => {
  return (
    <>
    <section className='h-[137.5rem] w-[82.5rem] mt-[2rem] mx-[18.75rem]'>
        <div className='w-[82.3125rem] h-[2.8125rem] flex items-center justify-between '>
            <div className="w-[8.1875rem] h-[2.8125rem]">
                <button className='bg-[#00B207] py-[14px] px-[32px] flex items-center gap-[0.75rem] rounded-full text-sm font-semibold text-[#FFFFFF]'>Filter<IoFilter/></button>
            </div>
            <div className="w-[226px] h-[41px] flex justify-center items-center gap-[0.5rem]">
                <h1 className="font-normal text-sm text-[#808080]">sort by :</h1>
                <div className=" ">
                    <select name="Latest" className="w-[10.375rem] h-[2.5625rem] px-[1rem] border rounded py-[0.625rem]" >
                        <option value="Latest">Latest</option>
                    </select>
                </div>
            </div>
            <div className="w-[8.375rem] h-[1.5rem] ">
            <h1 className="font-semibold text-base">52<span className="text-[#808080] font-normal text-base">Results Found</span></h1>
            </div>
        </div>
        <section className="flex">
            <Category/>
            <CartProd/>
            
        </section>
    </section>
    </>
  )
}

export default Filter