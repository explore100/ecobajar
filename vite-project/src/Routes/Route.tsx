import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Shop from "../Pages/Shop";
import Pages from "../Pages/Pages";
import Blog from "../Pages/Blog";
import AboutUs from "../Pages/AboutUs";
import ContactUs from "../Pages/ContactUs";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/Home',
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
            }
        ],

    },
]);