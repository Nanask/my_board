import React from "react";
import StaticButton from "./StaticButton";

const Buttons = ({ onClick1, onClick2, string1, string2 }) => {
  return (
    <div className="main_buttons">
      <StaticButton onClick={onClick1}>{string1}</StaticButton>
      <StaticButton onClick={onClick2}>{string2}</StaticButton>
    </div>
  );
};

export default Buttons;
