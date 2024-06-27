import bannerimg from "../../../assets/banner-image.png";
import Typewriter from "./Typewriter";
const Banner = () => {
  return (
    <div className="flex justify-center items-center container mx-auto gap-4">
      <div className="w-1/2 space-y-4">
        <p className=" font-openSans text-2xl font-bold text-secondary uppercase">
          Welcome
        </p>
        <Typewriter></Typewriter>
      </div>
      <div className="w-1/2 ">
        <img src={bannerimg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
