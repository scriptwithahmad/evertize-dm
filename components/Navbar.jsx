import Link from "next/link";
import { useUser } from "@/UserContext";
import { useState, useEffect, useContext } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { useRouter } from "next/router";
import Image from "next/image";
import Cookies from "js-cookie";

const NavLinks = [
  {
    name: "Home",
    link: "/",
  },

  {
    name: "About",
    link: "/about",
  },

  {
    name: "Services",
    link: "/myservices",
  },

  {
    name: "Team",
    link: "/team",
  },

  {
    name: "Testimonials",
    link: "/testimonials",
  },

  {
    name: "Contact",
    link: "/contact",
  },
];
const ContectLinks = [
  {
    name: "Home",
    link: "/",
  },

  {
    name: "About",
    link: "/about",
  },

  {
    name: "Services",
    link: "/myservices",
  },

  {
    name: "Team",
    link: "/team",
  },

  {
    name: "Testimonials",
    link: "/testimonials",
  },

  {
    name: "Contact",
    link: "/contact",
  },
  {
    name: "Register",
    link: "/register",
  },
  {
    name: "Login",
    link: "/login",
  },
];

const Navbar = () => {
  const { user, logout } = useUser();
  // console.log(user)
  const Router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    const cookie = Cookies.get("AccessToken");
    // console.log(cookie)
    Cookies.remove("cookie");
    logout();
  };

  useEffect(() => {
    if (isOpen) {
      window.document.body.style.overflow = "hidden";
    } else {
      window.document.body.style.overflow = "visible";
    }
  }, [isOpen]);

  const [showModel, setShowModel] = useState(false);

  const handleModel = () => {
    setShowModel(!showModel);
  };

  return (
    <div>
      <nav className={`navbar relative ${isOpen ? "open" : ""}`}>
        <div className="nav-left">
          <div className="logo">
            <img src="/logo.png" alt="" />
          </div>

          <ul className={`nav-links ${isOpen ? "open" : ""}`}>
            {user
              ? NavLinks?.map((v, i) => (
                  <li key={i}>
                    <Link
                      className={Router.pathname === v.link ? "active" : ""}
                      style={{
                        color:
                          Router.pathname === v.link ? "#FA7909" : "#dadada",
                      }}
                      href={v.link}
                    >
                      {v.name}
                    </Link>
                  </li>
                ))
              : ContectLinks?.map((v, i) => (
                  <li key={i}>
                    <Link
                      className={Router.pathname === v.link ? "active" : ""}
                      style={{
                        color:
                          Router.pathname === v.link ? "#FA7909" : "#dadada",
                      }}
                      href={v.link}
                    >
                      {v.name}
                    </Link>
                  </li>
                ))}

            <li>
              <Link href="/register" className="apllyBtnMobileRes">
                Contact us
              </Link>
            </li>
          </ul>
        </div>

        <OutsideClickHandler
          onOutsideClick={() => {
            setIsOpen(false);
          }}
        >
          <div></div>
        </OutsideClickHandler>

        <div className="menu-icon" onClick={toggleNavbar}>
          <div className={`bar ${isOpen ? "open" : ""}`} />
          <div className={`bar ${isOpen ? "open" : ""}`} />
          <div className={`bar ${isOpen ? "open" : ""}`} />
        </div>

        <div className={`slider ${isOpen ? "open" : ""}`} />
        {/* Profile start  */}
        <div className="flex items-center gap-2">
          {user ? (
            <div className="flex items-center gap-2 leading-4">
              <Image
                height={60}
                width={60}
                className="w-12 h-12 object-cover rounded-full cursor-pointer"
                src={user.image}
                alt="img here"
                onClick={handleModel}
              ></Image>
              <div className="text-white capitalize">
                <h3> {user?.name} </h3>
                <span
                  className="text-xs hover:text-[#E77918] transition-all cursor-pointer"
                  onClick={handleLogout}
                >
                  Logout
                </span>
              </div>
            </div>
          ) : (
            <div className="applyBtn">
              <Link href="/register" className="apllyBtn">
                Contact us
              </Link>
            </div>
          )}
        </div>
        {/* PROFILE MODEL ============================*/}
        <div
          style={{
            visibility: showModel ? "visible" : "hidden",
            opacity: showModel ? "1" : "0",
            transition: ".5s",
          }}
          className="IShadow w-fit absolute right-[5%] top-[90%] bg-white overflow-hidden rounded-md bottom-14 h-fit"
        >
          <ul className="px-3 py-4">
            <li className="flex flex-col gap-2">
              <Link
                className="text-xs text-gray-600"
                href="https://evertize.vercel.app/dashboard"
              >
                Dashboard
              </Link>
              <Link className="text-xs text-gray-600" href="/">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
