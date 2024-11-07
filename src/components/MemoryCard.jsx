import React from "react";
import "../styles/memory-card.css";

const MemoryCard = ({ memory, onClick, hover }) => {
  return (
    <div
      className={
        hover
          ? "memory-card-container memory-card-container1"
          : "memory-card-container"
      }
      onClick={onClick}
    >
      <img
        className="memory-card-image"
        style={{
          objectFit: memory?.scale ? memory?.scale : "cover",
        }}
        src={memory?.image}
        alt="Random"
      />
      <div className="memory-card-title">{memory?.title}</div>
      <div className="memory-card-date">{memory?.date}</div>
      <div className="memory-card-description">{memory?.description}</div>
    </div>
  );
};

export default MemoryCard;
