import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AllDanceClass from "../Pages/OurClasses/AllDanceClass";
import Enroll from "../Pages/EnrollClass/Enroll";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../Layout/DashboardLayout";
import SelectedClass from "../Pages/Dashboard/SelectedClass";
import AllUsers from "../Pages/Dashboard/AllUsers";
import ErrorPage from "../Pages/Errorpage/ErrorPage";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
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
                path: '/dashboard/selectedclasses',
                element: <SelectedClass></SelectedClass>
            },
            {
                path: '/dashboard/allusers',
                element: <AllUsers></AllUsers>
            },
        ]

    }
]);