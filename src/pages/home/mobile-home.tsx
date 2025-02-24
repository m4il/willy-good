import React, { useState } from 'react'
import useMobileHomeTyper from "./mobile-home-typer"

export const MobileHome = () => {
    const [skip, setSkip] = useState(false)
    const { displayText } = useMobileHomeTyper()
    return <div className="mobile-home">
        <img className="mobile-tv" src={process.env.PUBLIC_URL + "/pixel-gameboy.png"}></img>
        <div className="mobile-tv-info">
            {!skip && displayText ? <><div className="mobile-tv-info-topline">{displayText}</div><div className="mobile-tv-info-bottomline" onClick={() => setSkip(true)}>skip</div></> : (
                <>
                    {"> "}<a href="/willy-good/#baking">baking</a>
                    {"> "}<a href="/willy-good/#bikes">bikes</a>
                    {"> "}<a href="/willy-good/#music">music</a>
                    {"> "}<a href="/willy-good/#photography">photography</a>
                    {"> "}<a href="/willy-good/#photography">about me</a>
                </>
            )}
        </div>
    </div>
}