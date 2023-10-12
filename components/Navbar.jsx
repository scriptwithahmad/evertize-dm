import Link from "next/link";
import { useUser } from "@/UserContext";
import { useState, useEffect, useContext } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { useRouter } from "next/router";
import Image from "next/image";
import Cookies from 'js-cookie';

const destination = [
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
  // console.log(user);
  const Router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  
  const handleLogout = () => {
    localStorage.removeItem('user'); // Remove from localStorage
    const cookie = Cookies.get('AccessToken')
    // console.log(cookie)
    Cookies.remove('cookie'); 
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
      <nav className={`navbar ${isOpen ? "open" : ""}`}>
        <div className="nav-left">
          <div className="logo">
            <img src="/logo.png" alt="" />
          </div>

          <ul className={`nav-links ${isOpen ? "open" : ""}`}>
            {destination?.map((v, i) => (
              <li>
                <Link
                  className={Router.pathname === v.link ? "active" : ""}
                  style={{
                    color: Router.pathname === v.link ? "#FA7909" : "#dadada",
                  }}
                  href={v.link}
                >
                  {v.name}
                </Link>
              </li>
            ))}

            <li>
              <Link href={"/"} className="apllyBtnMobileRes">
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

        <div className="flex items-center gap-2">
          {user ? (
            <div className="flex items-center gap-2 leading-4">
              <Image
                height={60}
                width={60}
                className="w-12 h-12 object-cover rounded-full"
                src={user.image}
                alt="img here"
              ></Image>
              <div className="text-white capitalize">
                <h3> {user ? `${user?.name}` : "Plz login."} </h3>
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
              <Link href={"/"} className="apllyBtn">
                Contact us
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
