import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Dashboard from "../Pages/Dashboard/Dashboard";

export const router = createBrowserRouter([
      {
            path: '/',
            element: <MainLayout></MainLayout>,
            children:[
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
                      
                  },
                  {
                        path: '/dashboard',
                        element: <Dashboard></Dashboard>
                      
                  }
            ],
            errorElement: <div>error</div>
      }
])