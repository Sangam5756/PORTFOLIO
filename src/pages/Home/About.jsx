/* eslint-disable react/jsx-key */
import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";
import { about } from "../../../resources/abouts";
function About({aboutRef}) {
  
  const { loading} = useSelector((state) => state.root);
  
  
  const {skills, lottieURL, description1, description2} = about[0];
  return (
    <div  ref={aboutRef} className="about-section">
      <div className="sm:mt-5"></div>
      <SectionTitle  title={"About"} />
      <div className="flex w-full items-center sm:flex-col">
        <div className="h-[70vh] w-1/2 sm:w-full">
          <dotlottie-player
            src={lottieURL}
            background="transparent"
            speed="1"
            autoplay
            loop
          ></dotlottie-player>
        </div>
        <div className="flex flex-col gap-3 w-1/2 sm:w-full text-white">
          <p>{description1 || ""}
          </p>
          <p>
            {description2 || " "}
          </p>
        </div>
      </div>

      <div className="py-5">
        <h1 className="text-tertiery text-xl">
          Here are few technologies i have been working with recently
        </h1>
        <div className="grid gap-2 grid-cols-5 sm:grid-cols-2 mt-5">
          {skills.map((skill, index) => (
            <div key={index} className="text-tertiery     bg-sky-900 hover:bg-red-600 hover:text-white border border-tertiery py-3 px-10">
              <h1 >{skill} </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
