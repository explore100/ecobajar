import { insta } from "../Types/Types"
import { FaInstagram } from "react-icons/fa6";


const Insta = () => {
    return (
        <>
            <section className="w-[82.5rem] h-[270px] mx-[18.75rem]">
                <h1 className="font-semibold text-3xl flex items-center justify-center ">Follow us on Instagram</h1>
                <div className="flex gap-[24px] mt-[2rem]">
                    {
                        insta.InstagramPicData.map((item, index) => (
                            <div key={index} className="relative w-[12.5rem] h-[12.5rem] group">

                                <img
                                    src={item.img}
                                    className="w-full h-full object-cover hover:opacity-80 rounded-xl"
                                />

                                <FaInstagram
                                    className="absolute inset-0 m-auto text-white text-3xl opacity-0 group-hover:opacity-100 duration-300"
                                />
                            </div>

                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default Insta