import htmlIcon from "../public/svg/skills/html.svg";
import cssIcon from "../public/svg/skills/css.svg";
import javascriptIcon from "../public/svg/skills/javascript.svg";
import reactIcon from "../public/svg/skills/react.svg";
import tailwindIcon from "../public/svg/skills/tailwind.svg";
import mongoIcon from "../public/svg/skills/mongoDB.svg";
import gitIcon from "../public/svg/skills/git.svg";
import bootstrapIcon from "../public/svg/skills/bootstrap.svg";
import figmaIcon from "../public/svg/skills/figma.svg";
import firebaseIcon from "../public/svg/skills/firebase.svg";
import materialuiIcon from "../public/svg/skills/materialui.svg";
import nextJSIcon from "../public/svg/skills/nextJS.svg";
import photoshopIcon from "../public/svg/skills/photoshop.svg";
import adobeXDIcon from "../public/svg/skills/adobe-xd.svg";
import illustratorIcon from "../public/svg/skills/illustrator.svg";
import wordpressIcon from "../public/svg/skills/wordpress.svg";
import Skills from "../src/Pages/Home/Skills/Skills";

const SkillsImage = () => {
  const skillsList = [
    { name: "HTML", Icon: htmlIcon },
    { name: "CSS", Icon: cssIcon },
    { name: "JavaScript", Icon: javascriptIcon },
    { name: "React", Icon: reactIcon },
    { name: "Tailwind", Icon: tailwindIcon },
    { name: "Bootstrap", Icon: bootstrapIcon },
    { name: "MongoDb", Icon: mongoIcon },
    { name: "Git", Icon: gitIcon },
    { name: "Firebase", Icon: firebaseIcon },
    { name: "MaterialUI", Icon: materialuiIcon },
    { name: "Wordpress", Icon: wordpressIcon },
    { name: "Photoshop", Icon: photoshopIcon },
    { name: "Illustrator", Icon: illustratorIcon },
    { name: "Adobe XD", Icon: adobeXDIcon },
    { name: "Figma", Icon: figmaIcon },
    { name: "Next Js", Icon: nextJSIcon },

    // Add more skills as needed
  ];

  return (
    <div className="container mx-auto">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-primary"></span>
          <span className=" bg-primary w-fit text-white p-2 px-5 text-xl rounded-md">
            Skills
          </span>
          <span className="w-24 h-[2px] bg-primary"></span>
        </div>
      </div>
      <Skills skills={skillsList}></Skills>
    </div>
  );
};

export default SkillsImage;
