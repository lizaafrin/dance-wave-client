import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AllDanceClass from "../Pages/OurClasses/AllDanceClass";
import Enroll from "../Pages/EnrollClass/Enroll";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Pages/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../Layout/DashboardLayout";


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
            {
                path: '/enroll/:category',
                element: <Enroll></Enroll>,
            },
            {
                path: '/login',
                element: <LogIn></LogIn>,
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>,
            },
        ],
    },
    {

        path: '/dashboard',
        element: <PrivateRoute>
            <DashboardLayout></DashboardLayout>
        </PrivateRoute>,
        children:[
            {
                path: '/dashboard/classes',
                element: <Dashboard></Dashboard>
            }
        ]

    }
]);