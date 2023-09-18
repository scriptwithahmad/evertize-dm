import React from "react";

import { useState, useEffect } from "react";
import Link from "next/link";

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
    link: "/services",
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

const Navbar = () => {
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
                    color: Router.pathname === v.link ? "#FA7909" : "#444", // Apply styles conditionally
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

        <div className="applyBtn">
          <Link href={"/"} className="apllyBtn">
            Contact us
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
