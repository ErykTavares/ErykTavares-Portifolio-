import React from "react";
import { useInView } from "react-intersection-observer";
import {
  ExperienciaRowStyle,
  RowCell,
} from "./style";
import { ReactComponent as Work } from "../../assets/svg/work.svg";

function ExperienciaRow({
  name,
  date,
  description,
}) {
  const { ref, inView } = useInView();

  const [inview, setInView] = React.useState(false);

  React.useEffect(() => {
    if(!inview && inView){
      setInView(true);
    }
  }, [inView]);


  return (
    <ExperienciaRowStyle
      ref={ref}
      className={inview? "animepop" : ""}
    >
      <RowCell className="title">
        <h3>{name}</h3>
        <h5>{date}</h5>
      </RowCell>
      <div className="vr" />
      <RowCell className="svg">
        <Work />
      </RowCell>
      <div className="vr " />
      <RowCell className="description">
        <p>{description}</p>
      </RowCell>
    </ExperienciaRowStyle>
  );
}

export default ExperienciaRow;
