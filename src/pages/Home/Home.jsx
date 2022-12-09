import React from "react";
import images from "../../assets/images";
import "./Home.scss";
import ButtonHome from "../../components/common/Button/ButtonHome";

const Home = () => {
  return (
    <div className="home">
      <img className="home-image" src={images.done} alt="" />
      <div className="content-home">
        <div className="content-title">
          <span>Welcome to</span>
          <h3>OUR REMINDER</h3>
        </div>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
          dictum tempus, interdum at dignissim metus. Ultricies sed nunc.
        </span>
      </div>
      <div className="button-start">
        <ButtonHome />
      </div>
    </div>
  );
};

export default Home;
