import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useDarkMode } from "../context/DarkModeContext";
const Header = () => {
  const { dark, darkModeHandler } = useDarkMode(false);
  const [showMenu, setShowMenu] = useState("md:hidden");
  const showMenuHandler = () => {
    if (showMenu === "md:hidden") {
      setShowMenu("");
    } else setShowMenu("md:hidden");
  };
  const path = window.location.pathname;
  const menuItems = [
    {
      title: "Home",
      key: "/",
    },
    {
      title: "Projects",
      key: "/projects",
    },

    {
      title: "Contact",
      key: "/contact",
    },
  ];

  return (
    <div
      className={`${
        dark ? "text-gray-50" : "text-black"
      } fixed top-0 left-0 right-0 z-50`}
    >
      <div
        className={`flex ${
          dark ? "bg-theme" : "bg-gray-50"
        } justify-between items-center p-2 shadow-2xl ${
          showMenu === "" && "flex-col "
        }`}
      >
        <div className="flex justify-between items-center w-full">
          <Link to="/">
            <h1
              className={`text-2xl font-semibold font-mont mx-3 md:mt-0 border-2 rounded-lg p-2 ${
                dark
                  ? "border-white hover:text-black hover:bg-white"
                  : "border-black hover:text-white hover:bg-black"
              }`}
            >
              Hemant
            </h1>
          </Link>
          <div className="md:flex lg:hidden xl:hidden 2xl:hidden ">
            <button
              onClick={darkModeHandler}
              className={` border-2 rounded-md ${
                dark ? "border-gray-50" : "border-theme"
              }`}
            >
              {dark ? (
                <MdLightMode className="lg:hidden xl:hidden 2xl:hidden md:flex cursor-pointer m-1  text-xl  " />
              ) : (
                <MdDarkMode className="lg:hidden xl:hidden 2xl:hidden md:flex cursor-pointer m-1  text-xl " />
              )}
            </button>

            <div
              className={`mx-5 border-2 rounded-md ${
                dark ? "border-gray-50" : "border-theme"
              }`}
            >
              <FaBars
                onClick={showMenuHandler}
                className="lg:hidden xl:hidden 2xl:hidden md:flex m-1 cursor-pointer text-xl mt-1 "
              />
            </div>
          </div>
        </div>

        <div className="flex md:hidden">
          <button
            className={`mr-5 border-2 ${
              dark ? "border-gray-50 border-2 " : "border-black border-2  "
            } rounded-md`}
            onClick={darkModeHandler}
          >
            {dark ? (
              <MdLightMode className="mx-2 " />
            ) : (
              <MdDarkMode className="mx-2" />
            )}
          </button>
          {menuItems.map((item) => {
            return (
              <li
                className={`list-none mx-5 px-4 p-1 text-lg border-2  rounded-md ${
                  dark
                    ? "hover:border-white border-black"
                    : "hover:border-black border-gray-50"
                }   ${
                  item.key === path &&
                  `${
                    dark ? "bg-gray-50 text-black" : "bg-theme text-gray-50"
                  }  rounded-md `
                }`}
              >
                <Link to={`${item.key}`}>{item.title}</Link>
              </li>
            );
          })}
        </div>

        <div
          className={`md:flex items-start w-full flex-col lg:hidden xl:hidden 2xl:hidden ${showMenu}`}
        >
          {menuItems.map((item) => {
            return (
              <li
                className={`list-none mx-4  mt-2  ${
                  item.key === path &&
                  `${
                    dark
                      ? "bg-gray-50 text-black rounded-md mx-8 px-5"
                      : "bg-theme text-gray-50 rounded-md mx-8 px-5"
                  } `
                }`}
              >
                <Link to={`${item.key}`}>{item.title}</Link>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
