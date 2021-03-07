import React, { useState } from 'react';
import './App.css';
import {
  Link
} from "react-router-dom";

function CharCard({ char }) {
  const [hovered, setHovered] = useState(false);
  const classes = ['blur']
  const toggleHover = () => {
    setHovered(!hovered)
    if (hovered) {
      classes.push('blur')
    } else {
      classes.pop()
    }
  }
  

  return (
    <div className="CharCard">
      <div className="image-container" onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}>
        <img src={char.image_file} className={hovered ? classes.join(' ') : ''}
      ></img>
        <button>
        <Link to={{ pathname: `/char/${char.id}`, state: {char}}}>View</Link></button>
      </div>
      <div className="main-info">
        <h3>{char.char_name}</h3>
        <p>Lvl {char.char_lvl} {char.char_class}</p>
        <p>{char.weapon1}/{char.weapon2}</p>
      </div>
    </div>
  );
}

export default CharCard;