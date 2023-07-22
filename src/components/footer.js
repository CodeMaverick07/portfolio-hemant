import React from "react";
import {
  FaInstagram,
  FaMailBulk,
  FaGithub,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { useDarkMode } from "../context/DarkModeContext";

function Footer() {
  const { dark } = useDarkMode();
  return (
    <body className={`${dark ? "bg-theme" : "bg-gray-100"}`}>
      <div className="overflow-hidden">
        <div className="h-72 md:h-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="shadow-2xl"
          >
            <path
              className="shadow-2xl"
              fill={`${dark ? "black" : "#E5E7EB"} `}
              fill-opacity="1"
              d="M0,96L0,128L240,128L240,192L480,192L480,192L720,192L720,256L960,256L960,96L1200,96L1200,64L1440,64L1440,320L1200,320L1200,320L960,320L960,320L720,320L720,320L480,320L480,320L240,320L240,320L0,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div
          className={`${
            dark ? "bg-theme" : "bg-gray-200"
          } w-screen flex justify-center`}
        >
          <div className="md:w-full w-1/2">
            <div className=" p-10 font-mono text-center">
              <p className={`${dark ? "text-white" : "text-black"} pb-2 `}>
                Designed and Developed by
              </p>
              <div className="h-1 border-2 border-dotted border-black "></div>
              <div className="items-center flex w-full justify-between py-2">
                <a href="tel:+919130921658">
                  <FaPhoneAlt
                    className={`${dark ? "text-white" : "text-black"} `}
                  />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/TomatoTwister"
                >
                  <FaGithub
                    className={`${dark ? "text-white" : "text-black"} `}
                  />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/hemant_v_j/"
                >
                  <FaInstagram
                    className={`${dark ? "text-white" : "text-black"} `}
                  />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="mailto:2022.hemant.jatal@ves.ac.in"
                >
                  <FaMailBulk
                    className={`${dark ? "text-white" : "text-black"} `}
                  />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://wa.me/+919130921658"
                >
                  <FaWhatsapp
                    className={`${dark ? "text-white" : "text-black"} `}
                  />
                </a>
              </div>
              <div className="h-1 border-2 border-dotted border-black "></div>

              <p className={`${dark ? "text-white" : "text-black"} pt-2 `}>
                Hemant Jatal.V
              </p>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Footer;
