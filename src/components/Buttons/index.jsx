import React from "react";
import { ButtonStyle } from "./style";

function Button({
  children,
  onClick,
  bgcolor,
  width,
  height,
}) {
  return (
    <ButtonStyle
      bgcolor={bgcolor}
      width={width}
      height={height}
      onClick={onClick}
    >
      {children}
    </ButtonStyle>
  )
}

export default Button;
