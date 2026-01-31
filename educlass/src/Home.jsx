import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";

const Home = () => {
  const navigate = useNavigate();

  // Handle clicking on a class card
  const handleCardClick = () => {
    console.log("Class card clicked");
    navigate("/classPage");
  };

  return (
    <div className="home-page">
      <div className="card-container">
        <Card title="React-Q" onClick={handleCardClick} />
      </div>
    </div>
  );
};

export default Home;
