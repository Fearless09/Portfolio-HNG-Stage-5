import React from "react";
import Particles from "react-tsparticles";
import particles from "../../utils.js/particles";
import { loadFull } from "tsparticles";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import "./styles.scss";

const Home = () => {
  
  const navigate = useNavigate();

  const handleInit = async (main) => {
    await loadFull(main);
  };


  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };

  return (
    <section id="home" className="home">
      <Particles id="particles" options={particles} init={handleInit} />
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Toheeb Opeyemi
          <br />
          Front end developer
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translatex(0px)",
        }}
      >
        <div className="home__contact-me">
          <button onClick={handleNavigateToContactMePage}>Hire Me</button>
        </div>
      </Animate>
    </section>
  );
};
export default Home;
