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
                        element: <Login></Login>

                  },
                  {
                        path: '/register',
                        element: <Registration></Registration>

                  }
            ],
            errorElement: <div>error</div>
      },
       {
            path: '/dashboard',
            element: <Dashboard></Dashboard>,
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
                        element: <EmployeeList></EmployeeList>
                  },
                  {
                        path: '/dashboard/progress',
                        element: <Progress></Progress>
                  },
                  {
                        path: '/dashboard/details/:id',
                        element: <UserDetails></UserDetails>
                  },

                    //Admin Routes
                    {
                        path: '/dashboard/all-employee-list',
                        element: <AllEmployeeList></AllEmployeeList>
                  },
                  

            ]
      },
      
])