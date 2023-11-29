import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Dashboard from "../Pages/Dashboard/Dashboard";
import EmployeeList from "../Pages/Dashboard/HR/EmployeeList/EmployeeList";
import UserDetails from "../Pages/UserDetails/UserDetails";
import Progress from "../Pages/Dashboard/HR/Progress/progress";
import PaymentHistory from "../Pages/Dashboard/Employee/PaymentHistory/PaymentHistory";
import WorkSheet from "../Pages/Dashboard/Employee/WorkSheet";
import AllEmployeeList from "../Pages/Dashboard/Admin/AllEmployeeList";
import ErrorPage from "../Pages/ErrorPage";
import LoggedOutPrivate from "./PrivateRoute/LoggedInPrivate/LoggedOutPrivate";
import LoggedInPrivate from "./PrivateRoute/LoggedInPrivate/LoggedInPrivate";
import AdminPrivate from "./PrivateRoute/AdminPrivate/AdminPrivate";
import HRPrivate from "./PrivateRoute/HRPrivate/HRPrivate";

export const router = createBrowserRouter([
      {
            path: '/',
            element: <MainLayout></MainLayout>,
            children: [
                  {
                        path: '/',
                        element: <Home></Home>

                  },
                  {
                        path: '/contact',
                        element: <Contact></Contact>

                  },
                  {
                        path: '/login',
                        element:<LoggedOutPrivate> <Login></Login> </LoggedOutPrivate>

                  },
                  {
                        path: '/register',
                        element: <Registration></Registration>

                  }
            ],
            errorElement:<ErrorPage></ErrorPage>
      },
       {
            path: '/dashboard',
            element: <LoggedInPrivate><Dashboard></Dashboard> </LoggedInPrivate>,
            errorElement: <ErrorPage></ErrorPage>,
            children:[

                  //Employye Routes
                  {
                        path: '/dashboard/payment-history',
                        element: <PaymentHistory></PaymentHistory>
                  },
                  {
                        path: '/dashboard/work-sheet',
                        element: <WorkSheet></WorkSheet>
                  },


                  //HR Routes
                  {
                        path: '/dashboard/employee-list',
                        element: <HRPrivate> <EmployeeList></EmployeeList></HRPrivate>
                  },
                  {
                        path: '/dashboard/progress',
                        element: <HRPrivate><Progress></Progress></HRPrivate>
                  },
                  {
                        path: '/dashboard/details/:id',
                        element:<HRPrivate> <UserDetails></UserDetails></HRPrivate>
                  },

                    //Admin Routes
                    {
                        path: '/dashboard/all-employee-list',
                        element: <AdminPrivate><AllEmployeeList></AllEmployeeList></AdminPrivate>
                  },
                  

            ]
      },
      
])