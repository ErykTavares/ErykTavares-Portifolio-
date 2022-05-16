import React from "react";
import { MenuMobileStyle } from "./styled";

function Index({ children, active}) {
  const [state, setState] =
    React.useState("none");

  React.useEffect(() => {
    if (active) {
      setState("flex");
    } else if (!active) {
      setTimeout(
        () => setState("none"),
        1000,
      );
    }
  }, [active]);

  return (
    <MenuMobileStyle
      state={state}
      className={
        active ? "an-toBottom" : "an-toTop"
      }
    >
      {children}
    </MenuMobileStyle>
  );
}

export default Index;
