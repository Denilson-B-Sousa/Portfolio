import { TypeAnimation } from "react-type-animation";

export function TypeAnimationWriter() {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Desenvolvedor Web Front-end",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
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
      className="text-xl lg:text-lg xl:text-xl text-green-900 dark:text-purple-800"
    />
  );
}
