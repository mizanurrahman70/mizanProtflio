import bannerimg from "../../../assets/banner-image-nb.png";

const About = () => {
  return (
    <div className="my-12 lg:my-16 lg:relative container mx-auto">
      <div className="hidden lg:flex flex-col items-center lg:absolute top-40 -right-14">
        <span className=" bg-primary w-fit text-white lg:rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-primary"></span>
      </div>
      <div className="lg:hidden flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-primary"></span>
          <span className=" bg-primary w-fit text-white p-2 px-5 text-xl rounded-md">
            ABOUT ME
          </span>
          <span className="w-24 h-[2px] bg-primary"></span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-secondary text-xl uppercase text-center lg:text-left md:text-left">
            Who I am?
          </p>
          <p className="text-center lg:text-left text-sm lg:text-lg md:text-left">
            My name is Naiem Hasan. I am a professional and enthusiastic
            front-end developer with a passion for crafting dynamic and
            responsive web applications. I pride myself on being a quick learner
            with a strong self-learning attitude. Exploring new technologies and
            solving complex problems are my driving forces.
          </p>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <img className="lg:h-[450px]" src={bannerimg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
