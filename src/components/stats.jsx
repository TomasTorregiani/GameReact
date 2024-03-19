import { useEffect, useState } from "react"

export const Stats = () =>{

    const [life, setLife] = useState(100)
    const [health, setHealth] = useState(100)
    const [gold, setGold] = useState(50)

    

    return(
        <>
            <div className="stats">
                <span className="stat">XP: <strong><span id="xpText">{life}</span></strong></span>
                <span className="stat">Health: <strong><span id="healthText">{health}</span></strong></span>
                <span className="stat">Gold: <strong><span id="goldText">{gold}</span></strong></span>
            </div>
        </>
    )
}