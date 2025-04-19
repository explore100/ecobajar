import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Shop from "../Pages/Shop";
import Pages from "../Pages/Pages";
import Blog from "../Pages/Blog";
import AboutUs from "../Pages/AboutUs";
import ContactUs from "../Pages/ContactUs";
import CartProduct from "../Pages/CartProduct";
import CheckOut from "../Pages/CheckOut";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/Shop',
                element: <Shop />,
            },
            {
                path: 'Page',
                element: <Pages />,
            },
            {
                path: 'Blog',
                element: <Blog />,
            },
            {
                path: 'About Us',
                element: <AboutUs />,
            },
            {
                path: 'Contact Us',
                element: <ContactUs />,
            },
            {
                path: 'Cart',
                element: <CartProduct />,
            },
            {
                path: 'CheckOut',
                element: <CheckOut/>
            }
        ],

    },
]);