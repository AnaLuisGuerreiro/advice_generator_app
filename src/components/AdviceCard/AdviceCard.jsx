import React, { useEffect, useState } from "react";
import axios from "axios";

import divider_desk from "../img/divider_desk.svg";
import divider_mobile from "../img/divider_mobile.svg";
import ButtonGenerate from "../ButtonGenerate/ButtonGenerate.jsx";

import "./AdviceCard.css";

export default function AdviceCard() {
  const [advice, setAdvice] = useState("");

  const handleAdvices = async () => {
    const advice_api = "https://api.adviceslip.com/advice";
    const response = await axios.get(advice_api);
    if (response) {
      setAdvice(response.data.slip);
    } else {
      console.error("Error fetching data", response.data);
    }
  };

  useEffect(() => {
    handleAdvices();
  }, []);

  return (
    <div className="AdviceCard">
      <p>ADVICE #{advice.id} </p>
      <h2>" {advice.advice} "</h2>
      <img className="divider_desk" src={divider_desk} alt="Line divider" />
      <img className="divider_mobile" src={divider_mobile} alt="Line divider" />
      <ButtonGenerate generate={handleAdvices} />
    </div>
  );
}
