import React from "react";
import Layout from "../components/Layout";
import projectData from "../resources/projectData";
import { FaGithub, FaLink } from "react-icons/fa";
import { useEffect } from "react";
import { useDarkMode } from "../context/DarkModeContext";

const Projects = () => {
  const { dark } = useDarkMode();
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <Layout>
      <body className={`${dark ? "bg-theme" : "bg-gray-100"}`}>
        <div className="mt-16 md:mt-5 overflow-hidden ">
          <div className="h-screen">
            <div className="h-3/4">
              <lottie-player
                src="https://assets2.lottiefiles.com/packages/lf20_p2u4l82r.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
            <p
              className={`${
                dark ? "text-white" : "text-black"
              } text-xl font-semibold text-center font-robo `}
            >
              Good ideas are not adopted automatically. They must be driven into
              practice with courageous patience
            </p>
            <h1
              className={`${
                dark ? "text-white" : "text-black"
              } text-4xl font-bold text-center mt-5 font-robo`}
            >
              Because
            </h1>
          </div>

          <div className="font-semibold text-center bg-red-500 font-mont -mt-16 mx-96 p-16 text-white rounded-2xl md:mx-5 md:p-10 md:mt-10 md:shadow-lg shadow-2xl mb-10">
            <h1 className="text-5xl md:text-2xl ">THE GAME IS...</h1>
            <h1 className="text-5xl md:text-2xl">CONSISTENCY</h1>
          </div>
        </div>
        <div>
          <div className="mx-96 md:mx-0">
            <div className=" rounded-lg p-5 w-60 mx-60 mt-10 md:mx-14 shadow-2xl">
              <h1
                className={`${
                  dark
                    ? "text-white border-2 rounded-xl p-3 -ml-6"
                    : "text-black"
                } text-center text-5xl `}
              >
                Projects
              </h1>
            </div>
          </div>
          <div className="grid mt-10 md:grid-cols-1 grid-cols-3 items-center justify-center rounded-2xl">
            {projectData.map((project) => {
              return (
                <div className="m-3 shadow-2xl">
                  <div className="rounded-xl">
                    <div
                      className={`relative p-5 ${
                        dark ? "bg-bg" : "bg-gray-200 "
                      } rounded-lg text-center`}
                    >
                      <img
                        src={project.image}
                        alt="hemant"
                        className="w-100 h-60 md:h-40 rounded-lg shadow-2xl "
                      />
                      <div className=" text-white absolute inset-0 items-center justify-center flex flex-col opacity-0 bg-black hover:opacity-80 rounded-xl ">
                        <h1 className=" text-3xl font-bold text-center md:text-2xl  rounded  p-3 ">
                          {project.title}
                        </h1>
                        <div className="flex text-6xl md:text-5xl items-center justify-center mt-4 md:mt-2 ">
                          <a
                            className="mx-5 p-2"
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FaLink
                              className="border-2 rounded border-gray-500
                           text-gray-500 p-3 hover:border-white hover:text-white "
                            />
                          </a>
                          <a
                            className="mx-5"
                            href={project.git}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FaGithub
                              className="border-2 rounded border-gray-500 
                          text-gray-500 p-3 hover:border-white hover:text-white "
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </body>
    </Layout>
  );
};

export default Projects;
