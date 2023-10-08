import React from "react";
import Particles from "./Particles";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import Aside from "./Aside";

const Layout = ({ children }) => {
  var { pathname } = useRouter();

  var privateRoutes = [
    "/dashboard",
    "/dashboard/users",
    "/dashboard/enquiries",
    "/dashboard/offer-services",
    "/dashboard/teams",
    "/dashboard/addservice",
    "/dashboard/categories",
  ];

  return (
    <div>
      {privateRoutes.includes(pathname) ? (
        <div className="flex min-h-[100vh] max-h-full overflow-hidden">
          <Aside />
          <div className=" overflow-auto flex-1">
            {children}
            <Toaster />
          </div>
        </div>
      ) : (
        <div>
          <Particles />
          <Toaster />
          <div>
            <Navbar />
            <div className="relative isolate overflow-hidden">{children}</div>
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
