import Header from "../../components/Header";
import Intro from "./intro";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import LeftSider from "./LeftSider";
import Project_Slider from "./Project_Slider";
import MessageMe from "../../components/MessageMe";
function index() {
  return (
    <div>
      <Header />
      
        <div className="bg-primary px-40 sm:px-5">
          <Intro />
          {/* <Experiences /> */}
          <Projects />
          <Contact />
          {/* <MessageMe/> */}
          <Footer />
          <LeftSider />
        </div>
      
    </div>
  );
}

export default index;
