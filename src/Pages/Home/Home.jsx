import SkillsImage from "../../../utils/SkillsImage";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Project from "./Project/Project";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <About></About>
      <SkillsImage></SkillsImage>
      <Project></Project>
    </div>
  );
};

export default Home;
