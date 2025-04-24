import { NavLink, Outlet } from "react-router";
import ImageDeat from "./ImageDeat";

const RoutingLayout = () => {
  return (
    <>
      <ImageDeat />
      <header>
        <nav className=" w-full h-[56px] text-[#808080] border-b-2 ">
          <ul className="flex mx-[689px] items-center justify-between p-[16px]  hover:text-[#1A1A1A]">
            <li>
              <NavLink to="descriptions">Descriptions</NavLink>
            </li>
            <li>
              <NavLink to="additionalinformation">
                Additional Information
              </NavLink>
            </li>
            <li>
              <NavLink to="customerfeedback">Customer Feedback</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RoutingLayout;
