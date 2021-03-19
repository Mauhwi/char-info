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
                        let skill = findSkill(charSkill);
                        let type = skill.type;
                        return <li onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
                        <img className="skill-image" src={skill.image}></img>
                        <div className="description">
                            <p className="name">{skill.skill_name}</p>
                            <p>
                                {Object.entries(skill).map((info) => {
                                    if (info[0].includes('damage_text')) {
                                        return <span className={
                                                type.includes('physical') ? 'physical' 
                                                : (type.includes('disease') ? 'disease' : '')}>
                                            {info[1]}</span>
                                    } else if (info[0].includes('description')) {
                                        return <span>{info[1]}</span>
                                    }
                                })
                                }
                            </p>
                        </div>    
                    </li>
                    }) }
                </ul>
                
                <ul> 
                    {Object.values(char.skills.second_bar).map((charSkill) => {
                        let type = findSkill(charSkill).type;
                        return <li onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
                        <img className="skill-image" src={findSkill(charSkill).image}></img>
                        <div className="description">
                            <p className="name">{findSkill(charSkill).skill_name}</p>
                            <p>
                                {Object.entries(findSkill(charSkill)).map((info) => {
                                    if (info[0].includes('damage_text')) {
                                        return <span className={
                                                type.includes('physical') ? 'physical' 
                                                : (type.includes('disease') ? 'disease' : '')}>
                                            {info[1]}</span>
                                    } else if (info[0].includes('description')) {
                                        return <span>{info[1]}</span>
                                    }
                                })
                                }
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

