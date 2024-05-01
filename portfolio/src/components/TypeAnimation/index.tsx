import { TypeAnimation } from "react-type-animation";

export function TypeAnimationWriter() {
  return (
    <TypeAnimation
      sequence={[
        
        "Desenvolvedor Web Front-end",
        1000, 
        "Desenvolvedor Web Back-end",
        1000,
        "Desenvolvedor Web Full Stack!",
        1000,
        
      ]}
      wrapper="span"
      speed={60}
      style={{
        display: "inline-block",
        cursor: "text",
      }}
      cursor={true}
      className="font-Poppins font-light text-xl lg:text-lg xl:text-xl xl:mt-2 text-green-900 dark:text-purple-800 uppercase tracking-wide"
    />
  );
}
