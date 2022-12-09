import React from "react";
import { useNavigate } from "react-router-dom";
import images from "../../../assets/images";
import "./Button.scss";

const ButtonHome = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => navigate("/registration")}
        className="button button-home"
      >
        Get Started <img src={images.vector} alt="" />{" "}
      </button>
    </div>
  );
};

export default ButtonHome;
