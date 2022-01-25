import React from "react";

const StaticButton = ({ children, onClick }) => {
  return (
    <button className="static_button" onClick={onClick}>
      {children}
    </button>
  );
};

export default StaticButton;
