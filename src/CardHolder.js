import React from 'react'
import './App.css'
import CharCard from './CharCard'

function CardHolder(props) {
    return (
        <div className="CardHolder">
        {props.chars.map((char) => {
            return <CharCard char={char} key={char.id}/>
        }) }
        </div>
    );
}

export default CardHolder;