import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";

import Classic from "../Pages/OurClasses/AllDanceClass";
import Ballet from "../Pages/OurClasses/Ballet";
import AllDanceClass from "../Pages/OurClasses/AllDanceClass";


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
                element: <AllDanceClass></AllDanceClass>,
            },
            
            // {
            //     path: '/classes',
            //     element: <Ballet></Ballet>,
            // },
            

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