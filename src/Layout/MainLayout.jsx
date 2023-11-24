import { Outlet } from "react-router-dom";
import { Header } from "../Components/Header/Header";
import { Footer } from "../Components/Header/Footer/Footer";


const MainLayout = () => {
      return (
            <>
                  <Header></Header>
                  <Outlet></Outlet>
                  <Footer></Footer>

            </>
      );
};

export default MainLayout;