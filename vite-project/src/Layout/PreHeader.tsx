import { CiLocationOn } from "react-icons/ci";
import { preHeaderdata } from "../Utility/Data";


const PreHeader = () => {
    return (
        <>
            <section className="h-[42px] w-full my-[13px] font-normal text-xs flex justify-evenly items-center gap-[773px]">
                <div className="flex items-center gap-2 ml-12">
                    <CiLocationOn className="h-4 w-4" />
                    <span>{preHeaderdata?.title}</span>
                </div>
                <div className="flex items-center gap-5 text-[#666666] font-normal text-xs">
                    <div className="border-r-4  pr-4">
                        <select className="cursor-pointer">
                        <option value="language">Eng</option>
                    </select>
                    <select className="cursor-pointer">
                        <option value="currency">USD</option>
                    </select>
                    </div>
                    <button className="cursor-pointer">Sign In / Sign Up</button>
                </div>
            </section>
            
        </>
    )
}

export default PreHeader