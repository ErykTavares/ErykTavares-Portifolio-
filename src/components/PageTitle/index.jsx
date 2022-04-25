import React from "react";
import { PageTitleStyle } from "./style";

function PageTitle({ children }) {
  return (
    <PageTitleStyle>
      {children}
    </PageTitleStyle>
  );
}

export default PageTitle;
