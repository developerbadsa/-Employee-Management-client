import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Dashboard from "../Pages/Dashboard/Dashboard";
import DashboardLayout from "../Layout/DashboardLayout";
import EmployeeList from "../Pages/Dashboard/EmployeeList/EmployeeList";
import UserDetails from "../Pages/UserDetails/UserDetails";
import Progress from "../Pages/Dashboard/Progress/progress";

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
                        element: 'home'
                  },
                  {
                        path: '/dashboard/work-sheet',
                        element: 'emplyee'
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
                  

            ]
      },
      
])