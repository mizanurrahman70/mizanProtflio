import Projects from "../Home/Project/Project.jsx";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Education from "./Education/Education";
import Contact from "./Contact/Contact";
import Blog from "./Blog/Blog.jsx";
import Skills from "./Skills/Skills.jsx";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Education></Education>
      <Blog></Blog>
      <Contact></Contact>
    </div>
  );
};

export default Home;
