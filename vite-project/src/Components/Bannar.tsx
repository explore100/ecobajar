import banner1 from '../assets/Image/main-removebg-preview.png'
import { FaArrowRight } from "react-icons/fa6";
import banner2 from '../assets/Image/BG.png';
import banner3 from '../assets/Image/green.png';
import ShopButton from '../Ui/ShopButton';

const Bannar = () => {
    return (
        <section className='w-[82.4375rem] h-[37.5rem] mx-[18.75rem] my-[1.5rem] flex gap-64  '>
          

            <div className='w-[54.5rem] h-[37.5rem]'>
                <img src={banner1} alt="" className='w-[54.5rem] h-[37.5rem] rounded-lg bg-gradient-to-r from-green-950 to-green-400 absolute' />
                <div className='w-[37.25rem] h-[18.125rem] relative top-[9.6875rem] left-[3.75rem] gap-[1.75rem] '>
                    <h1 className='font-semibold text-5xl text-[#FFFFFF]'> Fresh & Healthy <br /> Organic Food</h1>
                    <div className='border-l-2 pl-[0.75rem] my-[1.75rem] '>
                        <div className='  flex gap-[0.5rem] text-[#FFFFFF]'>
                            <h1 className='font-medium text-xl '>Sale up to</h1>
                            <span className='font-semibold text-xl  bg-[#FF8A00] px-[0.75rem] py-[0.25rem] rounded-md'>30% OFF</span>
                        </div>
                        <p className='font-normal text-base mt-[0.5rem] text-[#808080] '>Free shipping on all your order.</p>
                    </div>
                <ShopButton title='Shop Now' icon={<FaArrowRight/>} />
                </div>
            </div>
            <div className='grid grid-rows-2  gap-[1.5rem] mr-[1.5rem]'>
                <div>
                    <img src={banner2} className='h-[18rem] w-[26.4375rem] absolute' />
                    <div  className='h-[8.5rem] w-[9.75rem] relative top-[2rem] left-[2rem]'>
                        <h2 className='font-medium text-sm uppercase'>summer sale</h2>
                        <h1 className='font-semibold pt-[0.5rem] text-4xl'>75% OFF</h1>
                        <p className='font-normal text-sm pt-[0.75rem] text-[#666666]'>Only Fruit & Vegetable</p>
                        <button className='flex items-center font-semibold text-base pt-[1.5rem] gap-[0.75rem] text-[#00B207]'>Shop Now <FaArrowRight/></button>
                    </div>
                </div>
                <div>
                    <img src={banner3} alt=""  className='h-[18rem] w-[26.4375rem] absolute'  />
                    <div className='relative h-[9.5625rem] w-[21.4375rem]  left-[2.5rem] px-[2.5rem] py-[4.1875rem]'>
                        <div className='text-[#FFFFFF] '>
                        <h3 className='uppercase font-medium text-sm'>Best deal</h3>
                        <h1 className='font-semibold text-3xl '>Special Products <br/> Deal of the Month </h1>
                        </div>
                        <button className='flex  items-center font-semibold text-base  pt-[2rem] gap-[0.75rem] text-[#00B207]'>Shop Now <FaArrowRight/></button>
                    </div>
                </div>

            </div>
 
        </section>
    )
}

export default Bannar