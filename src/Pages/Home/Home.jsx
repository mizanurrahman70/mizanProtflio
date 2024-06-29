import Projects from "../Home/Project/Project.jsx";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Education from "./Education/Education";
import Contact from "./Contact/Contact";
import Blog from "./Blog/Blog.jsx";
import Skills from "./Skills/Skills.jsx";

const Home = () => {
  return (
    <div className="px-6">
      <div id="home">
        <Banner />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="blog">
        <Blog />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
