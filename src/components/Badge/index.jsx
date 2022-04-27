import React from "react";
import { BadgeStyle } from "./style";

const bgcolorlist = {
  javascript: "#EB9E00",
  html: "#EB4804",
  css: "#0A2FEB",
  react: "#00C3F5",
  styledComponentes: "#EB3FB3",
  python: "#0081EB",
  bootstrap: "#3302A6",
};

function Badge({ lang }) {
  const [bgcolor, setBgColor] =
    React.useState("");

  React.useEffect(() => {
    Object.keys(bgcolorlist).filter(
      (fill) => {
        const lowercaselang =
          lang.toLowerCase();
        return fill === lowercaselang
          ? setBgColor(bgcolorlist[fill])
          : null;
      },
    );
  }, [lang]);

  return (
    <BadgeStyle bgcolor={bgcolor}>
      {lang}
    </BadgeStyle>
  );
}

export default Badge;
