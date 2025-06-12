import { useState } from "react";
import { NavLink, Outlet } from "react-router";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import PreHeader from "./PreHeader";
import Heade from "./Heade";
import Subscribe from "./Subscribe";
import Footer from "./Footer";

const MainLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <PreHeader />
      <Heade />

      {/* Navigation Bar */}
      <header>
        <nav className="w-full bg-[#333333] text-[#999999] px-4 md:px-12 lg:px-[300px] py-3">
          {/* Top Section: Menu Toggle + Phone (flexed on small, hidden on lg) */}
          <div className="flex justify-between items-center lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white text-2xl"
              aria-label="Toggle Menu"
            >
              <HiOutlineMenuAlt3 />
            </button>
            <div className="flex items-center gap-2 text-white">
              <MdOutlineWifiCalling3 className="h-6 w-6" />
              <span className="text-sm">(219) 555-0114</span>
            </div>
          </div>

          {/* Nav Links - Responsive */}
          <div
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } flex-col lg:flex lg:flex-row lg:justify-between lg:items-center mt-4 lg:mt-0`}
          >
            {/* Nav Items */}
            <ul className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-start lg:items-center font-medium text-sm">
              <li><NavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink></li>
              <li><NavLink to="/Shop" onClick={() => setIsMenuOpen(false)}>Shop</NavLink></li>
              <li><NavLink to="/page" onClick={() => setIsMenuOpen(false)}>Page</NavLink></li>
              <li><NavLink to="/Blog" onClick={() => setIsMenuOpen(false)}>Blog</NavLink></li>
              <li><NavLink to="/About us" onClick={() => setIsMenuOpen(false)}>About Us</NavLink></li>
              <li><NavLink to="/Contact Us" onClick={() => setIsMenuOpen(false)}>Contact Us</NavLink></li>
              
            </ul>

            {/* Contact (for large screens only) */}
            <div className="hidden lg:flex items-center gap-2 text-white">
              <MdOutlineWifiCalling3 className="h-6 w-6" />
              <span className="text-sm">(219) 555-0114</span>
            </div>
          </div>
        </nav>
      </header>

      {/* Dynamic Page Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer Sections */}
      <Subscribe />
      <Footer />
    </>
  );
};

export default MainLayout;
