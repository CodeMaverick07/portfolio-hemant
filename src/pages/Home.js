import React from "react";
import Layout from "../components/Layout";
import { Typewriter } from "react-simple-typewriter";

import {
  FaAngular,
  FaCss3,
  FaHtml5,
  FaJava,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { SiTailwindcss, SiJavascript } from "react-icons/si";
import { useDarkMode } from "../context/DarkModeContext";

const Home = () => {
  const { dark } = useDarkMode();
  return (
    <Layout>
      <body className={`${dark ? "bg-theme" : "bg-gray-100"}`}>
        <div className="overflow-hidden z-0">
          <div className="h-screen  ">
            <div
              className="grid md:grid-cols-1 grid-cols-2 h-full
           items-center  md:border-0
             md:rotate-0 mx-28  md:mx-4 "
            >
              <div
                className={`${
                  dark ? "text-white" : "text-black"
                } md:mt-20 -mt-72 font-mont font-semibold`}
              >
                <h1 className="text-5xl md:text-2xl ">
                  Hii , I am <b className="text-violet-500">Hemant</b>
                </h1>
                <h1 className="text-4xl md:text-xl ">
                  {" "}
                  <span className="text-4xl md:text-xl font-robo">
                    <Typewriter
                      words={["Web Developer", "Anime Fan", "Student"]}
                      loop={0}
                      cursor
                      cursorStyle="_"
                      typeSpeed={150}
                      deleteSpeed={100}
                      delaySpeed={100}
                    />
                  </span>
                </h1>
              </div>
              <div className="h-3/4 md:h-96 ">
                <lottie-player
                  src="https://assets9.lottiefiles.com/packages/lf20_kkflmtur.json"
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                ></lottie-player>
              </div>
            </div>
          </div>
          {/* Technologies */}

          <div
            className={`${
              dark ? "bg-bg" : "bg-gray-200"
            } shadow-2xl mx-20 md:mx-8 md:rounded-lg rounded-xl  `}
          >
            <div className="mt-20 pb-10">
              <h1
                className={`${
                  dark ? "text-white" : "text-black"
                } text-4xl text-center font-bold pt-10`}
              >
                Technologies I Use
              </h1>
              <div className="grid md:grid-cols-1 grid-cols-4">
                <FaReact
                  size={180}
                  color="cyan"
                  className="w-full text-center mt-20"
                />

                <FaHtml5
                  size={180}
                  color="orange"
                  className="w-full text-center mt-20 animate-bounce"
                />
                <FaCss3
                  size={180}
                  color="blue"
                  className="w-full text-center mt-20 animate-bounce md:hidden"
                />
                <FaNodeJs
                  size={180}
                  color="green"
                  className="w-full text-center mt-20 md:hidden"
                />

                <SiTailwindcss
                  size={180}
                  color="cyan"
                  className="w-full text-center mt-20 animate-bounce"
                />
                <FaJava
                  size={180}
                  color="orange"
                  className="w-full text-center mt-20 md:hidden"
                />

                <FaAngular
                  size={180}
                  color="red"
                  className="w-full text-center mt-20 md:hidden"
                />
                <SiJavascript
                  size={180}
                  color="yellow"
                  className="w-full text-center mt-20 animate-bounce"
                />
              </div>
            </div>
          </div>

          {/* JavaScript */}
          <div className="my-20 ">
            <div className="text-center h-52 mx-20 rounded-xl shadow-xl md:mx-0">
              <h1
                className={`${
                  dark ? "text-white" : "text-black"
                } py-10 font-mont font-bold text-4xl md:text-3xl `}
              >
                Yes You Are Right...I am JavaScript Buff
              </h1>
            </div>
          </div>
          <div
            className={`"md:mx-5 mx-32 shadow-2xl ${
              dark ? "bg-bg" : "bg-gray-200"
            } -mt-36 rounded-xl "`}
          >
            <div className="h-96">
              <lottie-player
                src="https://assets6.lottiefiles.com/packages/lf20_yd8fbnml.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>

            <p
              className={`${
                dark ? "text-white" : "text-black"
              } text-2xl my-5 px-14 py-10 font-semibold md:px-5 `}
            >
              JavaScript is one of the most top-ranked programming languages
              because of its ubiquitous use on all platforms and mass adoption.
              Main use cases: Web development
            </p>
          </div>
          {/* My Dev Stack */}
          <div>
            <div className="text-center h-52 mx-20 rounded-lg shadow-2xl md:mx-0">
              <h1
                className={`${
                  dark ? "text-white" : "text-black"
                } py-10 font-mont font-bold text-4xl `}
              >
                My Dev Stack
              </h1>
            </div>
            <div
              className={`"md:mx-5 mx-32 shadow-2xl ${
                dark ? "bg-bg text-white" : "bg-gray-100 text-black"
              } -mt-20 rounded-xl"`}
            >
              <div className="h-96">
                <lottie-player
                  src="https://assets8.lottiefiles.com/packages/lf20_cvbomaqx.json"
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                ></lottie-player>
              </div>
              <div className="grid md:grid-cols-1  grid-cols-3 px-28 py-5">
                <div className="text-left md:text-center">
                  <h1 className="text-2xl font-bold">Front End</h1>

                  <p className="my-5 font-semibold">HTML/CSS</p>
                  <p className="my-5 font-semibold">JavaScript</p>
                  <p className="my-5 font-semibold">React</p>
                </div>
                <div className="text-center">
                  <h1 className="text-2xl font-bold">UI/UX</h1>

                  <p className="my-5 font-semibold">Tailwind</p>
                  <p className="my-5 font-semibold">Bootstrap</p>
                  <p className="my-5 font-semibold">Material UI</p>
                </div>
                <div className="text-right md:text-center">
                  <h1 className="text-2xl font-bold">Back End</h1>

                  <p className="my-5 font-semibold">Node JS</p>
                  <p className="my-5 font-semibold">Express JS</p>
                  <p className="my-5 font-semibold">MongoDB</p>
                </div>
              </div>
            </div>
          </div>
          {/* My Info */}
          <div>
            <div className=" mx-96 mt-20 rounded-lg shadow-2xl md:mx-10">
              <h1
                className={`${
                  dark
                    ? "text-white border border-white rounded-md"
                    : "text-black"
                } p-4 md:text-3xl text-4xl text-center  font-bold`}
              >
                Who Is Hemant
              </h1>
            </div>
            <div className="h-screen relative md:-my-20 ">
              <div className="h-full">
                <lottie-player
                  src="https://assets5.lottiefiles.com/packages/lf20_dcatp5cr.json"
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                ></lottie-player>
              </div>
              <div
                className={`${
                  dark ? "text-white" : "text-black"
                } absolute inset-0 flex flex-col items-center justify-center`}
              >
                <h1 className="text-2xl font-bold md:text-lg md:mt-10">
                  Hii , Hello , Namaste...
                </h1>

                <hr />
                <pre className="text-xl my-10 font-robo md:px-5 md:text-lg md:my-5 ">
                  {JSON.stringify(
                    {
                      name: "Hemant Jatal.V",
                      age: "19",
                      gender: "Male",
                      country: "India",
                      typing_speed: "75wpm",
                    },
                    null,
                    2
                  )}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </body>
    </Layout>
  );
};

export default Home;
