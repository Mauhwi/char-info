import React from 'react'
import './CharPage.css'
import Armory from './Armory'
import Skills from './Skills'
import Champion from './Champion'

function CharPage(props) {

    const {char} = props.location.state

    return (
        <div className='CharPage'>
            <div className="horizontal-container">
                <div className="container">
                    <div className="image-container">
                        <img src={char.image_file}></img>
                        <div className="main-info">
                            <p className>{char.char_name}</p>
                            <div className="hp">{char.main_stats.hp}</div>
                            <div className="mp">{char.main_stats.mp}</div>
                            <div className="sp">{char.main_stats.sp}</div>
                        </div>
                    </div>
                    <div className="mundus">
                        <img src="https://elderscrollsonline.wiki.fextralife.com/file/Elder-Scrolls-Online/mundus_stone_the_thief.jpg"></img>
                        <p>{char.mundus}</p>
                    </div>
                    <Skills char={char}/>
                </div>

                    <Armory char={char}/>

            </div>
            <div className="horizontal-container">
                <Champion char={char}/>
            </div>
        </div>
    )
}

export default CharPage