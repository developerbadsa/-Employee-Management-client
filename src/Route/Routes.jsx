import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";

export const router = createBrowserRouter([
      {
            path: '/',
            element: <MainLayout></MainLayout>,
            children:[
                  {
                        path: '/',
                        element: 'dfd'
                  }
            ],
            errorElement: <div>error</div>
      }
])