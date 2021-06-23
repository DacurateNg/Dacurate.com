import React from "react";
import img from "../../assets/img/copper-loader.gif";

export default function PageLoader() {
  return (
    <div id="preloader">
      <img src={img} alt="" />
    </div>
  );
}
