import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const DropdownMenu = () => {
  return (
    <ul className="absolute left-full top-0 z-20 w-40 bg-[#010021] mt-2 p-2 rounded-lg">
      <li>
        <Link
          href="/dashboard/offer-services"
          className="transition-all block py-2 px-4 rounded-lg text-white hover:bg-[#7078d330]"
        >
          Query Service
        </Link>
      </li>
      <li>
        <Link
          href="/clientservice"
          className="block p-2 px-4 rounded-lg text-white hover:bg-[#7078d330]"
        >
          Add Service
        </Link>
      </li>
      {/* Add more services as needed */}
    </ul>
  );
};

const Aside = () => {
  const router = useRouter();
  const [showDropdown, setShowDropdown] = useState(false);

  var navLinks = [
    {
      href: "/dashboard",
      lable: "Dashboard",
      icon: "fa-regular fa-address-card",
    },
    { href: "/dashboard/users", lable: "Users", icon: "fa-regular fa-user" },
    {
      href: "/dashboard/enquiries",
      lable: "Enquiries",
      icon: "fa-solid fa-table-list",
    },
    { href: "/dashboard/teams", lable: "Teams", icon: "fa-solid fa-users" },
  ];

  return (
    <aside
      className={`bg-[#010021] space-y-8 hover:bg-[#010021fb] max-w-full min-w-[200px]`}
    >
      <div className="flex flex-col h-full">
        <div className="h-32 w-full flex items-center px-8">
          <Link href="/" className="flex-none">
            <img
              src="/logo.png"
              width={110}
              className="mx-auto border-b-[1px] border-slate-700 pb-4"
            />
          </Link>
        </div>
        <div className="flex-1 flex flex-col h-full">
          <ul className="px-4 text-sm font-medium flex-1">
            {navLinks.map((v, i) => (
              <li key={i}>
                <Link
                  href={v.href}
                  className={`relative flex items-center gap-x-[4px] text-gray-600 p-2 mb-3 rounded-lg hover:bg-[#7078d330] group cursor-pointer ${
                    router.pathname === v.href
                      ? "bg-[#7078d3a2] group cursor-pointer"
                      : ""
                  }`}
                >
                  <i
                    className={`${v.icon} text-sm ${
                      router.pathname === v.href
                        ? "text-blue-50"
                        : "text-gray-500"
                    }`}
                  ></i>
                  <div
                    className={` ${
                      router.pathname === v.href
                        ? "text-blue-100 font-medium"
                        : "text-blue-200"
                    }`}
                  >
                    {v.lable}
                  </div>
                </Link>
              </li>
            ))}
            <li>
              <div
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
                className="relative flex items-center gap-x-[4px] text-gray-600 p-2 mb-3 rounded-lg hover:bg-[#7078d330] group cursor-pointer"
              >
                <i className="fa-solid fa-gears text-sm text-gray-500"></i>
                <div className="text-blue-200">Services</div>
                {showDropdown && <DropdownMenu />}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
