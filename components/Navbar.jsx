import Link from "next/link";
import { useState, useEffect, useContext } from "react";
import OutsideClickHandler from "react-outside-click-handler";

import { useRouter } from "next/router";
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

const Navbar = ({user}) => {
  console.log(user)
  const Router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
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
          <div className="applyBtn">
            <Link href={"/"} className="apllyBtn">
              Contact us
            </Link>
          </div>
          <div className="flex items-center gap-2 leading-4">
            <img
              className="w-12 h-12 object-cover rounded-full"
              src="data:image/jpeg;base64,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"
              alt=""
            />
            <div className="text-white">
              <h3>Ahmad</h3>
              <span className="text-xs hover:text-[#E77918] transition-all cursor-pointer">Logout</span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
