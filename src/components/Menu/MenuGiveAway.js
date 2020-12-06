import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../Menu/Menu.css'

const MenuGiveAway = () => {
  return (
    <div className="menu menuGiveAway">
      <Link to="/">
          <p>Logo</p>
      </Link>
      <div className="right">
        <Link to="/adoptera"><p className="menu-item">Adoptera</p></Link>
        <Link to="/adoptera-bort"><p>Adoptera bort</p></Link>
        <Link to="/quiz"><p>Quiz</p></Link>
        <Link to="/"><p>Om</p></Link>
        <button className="menu-button">Logga in</button>
      </div>
    </div>
  )
};

export default MenuGiveAway;