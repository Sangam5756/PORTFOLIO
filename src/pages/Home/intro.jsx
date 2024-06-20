import { useSelector } from "react-redux";
import { useRef } from "react";
import About from "./About";
import {Intro} from "../../../resources/intro.js"
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
      <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10">
        <h1 className="text-white font-semibold ">
        <img src="https://readme-typing-svg.herokuapp.com/?font=Righteous&size=35&vCenter=true&width=500&height=70&duration=3000&lines=Hi+There!+👋;" />
        
        </h1>
        <h1 className=" text-7xl sm:text-3xl text-secondary font-semibold">
        <img src="https://readme-typing-svg.herokuapp.com/?font=Righteous&size=35&vCenter=true&width=500&height=70&duration=3000&lines=I'm;" />
          {firstName || " "} {lastName || " "}
        </h1>
        <h1 className="text-7xl sm:text-3xl text-white font-semibold">
          {caption || " "}
        </h1>
        <p className="text-white w-2/3">{description || " "}
        </p>
        <button className=" border-2 border-tertiery px-10 py-3 text-tertiery rounded"
         onClick={handleGetStartedClick}>
          Get Started
        </button>

      </div>
      <About aboutRef={aboutRef} />

    </>
  );
}

export default intro;
