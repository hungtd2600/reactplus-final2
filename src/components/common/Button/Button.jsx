import React from "react";
import "./Button.scss";

const Button = ({ title }) => {
  return (
    <div>
      <button className="button button-home" type="submit">
        {title}
      </button>
    </div>
  );
};

export default Button;
