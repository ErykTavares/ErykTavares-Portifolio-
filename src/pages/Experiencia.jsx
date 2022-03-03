import React from "react";
import "../css/Experiencia.css";

const Experiencia = () => {
  return (
    <section className="experienciaContent container">
      <div className="skills animeteleft">
        <h2>Skills</h2>
        <ul>
          <li>
            <img src={process.env.PUBLIC_URL + "./assets/svg/html cor normal.svg"} alt="" />
            <h4>Html</h4>
          </li>
          <li>
            <img src={process.env.PUBLIC_URL + "./assets/svg/css cor normal.svg"} alt=""   />
            <h4>Css</h4>
          </li>
          <li>
            <img src={process.env.PUBLIC_URL + "./assets/svg/js cor normal.svg"} alt="" />
            <h4>JavaScript</h4>
          </li>
          <li>
            <img src={process.env.PUBLIC_URL + "./assets/svg/python cor normal.svg"} alt="" />
            <h4>Python</h4>
          </li>
          <li>
            <img src={process.env.PUBLIC_URL + "./assets/svg/react cor normal.svg"} alt="" />
            <h4>React</h4>
          </li>
          <li>
            <img src={process.env.PUBLIC_URL + "./assets/svg/bootstrap cor normal.svg"} alt="" />
            <h4>Bootstrap</h4>
          </li>
        </ul>
      </div>
      <div className="experiencia animeteright">
        <h2>Experiência</h2>
        <ul className="experienciaList">
          <li>Freelancer</li>
          <li>Projetos Pessoais</li>
        </ul>
      </div>
    </section>
  );
};

export default Experiencia;
