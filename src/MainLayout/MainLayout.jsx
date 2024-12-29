import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const location = useLocation();

  useEffect(() => {
    let title = "Gadget Heaven";

    
    if (location.pathname.includes("/dashboard")) {
      title = "Dashboard | Gadget Heaven";
    } else if (location.pathname.includes("/product")) {
      title = "Details | Gadget Heaven";
    } else if (location.pathname.includes("/contact")) {
      title = "Contact | Gadget Heaven";
    } else if (location.pathname.includes("/categories")) {
      title = "Category | Gadget Heaven";
    }

    document.title = title; 
  }, [location]);

  return (
    <>
      <Toaster />

      <Navbar />
      
      <div className="min-h-[calc(100vh-288px)] pb-12 w-full">
        <Outlet />
      </div>

      <Footer />
    </>
  );
};

export default MainLayout;
