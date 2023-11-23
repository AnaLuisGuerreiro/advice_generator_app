import React from "react";

import divider_desk from "../img/divider_desk.svg";
import divider_mobile from "../img/divider_mobile.svg";
import ButtonGenerate from "../ButtonGenerate/ButtonGenerate.jsx";

import "./AdviceCard.css";

export default function AdviceCard() {
  return (
    <div className="AdviceCard">
      <p>ADVICE #1</p>
      <h2> "Advice here" </h2>
      <img className="divider_desk" src={divider_desk} alt="Line divider" />
      <img className="divider_mobile" src={divider_mobile} alt="Line divider" />
      <ButtonGenerate />
    </div>
  );
}
