import React, { useState } from 'react'
import SkillsData from '../data/skills'
import './CharPage.css'

function Skills({char}) {


    function findSkill(id) {
        const skill = SkillsData.find(skill => 
            skill.id == id
        )
        return skill;
    }

    function toggleHover(event) {
        let elements = document.querySelectorAll('.Skills li');
        elements.forEach(
            (element) => element.classList[event.target==element?'toggle':'remove']('hover')
        )
        
    } 


    return (
        <div className="Skills">
            <div className="first-bar">
                <ul> 
                    {Object.values(char.skills.first_bar).map((charSkill) => {
                    return <li onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
                        <img className="skill-image" src={findSkill(charSkill).image}></img>
                        <div className="description">
                            {/* TODO: can probably just write actual html in json for this?? */}
                            <p className="name">{findSkill(charSkill).skill_name}</p>
                            <p>
                                <span>{findSkill(charSkill).description_1}</span>
                                <span className={findSkill(charSkill).type}>{findSkill(charSkill).damage_text}</span>
                                <span>{findSkill(charSkill).description_2}</span>
                            </p>
                        </div>    
                    </li>
                    }) }
                </ul>
                
                <ul> 
                    {Object.values(char.skills.first_bar).map((charSkill) => {
                    return <li onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
                        <img className="skill-image" src={findSkill(charSkill).image}></img>
                        <div className="description">
                            {/* TODO: can probably just write actual html in json for this?? */}
                            <p className="name">{findSkill(charSkill).skill_name}</p>
                            <p>
                                <span>{findSkill(charSkill).description_1}</span>
                                <span className={findSkill(charSkill).type}>{findSkill(charSkill).damage_text}</span>
                                <span>{findSkill(charSkill).description_2}</span>
                            </p>
                        </div>    
                    </li>
                    }) }
                </ul>
            </div>
        </div>
    )
}

export default Skills

