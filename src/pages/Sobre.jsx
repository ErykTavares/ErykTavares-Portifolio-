import React from "react";
import "../css/Sobre.css";

const Sobre = () => {
  return (
    <section className="container sobre">
      <h2>Sobre</h2>
      <div className="sobreContent">
        <div className="sobrecontentLeft  animeteleft ">
          <div className="sobreProfileimg  ">
            <img
              src={process.env.PUBLIC_URL + "./assets/img/profile-img.png"}
              alt="Profile img"
            />
          </div>
          <div className="sobreSocialmedia">
            <a
              href="https://www.instagram.com/lord_eryktavares/?hl=pt-br"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={process.env.PUBLIC_URL + "./assets/svg/Instagram.svg"}
                alt="Instagram icon"
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UCvLrUAMzmxB-H0iK8H7ReQg"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={process.env.PUBLIC_URL + "./assets/svg/youtube.svg"}
                alt=".youtube icon"
              />
            </a>
            <a
              href="http://api.whatsapp.com/send?phone=557591952463"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={process.env.PUBLIC_URL + "./assets/svg/whatsapp.svg"}
                alt="Whatsapp icon"
              />
            </a>
            <a
              href="https://discord.com/users/859431514449379358"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={
                  process.env.PUBLIC_URL +
                  "./assets/svg/discord-svgrepo-com.svg"
                }
                alt="Discord icon"
              />
            </a>
          </div>
          <h4>erictavares35@gmail.com</h4>
        </div>
        <div className="sobrecontentRight animeteright">
          <div className="sobreText">
            <p>
              Desenvolvedor Web Front-end e futuro desenvolvedor full stack, sou
              apaixonado pela área de tecnologia, entusiasta em ui ux e edição
              de vídeo, curto muito jogos, animes, mangas, leitura e esportes
              principalmente calistenia, eles são minhas atividades nas horas
              que eu não estou trabalhando ou estudando. Atualmente estudando
              como autodidata, tanto inglês como programação, assim que possível
              irei entrar em um curso de técnico ou tecnólogo de análise e
              desenvolvimento de sistemas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
