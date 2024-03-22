import React from 'react';
import './App.css';
const Navigation = () => {
  return (
    <nav  className="navigation" style={{background:"#3498db"}}>
      <ul>
        <li><a href="#">Главное меню</a></li>
        <li><a href="#">Видеоролики</a></li>
        <li><a href="#">О нас</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;