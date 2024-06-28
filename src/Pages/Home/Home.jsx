import Projects from "../../../utils/Projects";
import SkillsImage from "../../../utils/SkillsImage";
import About from "./About/About";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <About></About>
      <SkillsImage></SkillsImage>
      <Projects></Projects>
    </div>
  );
};

export default Home;
