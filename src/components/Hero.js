import { useRef } from "react";
import { useGsapShuttterUnveil } from "../hooks/gsap";

const Hero = () => {
  const heroRef = useRef(null);
  const shutter1 = useRef(null);
  const shutter2 = useRef(null);

  useGsapShuttterUnveil(shutter1, 0, heroRef);
  useGsapShuttterUnveil(shutter2, 0.2, heroRef);

  return (
    <section className="hero wrapper" ref={heroRef}>
      <h1 className="ethereal">
        Ethereal <span ref={shutter1}></span>
      </h1>
      <h1 className="canvas">
        Canva <span ref={shutter2}></span>
      </h1>
    </section>
  );
};

export default Hero;
