import React from 'react'

function Champion({char}) {
    return (
        <div className="Champion">
            <div className="tree warfare">
                <ul>
                    {Object.entries(char.champion_points.warfare).map((point) => {
                        return <li><span>{point[0]}</span> <span>{point[1]}</span></li>
                    })}
                </ul>
            </div>
            <div className="tree fitness">
                <ul>
                    {Object.entries(char.champion_points.fitness).map((point) => {
                        return <li><span>{point[0]}</span> <span>{point[1]}</span></li>
                    })}
                </ul>
            </div>
            <div className="tree craft">
                <ul>
                    {Object.entries(char.champion_points.craft).map((point) => {
                        return <li><span>{point[0]}</span> <span>{point[1]}</span></li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Champion
