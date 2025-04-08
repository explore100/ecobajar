import { RxCross1 } from "react-icons/rx";


const Filter = () => {
    return (
        <section className="w-full h-[7.375rem] mt-[2.5rem]">
            <div className="w-full h-[2.5625rem] flex justify-evenly">
                <div className=" flex gap-[1rem]">

                    <select className="cursor-pointer w-[11.125rem] h-[2.5625rem] rounded-md border-[0.0625rem] pl-[0.625rem] py-[0.5rem]">
                        <option value="currency">Select Category</option>
                    </select>


                    <select className="cursor-pointer w-[11.125rem] h-[2.5625rem] rounded-md border-[0.0625rem] pl-[0.625rem] py-[0.5rem]">
                        <option value="currency">Select Price</option>
                    </select>


                    <select className="cursor-pointer w-[11.125rem] h-[2.5625rem] rounded-md border-[0.0625rem] pl-[0.625rem] py-[0.5rem]">
                        <option value="currency">Select Rating</option>
                    </select>

                </div>
                <div className="flex gap-[1rem]">

                    <select className="cursor-pointer w-[11.125rem] h-[2.5625rem] rounded-md border-[0.0625rem] pl-[0.625rem] py-[0.5rem]">
                        <option value="currency">Sort by: Latest</option>
                    </select>

                    <select className="cursor-pointer w-[11.125rem] h-[2.5625rem] rounded-md border-[0.0625rem] pl-[0.625rem] py-[0.5rem]">
                        <option value="currency">Show: 16</option>
                    </select>
                </div>
            </div>
            <div className="flex justify-between items-center px-[18.75rem] mt-6 h-[53px]">
                {/* Left - Active Filters */}
                <div className="flex items-center gap-6">
                    <h1 className="text-[#808080] font-normal text-sm ">Active Filters:</h1>
                    <span className="flex items-center gap-2 px-2 py-1 font-medium text-sm">
                        wing chair <RxCross1 />
                    </span>
                    <span className="flex items-center gap-2  px-2 py-1 font-medium text-sm">
                        min $300 - max $500 <RxCross1 />
                    </span>
                </div>

                {/* Right - Results */}
                <div className="flex items-center text-sm font-medium gap-2">
                    <span>2574</span>
                    <span className="text-[#272343]">results found.</span>
                </div>
            </div>


        </section>
    )
}

export default Filter