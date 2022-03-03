import React from "react";
import Projects from "../components/Project";
import "../css/Projetos.css";

const Projetos = () => {
  const [category, setCategory] = React.useState("Tudo");

  return (
    <section className="projetos container">
      <h2>Projetos</h2>
      <div className="langCategory">
        <div
          className={category === "Tudo"? "langSelection active": "langSelection"}
          onClick={(event) => setCategory(event.target.innerText)}
        >
          Tudo
        </div>
        <div
         className={category === "Html Css JavaScript"? "langSelection active": "langSelection"}
          onClick={(event) => setCategory(event.target.innerText)}
        >
          Html Css JavaScript
        </div>
        <div
         className={category === "Python"? "langSelection active": "langSelection"}
          onClick={(event) => setCategory(event.target.innerText)}
        >
          Python
        </div>
        <div
         className={category === "React"? "langSelection active": "langSelection"}
          onClick={(event) => setCategory(event.target.innerText)}
        >
          React
        </div>
      </div>
      <Projects category={category} />
    </section>
  );
};

export default Projetos;
