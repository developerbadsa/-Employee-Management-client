import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";

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
                      
                  }
            ],
            errorElement: <div>error</div>
      }
])