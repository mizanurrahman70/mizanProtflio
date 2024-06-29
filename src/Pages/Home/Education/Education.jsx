import AnimationLottie from "lottie-react";
import lottieFile from "../../../../public/lottie/study.json";
import { educations } from "/utils/educations.js";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-primary"></span>
          <span className="bg-primary w-fit text-white p-2 px-5 text-xl rounded-md">
            Education
          </span>
          <span className="w-24 h-[2px] bg-primary"></span>
        </div>
      </div>
      <div className="mb-10 gap-10 lg:flex md:flex justify-center items-center">
        <section className="lg:w-1/2 md:w-1/2">
          <AnimationLottie className="lg:w-3/5" animationData={lottieFile} />
        </section>
        <section className="lg:w-1/2 md:w-1/2 grid grid-cols-1 gap-4">
          {educations.map((education, index) => (
            <div
              key={index}
              className=" bg-secondary text-white lg:px-10 px-4 py-2 rounded-xl"
            >
              <p className="text-center">{education.duration}</p>
              <div className="flex items-center gap-4 mt-2 mb-4">
                <FaGraduationCap className="lg:text-5xl text-3xl"></FaGraduationCap>
                <div>
                  <p className="lg:text-xl font-medium text-sm">
                    {education.title}
                  </p>
                  <p className=" text-sm">{education.institution}</p>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Education;
