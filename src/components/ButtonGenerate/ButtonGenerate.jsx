import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiceFive } from "@fortawesome/free-solid-svg-icons";

import "./ButtonGenerate.css";

export default function ButtonGenerate(props) {
  return (
    <div className="ButtonGenerate">
      <div className="circle-dice" onClick={props.generate}>
        <FontAwesomeIcon icon={faDiceFive} className="dice" />
      </div>
    </div>
  );
}
