import React from 'react';
import "../css/Project.css";

const Projects = ({category}) => {
const projectsArry = [
    {
        name : "ErykTavares Portifolio",
        description : "Meu portfólio pessoal que eu fiz aplicando todos os meus conhecimentos dês de o designer feito no figma  ate o código em react. ",
        link : "https://github.com/ErykTavares/ErykTavares-Portifolio-",
        gif : "https://media.giphy.com/media/jPO3NVt1ZOpAQhTQKk/giphy.gif",
        category : "React"
    },
    {
        name : "To Do",
        description : "Desafio que eu fiz para praticar React que eu recém comecei a aprender.",
        link : "https://github.com/ErykTavares/To-Do",
        gif : "https://media.giphy.com/media/DD7kPiytv9KjlkRcQ0/giphy.gif",
        category : "React"
    },
   
    {
        name : "Auto add cards",
        description : "Apenas um pequeno projeto que eu desenvolvi com o objetivo de automatizar essa tarefa extremamente repetitiva.",
        link : "https://github.com/ErykTavares/auto-add-cards-in-anki",
        gif : "https://media.giphy.com/media/viIdw727YGHyujnSck/giphy.gif",
        category : "Python"
    },
   
    {
        name : "Bio Links",
        description : "Pequeno projeto pessoal, eu decidi fazer essa bio de links por conta própria porque eu posso customizar a mesma para ficar do meu jeito e também para mostrar minhas habilidades.",
        link : "https://github.com/ErykTavares/instagram_biolinks",
        gif : "https://media.giphy.com/media/MC7CCEo4JTb8zdEtVD/giphy.gif",
        category : "HtmlCssJavaScript"
    },
    {
        name : "Jordan Shoe Landing Page",
        description : "Desafio de prática do servidor Codelandia do discord, nesse desafio aprendi sobre css grid e mais um pouco sobre animações.",
        link : "https://github.com/ErykTavares/Jordanshoe",
        gif : "https://media.giphy.com/media/Hq4lKoO4mxXD3JRmtR/giphy.gif",
        category : "HtmlCssJavaScript"
    },
    {
        name : "Desafio 04",
        description : "Desafio de prática do servidor Codelandia do discord.",
        link : "https://github.com/ErykTavares/Desafio-04",
        gif : "https://media.giphy.com/media/FtmRgtnRdIJfqI6bIL/giphy.gif",
        category : "Html Css JavaScript"
    },
    {
        name : "Desafio 03",
        description : "Desafio de prática do servidor Codelandia do discord, nesse desafio aprendi sobre css grid.",
        link : "https://github.com/ErykTavares/Desafio-03",
        gif : "https://media.giphy.com/media/axsIQgqsj5MeZc7eu0/giphy.gif",
        category : "Html Css JavaScript"
    },
   


]

  return (
    <div className="projectsContent">
        {
          projectsArry.filter((project) => {
            if(category === "Tudo"){
              return project
            }
            else if(project.category === category){
              return project
            }
            return null
          }).map(({name, description, gif, link}) =>{
            return(
              <a className="projectsCard" href={link} target="_blank" key={name}  rel="noreferrer">
                  <h3>{name}</h3>
                  <img src={gif} alt={{name} + "gif"} />
                  <h5>{description}</h5>
              </a>
            )
          })
        } 
    </div>
  )
}

export default Projects
