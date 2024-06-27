import Marquee from "react-fast-marquee";
import SkillCard from "./SkillCard";
import PropTypes from "prop-types";

const Skills = ({ skills }) => {
  return (
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
  );
};
Skills.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default Skills;
