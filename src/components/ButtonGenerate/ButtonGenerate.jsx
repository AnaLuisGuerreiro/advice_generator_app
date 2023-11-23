import React from "react";
import divider from "../img/divider.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiceFive } from "@fortawesome/free-solid-svg-icons";

import "./ButtonGenerate.css";

export default function ButtonGenerate() {
  function generateAdvice() {}
  return (
    <div className="ButtonGenerate">
      <img src={divider} alt="Line divider" />
      <div className="circle-dice" onClick={generateAdvice}>
        <FontAwesomeIcon icon={faDiceFive} className="dice" />
      </div>
    </div>
  );
}
