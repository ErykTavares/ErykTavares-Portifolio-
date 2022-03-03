import React from "react";
import "../css/Home.css";

const Home = () => {
  return (
    <section className="container home">
      <div className="homeImg animeteleft">
        <img
          src={process.env.PUBLIC_URL + "./assets/svg/tencologia.svg"}
          alt="tecnologia"
        />
      </div>
      <div className="homeText animeteright">
        <div>
          <h2>ErykTavares</h2>
          <h4>Desenvolvedor Front-End</h4>
        </div>
        <div className="buttons">
          <a
            href={
              process.env.PUBLIC_URL + "./assets/download/EricCVprogramação.pdf"
            }
            target="_blank"
            download
          >
            <button className="btn">
              <img
                className="buttonsvg"
                src={process.env.PUBLIC_URL + "./assets/svg/download.svg"}
                alt="download img"
              />
              Currículo
            </button>
          </a>
          <div className="buttonsDisplay">
            <a
              href="https://www.linkedin.com/in/eryk-t-7879a7ba/"
              target="_blank"
            >
              <button className="btn">
                <img
                  className="buttonSvg"
                  src={process.env.PUBLIC_URL + "./assets/svg/Linkedin.svg"}
                  alt="linkedin img"
                />
                Linkedin
              </button>
            </a>
            <a href="https://github.com/ErykTavares" target="_blank">
              <button className="btn">
                <img
                  className="buttonSvg"
                  src={process.env.PUBLIC_URL + "./assets/svg/Github.svg"}
                  alt="github img"
                />
                GitHub
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
