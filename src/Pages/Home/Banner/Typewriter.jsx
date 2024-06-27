import { useTypewriter } from "react-simple-typewriter";

const Typewriter = () => {
  const [typeEffect] = useTypewriter({
    words: ["MERN Stack Developer"],
    loop: true,
    typeSpeed: 200,
    delaySpeed: 100,
  });

  return (
    <div>
      <h1 className="font-Playfair lg:text-5xl text-4xl font-bold text-left">
        I&#39;m <br />
        Naiem Hasan <br />
        <span className="text-secondary">{typeEffect} </span>
        <span className="text-secondary cursor">|</span>
      </h1>
    </div>
  );
};

export default Typewriter;
