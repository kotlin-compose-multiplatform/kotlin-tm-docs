import React from "react";
import "./CardList.css";

interface CardProps {
  cards: Array<{
    title: string;
    link: string;
  }>;
}

const CardList: React.FC<CardProps> = ({ cards }) => {
  const handleCardClick = (link: string) => {
    window.open(link, "_blank"); // Open the link in a new tab
  };

  return (
    <div className="card-list">
      {cards.map((card, index) => (
        <div
          key={index}
          className="card"
          onClick={() => handleCardClick(card.link)}
        >
          <h3>{card.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default CardList;
