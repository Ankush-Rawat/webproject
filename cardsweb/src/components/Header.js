// src/components/Header.js
import React from "react";
import '../App.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Science Fiction Stories</h1>
      <div className="filters">
        <button className="btn new">New</button>
        <button className="btn in-progress">In Progress</button>
        <button className="btn completed">Completed</button>
        <button className="btn clear-all">Clear All</button>
      </div>
    </header>
  );
};

export default Header;
