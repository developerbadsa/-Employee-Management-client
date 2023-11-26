import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Dashboard from "../Pages/Dashboard/Dashboard";
import DashboardLayout from "../Layout/DashboardLayout";

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
                        element: 'employyee list'
                  },
                  {
                        path: 'dashboard//details/:email',
                  },
                  

            ]
      },
      
])