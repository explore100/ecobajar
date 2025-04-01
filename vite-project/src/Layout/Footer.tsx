import Leaf from "../assets/Image/plant 1.jpg"
import { footer } from "../Types/Types"


const Footer = () => {
    return (
        <>
            <section className="w-full h-[23rem] bg-[#1A1A1A]">
                <section className="w-[78rem] h-[10.5rem] pt-[3.875rem] mx-[18.75rem] gap-[7rem] flex ">
                    <div className="gap-[1rem]  w-[21rem] h-[10.375rem]">
                        <div className="flex items-center gap-2">
                            <img src={Leaf} alt="Plant Logo" className="h-8 w-8 " />
                            <h1 className="font-medium text-3xl text-[#fff]">Ecobazar</h1>
                        </div>
                        <p className="font-normal text-sm pt-[1rem] text-[#808080]">Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.</p>
                        <span className="flex gap-[1rem] pt-[1rem]">
                            <p className="border-b-2 border-b-[#20B526] font-medium text-sm text-[#FFFFFF]">(219) 555-0114</p>
                            <p className="text-[#808080] font-normal text-base">or</p>
                            <p className="border-b-2 border-b-[#20B526] font-medium text-sm text-[#FFFFFF]">Proxy@gmail.com</p>
                        </span>
                    </div>
                  
                        <div className=" w-[5.9375rem] h-[10.25rem] ">
                            <h1 className="font-normal text-sm text-[#ffffff] pb-[1.5rem]">My Account</h1>
                            <ul className="">
                                <li className="text-sm text-[#999999]">My Account</li>
                                <li className="text-sm text-[#999999]">Order History</li>
                                <li className="text-sm text-[#FFFFFF]">Shopping Cart</li>
                                <li className="text-sm text-[#999999]">Wishlist</li>
                            </ul>
                        </div>
                        <div className=" w-[8.125rem] h-[10.25rem]">
                            <h1 className="font-normal text-sm text-[#ffffff] pb-[1.5rem]">Helps</h1>
                            <ul className=" gap-[1rem]">
                                <li className="text-sm text-[#999999]">Contact</li>
                                <li className="text-sm text-[#999999]">Faqs</li>
                                <li className="text-sm text-[#999999]">Terms & Condition</li>
                                <li className="text-sm text-[#999999]">Privacy Policy</li>
                            </ul>
                        </div>
                        <div className=" w-[5.125rem] h-[10.25rem]">
                            <h1 className="font-normal text-sm text-[#ffffff] pb-[1.5rem]">Proxy</h1>
                            <ul className=" gap-[1rem]">
                                <li  className="text-sm text-[#999999]">About</li>
                                <li  className="text-sm text-[#999999]">Shop</li>
                                <li  className="text-sm text-[#999999]">Product</li>
                                <li  className="text-sm text-[#999999]">Track Order</li>
                            </ul>
                        </div>
                        <div className=" w-[8rem] h-[10.25rem]">
                            <h1 className="font-normal text-sm text-[#ffffff] pb-[1.5rem]">Categories</h1>
                            <ul className=" gap-[1rem]">
                                <li className="text-sm text-[#999999]">Fruit & Vegetables</li>
                                <li className="text-sm text-[#999999]">Meat & Fish</li>
                                <li className="text-sm text-[#999999]">Bread & Bakery</li>
                                <li className="text-sm text-[#999999]">Beauty & Health</li>
                            </ul>
                        </div>
                </section>
                <section className="w-[82.5rem] h-[5rem] text-[#808080] mt-[3.75rem] mx-[18.75rem] flex justify-between items-center border-t-2 border-[#333333]">
                    <h1 className="">Ecobazar eCommerce © 2021. All Rights Reserved</h1>
                    <div className="flex gap-[0.5rem]">
                        {
                            footer.FooterData.map((item, index) => (
                                <div key={index}>
                                    <img src={item.img} className="w-[2.8125rem] h-[2rem]" />
                                </div>
                            ))
                        }
                    </div>
                </section>
            </section>
        </>
    )
}

export default Footer