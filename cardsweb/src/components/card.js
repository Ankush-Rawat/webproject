import React from "react";
import '../App.css';

const Card = ({ title, text, imageUrl, altText, linkUrl, linkText }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={imageUrl} className="card-img-top" alt={altText} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href={linkUrl} className="btn btn-primary">
          new
        </a>
      </div>
    </div>
  );
};

export default Card;
