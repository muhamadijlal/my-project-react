import { Outlet } from "react-router";
import Header from "@/ui/Header";
import Footer from "@/ui/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="mt-16 px-4 tablet:px-8 laptop:px-16">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
