import Projects from "../../../utils/Projects";
import SkillsImage from "../../../utils/SkillsImage";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Education from "./Education/Education";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <About></About>
      <SkillsImage></SkillsImage>
      <Projects></Projects>
      <Education></Education>
    </div>
  );
};

export default Home;
