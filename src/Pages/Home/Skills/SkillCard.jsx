import PropTypes from "prop-types";

const SkillCard = ({ skill }) => {
  return (
    <div className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer">
      <div className="h-full w-full rounded-lg border border-secondary bg-primary shadow-none shadow-gray-50 group-hover:border-secondarytransition-all duration-500">
        <div className="flex -translate-y-[1px] justify-center">
          <div className="w-3/4">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 p-6">
          <div className="h-8 sm:h-10">
            <img
              src={skill.Icon}
              alt="AWS"
              className="h-full w-auto rounded-lg"
            />
          </div>
          <p className="text-white text-sm sm:text-lg">{skill.name}</p>
        </div>
      </div>
    </div>
  );
};

SkillCard.propTypes = {
  skill: PropTypes.shape({
    Icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default SkillCard;
