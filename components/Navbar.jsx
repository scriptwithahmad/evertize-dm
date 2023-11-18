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
];

const Navbar = () => {
  const { user, logout } = useUser();
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
                      className={`Router.pathname === v.link ? "active" : "" `}
                      style={{
                        color: Router.pathname === v.link ? "#FA7909" : "#888",
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
                        color: Router.pathname === v.link ? "#FA7909" : "#888",
                      }}
                      href={v.link}
                    >
                      {v.name}
                    </Link>
                  </li>
                ))}

            <li>
              <Link href="/login" className="apllyBtnMobileRes">
                Login
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

        {/* Profile start  */}
        <div className={`flex items-center gap-2`}>
          {user ? (
            <div className="group">
              <div className="flex relative items-center gap-2">
                <Image
                  height={50}
                  width={50}
                  className="w-10 h-10 object-cover rounded-full cursor-pointer"
                  src={user.image}
                  alt="img here"
                ></Image>
                <div className="leading-3">
                  <p className="text-sm text-white capitalize font-medium">
                    {user?.name}
                  </p>
                  <span
                    onClick={handleLogout}
                    className="text-[11px] cursor-pointer text-red-500 hover:text-red-600"
                  >
                    Logout
                  </span>
                </div>
              </div>
              {/* Hover Model  ---------------*/}
              <div
                className={`absolute right-[5%] opacity-0 group-hover:opacity-100  group-hover:top-[100%] top-[120%] gShadow bg-gray-200 z-[1000000] rounded-lg transition-all duration-500`}
              >
                <ul className="px-4 py-4">
                  <li className="flex flex-col gap-3">
                    <Link
                      className="text-sm text-[#252525] font-medium hover:text-blue-600"
                      href="https://evertizemarketing.com/dashboard"
                    >
                    <i className="fa-solid fa-chart-simple mr-1"></i>  Dashboard
                    </Link>
                    <span
                      className="text-sm cursor-pointer text-[#252525] font-normal hover:text-red-600"
                      onClick={handleLogout}
                    >
                    <i className="fa-solid fa-right-from-bracket mr-1"></i>  Logout
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="applyBtn">
              <Link href="/login" className="apllyBtn">
                login
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
