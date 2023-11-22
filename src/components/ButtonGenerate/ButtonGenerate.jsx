import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiceFive, faPause } from "@fortawesome/free-solid-svg-icons";

import "./ButtonGenerate.css";

export default function ButtonGenerate() {
  return (
    <div className="ButtonGenerate">
      <p className="line"> </p>
      <div className="circle-pause">
        <FontAwesomeIcon icon={faPause} className="pause" />
      </div>
      <div className="circle-dice">
        <FontAwesomeIcon icon={faDiceFive} className="dice" />
      </div>
    </div>
  );
}
