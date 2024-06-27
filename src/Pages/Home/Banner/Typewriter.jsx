import { useTypewriter } from "react-simple-typewriter";

const Typewriter = () => {
  const [typeEffect] = useTypewriter({
    words: ["MERN Stack Developer"],
    loop: true,
    typeSpeed: 200,
    delaySpeed: 500,
  });

  return (
    <div>
      <h1 className=" font-openSans lg:text-4xl text-4xl font-bold text-left">
        This is <span className=" text-secondary">NAIEM HASAN</span>, I&#39;m a{" "}
        <br />
        <span className=" text-primary"> {typeEffect} </span>
        <span className="text-secondary cursor">|</span>
      </h1>
    </div>
  );
};

export default Typewriter;
