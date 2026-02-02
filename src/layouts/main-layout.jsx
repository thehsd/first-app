import { Outlet } from "react-router";
import Header from "../components/ui/header";

const MainLayout = () => {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
