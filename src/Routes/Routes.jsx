import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main";
import Header from "../Pages/Shared/Header";
import Home from "../Pages/Home/Home/Home";

import Classic from "../Pages/OurClasses/Classic";
import Ballet from "../Pages/OurClasses/Ballet";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [

            {
                path: '/',
                element: <Home></Home>,
            }, 
            
            {
                path: '/classes',
                element: <Classic></Classic>,
            },
            
            {
                path: '/classes',
                element: <Ballet></Ballet>,
            },
            

            // {
            //     path: '/',
            //     element: <Home></Home>,
            // },
            // {
            //     path: '/menu',
            //     element: <Menu></Menu>,
            // },
            // {
            //     path: '/order/:category',
            //     element: <Order></Order>,
            // },
            // {
            //     path: '/login',
            //     element: <Login></Login>,
            // },
            // {
            //     path: '/signup',
            //     element: <SignUp></SignUp>,
            // },
            // {
            //     path: '/secret',
            //     element: <PrivateRoute><Secret></Secret></PrivateRoute>,
            // },
        ],

    },
]);