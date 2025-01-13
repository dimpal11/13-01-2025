"use client";
import React, { useState } from "react";

function Banner() {
  // State for managing dropdowns
  const [openDropdown, setOpenDropdown] = useState("");

  // Function to toggle specific dropdown
  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? "" : dropdown);
  };

  return (
    <>
      {/* <!-- Navigation Links --> */}
      <div className="lg:flex items-center lg:space-x-6 relative bg-[#fff] border border-b-[#F1E5D1] ">
        {/* <!-- Dashboard Dropdown --> */}
        <div className="relative hover:text-white hover:bg-[#CFA767] px-[30px] py-4 ">
          <button
            className="text-[#333333] uppercase font-semibold text-xs  hover:text-white"
            onClick={() => toggleDropdown("dashboard")}
          >
            Banner
          </button>
          {openDropdown === "dashboard" && (
            <ul className="absolute bg-white shadow-md rounded  w-24 border border-[#F1E5D1] text-left">
              <li>
                <a
                  href="/dashboard/overview"
                  className="block px-1 py-2 text-sm border border-transparent hover:bg-[#F4EBDD] hover:border-[#F1E5D1] transition-all duration-300"
                >
                  Overview
                </a>
              </li>
              <li>
                <a
                  href="/dashboard/stats"
                  className="block px-1 py-2 text-sm border border-transparent hover:bg-[#F4EBDD] hover:border-[#F1E5D1] transition-all duration-300"
                >
                  Stats
                </a>
              </li>
              <li>
                <a
                  href="/dashboard/reports"
                  className="block px-1 py-2 text-sm border border-transparent hover:bg-[#F4EBDD] hover:border-[#F1E5D1] transition-all duration-300"
                >
                  Reports
                </a>
              </li>
            </ul>
          )}
        </div>

        {/* <!-- Web Dropdown --> */}
        <div className="relative hover:text-white hover:bg-[#CFA767] px-[30px] py-4 ">
          <button
            className="text-[#333333] uppercase font-semibold text-xs  hover:text-white"
            onClick={() => toggleDropdown("web")}
          >
            Partners
          </button>
          {openDropdown === "web" && (
            <ul className="absolute bg-white shadow-md rounded py-0 w-36 border border-[#F1E5D1] transition-transform duration-300 transform ease-in-out text-left">
              <li>
                <a
                  href="/web/design"
                  className="block px-2 py-2 text-sm border border-transparent hover:bg-[#F4EBDD] hover:border-[#F1E5D1] transition-all duration-300"
                >
                  Web Design
                </a>
              </li>
              <li>
                <a
                  href="/web/development"
                  className="block px-2 py-2 text-sm border border-transparent hover:bg-[#F4EBDD] hover:border-[#F1E5D1] transition-all duration-300"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="/web/seo"
                  className="block px-2 py-2 text-sm border border-transparent hover:bg-[#F4EBDD] hover:border-[#F1E5D1] transition-all duration-300"
                >
                  SEO
                </a>
              </li>
            </ul>
          )}
        </div>

        {/* <!-- Masters Dropdown --> */}
        <div className="relative hover:text-white hover:bg-[#CFA767] px-[30px] py-4 ">
          <button
            className="text-[#333333] uppercase font-semibold text-xs  hover:text-white"
            onClick={() => toggleDropdown("masters")}
          >
            testimonials
          </button>
          {openDropdown === "masters" && (
            <ul className="absolute bg-white shadow-md rounded py-0 w-40 border border-[#F1E5D1] transition-transform duration-300 transform ease-in-out text-left">
              <li>
                <a
                  href="/masters/data"
                  className="block px-2 py-2 text-sm border border-transparent hover:bg-[#F4EBDD] hover:border-[#F1E5D1] transition-all duration-300 whitespace-nowrap"
                >
                  Data Management
                </a>
              </li>
              <li>
                <a
                  href="/masters/users"
                  className="block px-2 py-2 text-sm border border-transparent hover:bg-[#F4EBDD] hover:border-[#F1E5D1] transition-all duration-300"
                >
                  User Management
                </a>
              </li>
            </ul>
          )}
        </div>

        {/* <!-- Expense Dropdown --> */}
        <div className="relative hover:text-white hover:bg-[#CFA767] px-[30px] py-4 ">
          <button
            className="text-[#333333] uppercase font-semibold text-xs  hover:text-white"
            onClick={() => toggleDropdown("expense")}
          >
            Newsletter
          </button>
          {openDropdown === "expense" && (
            <ul className="absolute bg-white shadow-md rounded py-0 w-40 border border-[#F1E5D1] transition-transform duration-300 transform ease-in-out text-left">
              <li>
                <a
                  href="/expense/overview"
                  className="block px-2 py-2 text-sm border border-transparent hover:bg-[#F4EBDD] hover:border-[#F1E5D1] transition-all duration-300"
                >
                  Expense Overview
                </a>
              </li>
              <li>
                <a
                  href="/expense/reports"
                  className="block px-2 py-2 text-sm border border-transparent hover:bg-[#F4EBDD] hover:border-[#F1E5D1] transition-all duration-300"
                >
                  Expense Reports
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default Banner;
