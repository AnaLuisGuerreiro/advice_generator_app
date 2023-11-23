import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiceFive } from "@fortawesome/free-solid-svg-icons";

import "./ButtonGenerate.css";

export default function ButtonGenerate() {
  function generateAdvice() {}
  return (
    <div className="ButtonGenerate">
      <div className="circle-dice" onClick={generateAdvice}>
        <FontAwesomeIcon icon={faDiceFive} className="dice" />
      </div>
    </div>
  );
}
