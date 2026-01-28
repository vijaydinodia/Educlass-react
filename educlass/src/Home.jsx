import React from "react";
import { useNavigate } from "react-router-dom";
// import Card from "./Card";
import Card from "./Card";

const Home = () => {
  const navigate = useNavigate();

  const openClass = () => {
    console.log("card is clicked");
    navigate("/classPage");
  };

  return (
    <div className="main">
      <div className="card-container">
        <Card title="React-Q" prop={openClass} />
      </div>
    </div>
  );
};

export default Home;
