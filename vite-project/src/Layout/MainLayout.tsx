import { NavLink, Outlet } from "react-router"
import PreHeader from "./PreHeader"
import { MdOutlineWifiCalling3 } from "react-icons/md";
import Heade from "./Heade";
import Footer from "./Footer";
import Subscribe from "./Subscribe";






const MainLayout = () => {
    return (
        <>
            <PreHeader />
            <Heade/>
            <header>
                <nav className="h-[60px] w-full bg-[#333333] text-[#999999] flex justify-between items-center px-[300px]">
                    <ul className="flex gap-8 items-center font-medium text-sm ">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/Shop'>Shop</NavLink></li>
                        <li><NavLink to='/page'>Page</NavLink></li>
                        <li><NavLink to='/Blog'>Blog</NavLink></li>
                        <li><NavLink to='/About us'>About Us</NavLink></li>
                        <li><NavLink to='/Contact Us'>Contact Us</NavLink></li>
                    </ul>
                    <div className="flex items-center gap-2 text-[#FFFFFF]">
                        <MdOutlineWifiCalling3 className="h-7 w-7" />
                        <span>(219) 555-0114</span>
                    </div>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            <Subscribe/>
            <Footer/>
        </>
    )
}

export default MainLayout