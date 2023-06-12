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


import ErrorPage from "../Pages/Errorpage/ErrorPage";
import AdminRoute from "./AdminRoute";
import StudentRoute from "./StudentRoute";
import InstructorRoute from "./InstructorRoute";
import AddClass from "../Pages/Dashboard/Instructor/AddClass";
import PendingClass from "../Pages/Dashboard/Instructor/PendingClass";
import SelectedClass from "../Pages/Dashboard/Student/SelectedClass";
import AllUsers from "../Pages/Dashboard/Admin/AllUsers";
import ManageClasses from "../Pages/Dashboard/Admin/ManageClasses";
import Payment from "../Pages/Dashboard/Student/Payment";


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
            //  Student Routes
            {
                path: '/dashboard/selectedclasses',
                element: <StudentRoute><SelectedClass></SelectedClass></StudentRoute>
            },
            {
                path: '/dashboard/payment',
                element: <StudentRoute><Payment></Payment></StudentRoute>
            },
            // Admin routes
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/addedclasses',
                element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
            },
            // Instructor routes
            {
                path: '/dashboard/addclass',
                element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
            },
            {
                path: '/dashboard/pendingclasses',
                element: <InstructorRoute><PendingClass></PendingClass></InstructorRoute>
            },
        ]

    }
]);