import Marquee from "react-fast-marquee";
import SkillCard from "./SkillCard";
import PropTypes from "prop-types";
import { skills } from "/utils/skills.js";

const Skills = () => {
  return (
    <div>
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-primary"></span>
          <span className=" bg-primary w-fit text-white p-2 px-5 text-xl rounded-md">
            Skills
          </span>
          <span className="w-24 h-[2px] bg-primary"></span>
        </div>
      </div>
      <Marquee
        gradient={false}
        speed={80}
        pauseOnHover={true}
        pauseOnClick={true}
        delay={0}
        play={true}
        direction="left"
      >
        <ul className="flex gap-5">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill}></SkillCard>
          ))}
        </ul>
      </Marquee>
    </div>
  );
};
Skills.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default Skills;
