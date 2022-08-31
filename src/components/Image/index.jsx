/* eslint-disable no-param-reassign */
import React, { useState } from "react";
import { WrapperStyle } from "./style";

const Image = ({ src, alt }) => {
  // eslint-disable-next-line no-unused-vars
  const [showSkeleton, setShowSkeleton] = useState(true);

  const handleLoad = ({ target }) => {
    target.style.opacity = 1;
    setShowSkeleton(false);
  };

  return (
    <WrapperStyle>
      {showSkeleton && <div className="skeleton" />}
      <img className="image" onLoad={handleLoad} src={src} alt={alt} />
    </WrapperStyle>
  );
};

export default Image;
