import { Outlet } from "react-router-dom";


const MainLayout = () => {
      return (
            <div>
                  header
                  <Outlet></Outlet>
                  footer
            </div>
      );
};

export default MainLayout;