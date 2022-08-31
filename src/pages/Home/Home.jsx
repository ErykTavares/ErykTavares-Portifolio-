import React from "react";
import { HomeStyle, HomeContentLeft, HomeContentRight } from "./style";
import { ReactComponent as Tecnologia } from "../../assets/svg/tencologia.svg";
import Button from "../../components/Buttons/index";
import { ReactComponent as Download } from "../../assets/svg/download.svg";
import { ReactComponent as Linkedin } from "../../assets/svg/Linkedin.svg";
import { ReactComponent as GitHub } from "../../assets/svg/Github.svg";

const Home = () => {
  return (
    <HomeStyle>
      <HomeContentLeft className="animeleft">
        <Tecnologia className="img-fluid" />
      </HomeContentLeft>
      <HomeContentRight className="animeright">
        <div className="rContentTitle">
          <h2>ErykTavares</h2>
          <h4>Desenvolvedor Web Front-End</h4>
        </div>
        <div className="rContentButtons">
          <a
            href={`${process.env.PUBLIC_URL}./assets/download/EricCVprogramação.pdf`}
            download
          >
            <Button>
              <Download />
              Currículo
            </Button>
          </a>
          <a
            href="https://www.linkedin.com/in/eryk-t-7879a7ba/"
            target="_blank"
            rel="noreferrer"
          >
            <Button>
              <Linkedin className="svgbtn" />
              Linkedin
            </Button>
          </a>
          <a
            href="https://github.com/ErykTavares"
            target="_blank"
            rel="noreferrer"
          >
            <Button>
              <GitHub className="svgbtn" />
              GitHub
            </Button>
          </a>
        </div>
      </HomeContentRight>
    </HomeStyle>
  );
};

export default Home;
