import React from 'react'
import './CharPage.css'
import Armory from './Armory'
import Skills from './Skills'

function CharPage(props) {

    const {char} = props.location.state

    return (
        <div className='CharPage'>
            <div className="container">
                <div className="image-container">
                    <img src={char.image_file}></img>
                    <div className="main-info">
                        <p>{char.char_name}</p>
                        <div className="hp">{char.main_stats.hp}</div>
                        <div className="mp">{char.main_stats.mp}</div>
                        <div className="sp">{char.main_stats.sp}</div>
                    </div>
                </div>
                <Skills char={char}/>
            </div>
                <Armory char={char}/>
        </div>
    )
}

export default CharPage