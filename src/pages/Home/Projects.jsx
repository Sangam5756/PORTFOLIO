import React from "react";

import SectionTitle from "../../components/SectionTitle";
import { projects } from "../../../resources/projects";
import Project_Slider from "./Project_Slider";
function Projects() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  return (
    <div>
      <SectionTitle title={"Projects"} />
      <div className="flex py-10 gap-20 sm:hidden ">
        <div className="sm:projectscroll">
          <div className="flex flex-col gap-10 border-l-2 border-[#135e4c82] sm:h-28 w-1/3 sm:gap-1 sm:flex-row sm:overflow-y-hidden sm:overflow-x-scroll sm:w-full">
            <div className="flex sm:flex-row sm:gap-5 flex-col w-full ">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="cursor-pointer py-5"
                  onClick={() => {
                    setSelectedItemIndex(index);
                  }}
                >
                  
                    <h1
                      className={`text-xl px-5 ${selectedItemIndex === index
                        ? `text-tertiery  border-tertiery border-l-4 -ml-[3px] w-full py-3`
                        : `text-white w-full`
                        }`}
                    >
                      {project.title}
                    </h1></div>



              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-10 sm:hidden">
          <img
            src={projects[selectedItemIndex].image}
            alt="project-image"
            className="h-60 w-72"
          />

          <div className="flex flex-col gap-5">
            <div className="sm:text-center ">
              <h1 className="text-secondary text-xl">
                {projects[selectedItemIndex].title}{" "}
                {projects[selectedItemIndex].link && (
                  <a
                    href={projects[selectedItemIndex].link}
                    className="text-blue-300 font-sans"
                  >
                    (Try-Here)
                  </a>
                )}
              </h1>
              <p className="text-white">
                {projects[selectedItemIndex].description}
              </p>
            </div>

            <div className="sm:flex items-center justify-center">
              <a
                className=" text-2xl bg-red-600 hover:bg-red-700 py-1 px-3 text-center w-fit rounded-full text-white"
                href={projects[selectedItemIndex].githubrepo || ""}
              >
                Github
              </a>
            </div>
          </div>
        </div>

      </div>
      <div className="hidden sm:block">
        <Project_Slider />
      </div>
    </div>
  );
}

export default Projects;
