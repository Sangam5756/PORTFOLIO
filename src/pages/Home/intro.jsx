import { useSelector } from "react-redux";
import { useRef } from "react";
import About from "./About";
import { Intro } from "../../../resources/intro.js"
import ProfileImage from "../../components/ProfileImage.jsx";
function intro() {
  const { loading, portfoliodata } = useSelector((state) => state.root);
  // const { intro } = portfoliodata;
  const { firstName, lastName, welcomeText, description, caption } = Intro;
  // console.log("intro",intro)
  // console.log("Intro",Intro)
  const aboutRef = useRef(null);

  const handleGetStartedClick = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div className=" hidden sm:flex items-center justify-center">
        <ProfileImage img={"photo1.jpg"} />
      </div>

      <div className="flex py-20 sm:py-10 items-center  justify-between gap-3">

        <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-8  sm:mt-2  py-32">

          <h1 className="text-white font-semibold ">
            {/* <img src="https://readme-typing-svg.herokuapp.com/?font=Righteous&size=35&vCenter=true&width=500&height=70&duration=3000&lines=Hi+There!+👋;" /> */}

          </h1>

          <h1 className=" text-7xl sm:text-3xl text-secondary font-semibold">
            <img src="https://readme-typing-svg.herokuapp.com/?font=Righteous&size=35&vCenter=true&width=500&height=70&duration=3000&lines=I'm;" />
            {firstName || " "} {lastName || " "}
          </h1>
          <h1 className="text-7xl w-full sm:text-3xl text-white font-semibold">
            {caption || " "}
          </h1>
          <p className="text-white w-full ">{description || " "}
          </p>
          <div className="flex gap-3 mb-24 justify-between">
            <button className=" border-2 border-tertiery px-10 py-3 text-tertiery rounded"
              onClick={handleGetStartedClick}>
              Get Started
            </button>
            <button className=" border-2 border-tertiery px-10 py-3 text-tertiery rounded"
            ><a href="/resume.pdf" target="_blank">Get Resume</a>

            </button>
          </div>

        </div>
        <div className=" w-[400px] h-[400] mb-32 sm:hidden ">
        <ProfileImage img={"photo1.jpg"}/>
        </div>
      </div>
      <About aboutRef={aboutRef} />

    </>
  );
}

export default intro;
