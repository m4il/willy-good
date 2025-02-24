import React, { useEffect, useState } from 'react'
import { Jar } from './jar/jar'
import './start.css'
import { SubpageWrapper } from '../subpage-wrapper'




export const FeedStarter = () => {
    const lastFeedingDate = localStorage.getItem("last-feeding-date")
    let daysSinceLastFeed = -1
    if (lastFeedingDate) {
        const today = new Date("2025-02-25").getTime()
        const feeding = new Date(lastFeedingDate).getTime()
        daysSinceLastFeed = Math.floor(Math.abs(today - feeding) / 86400000)
    }
    const starterName = localStorage.getItem("starter-name")
    const [needsFeeding, setNeedsFeeding] = useState(daysSinceLastFeed !== 0)
    const [hasFlour, setHasFlour] = useState(false)
    const [hasWater, setHasWater] = useState(false)
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [imageCenter, setImageCenter] = useState(`0px, 0px`);
    const [onImage, setOnImage] = useState(false);
    const [distanceX, setDistanceX] = useState(null);
    const [distanceY, setDistanceY] = useState(null);
    const [totalMouseMove, setTotalMouseMove] = useState(0);
    const [starterHeight, setStarterHeight] = useState(200);


    let redirect = false
    let instructions = daysSinceLastFeed === -1 ? `Meet ${starterName}, your new sourdough starter!` : `It has been ${daysSinceLastFeed} day(s) since you last fed ${starterName}!`
    instructions = instructions + ' Click the flour and water to feed your starter with fresh ingredients!'

    if (!needsFeeding) {
        instructions = "Congratulations on treating " + starterName + " well! Check back in tomorrow to feed it again! "
        redirect = true
    }

    const isMixing = hasFlour && hasWater && totalMouseMove < 200
    if (isMixing) {
        if (totalMouseMove > 100) {
            instructions = 'Keep it up! Almost there!'
        } else {
            instructions = 'Now mix your flour and water!'
        }
    }

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePos({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener(
                'mousemove',
                handleMouseMove
            );
        };
    }, []);

    const handleClickFork = (e) => {
        setOnImage(true)
        setDistanceX(mousePos.x - parseInt(window.getComputedStyle(e.target).getPropertyValue("background-position").split(' ')[0].slice(0, -2)))
        setDistanceY(mousePos.y - parseInt(window.getComputedStyle(e.target).getPropertyValue("background-position").split(' ')[1].slice(0, -2)))
    }

    const handleMouseMove = (e) => {
        if (onImage) {
            if (totalMouseMove >= 150) {
                setHasFlour(false)
                setHasWater(false)
                setNeedsFeeding(false)
                localStorage.setItem("last-feeding-date", new Date().toISOString())
            }
            setTotalMouseMove((old) => old + 1)
            setImageCenter(`${mousePos.x - distanceX}px ${mousePos.y - distanceY}px`)
        }
    }

    useEffect(() => {
        if (!needsFeeding) {
            setStarterHeight(400)
        }
    }, [needsFeeding])

    const isMixingForkClass = isMixing ? onImage ? 'starter-container-mixing-grab' : 'starter-container-mixing-no-grab' : ''

    return <SubpageWrapper><div className={`starter__container ${isMixingForkClass}`}>
        {isMixing &&
            <div style={{ zIndex: 2, height: '100%', width: '100%', backgroundRepeat: `no-repeat`, backgroundImage: `url(${process.env.PUBLIC_URL}/pixel-fork.png)`, position: 'absolute', backgroundPosition: imageCenter }} onMouseDown={handleClickFork} onDragEnter={handleClickFork} onDragEnd={() => setOnImage(false)} onMouseUp={() => setOnImage(false)} onMouseMove={handleMouseMove} />}
        {needsFeeding && <button onClick={() => setHasFlour(true)} className="ingredient ingredient-right"><img src={process.env.PUBLIC_URL + "/pixel-wheat.png"} /></button>}
        <div className="jar-and-instructions">
            <Jar className='jar-and-instructions--jar' hasFlour={hasFlour} hasWater={hasWater} starterHeight={starterHeight} mode={daysSinceLastFeed === -1 ? "empty" : "fresh-feed"} />
            <div style={{ textAlign: 'center' }}>
                {instructions}
                {redirect && <>In the meantime, browse my <a href="/">website</a>.</>}
            </div>
        </div>
        {needsFeeding && <button onClick={() => setHasWater(true)} className="ingredient ingredient-left"><img src={process.env.PUBLIC_URL + "/pixel-water.png"} /></button>}
    </div>
    </SubpageWrapper>
}

export const StarterFactory = () => {
    const starterName = localStorage.getItem("starter-name")
    const [newStarterName, setNewStarterName] = useState(starterName || undefined)
    const [clicks, setClicks] = useState(0)

    let errorMsg = ''

    if (clicks > 0) {
        if (!newStarterName || newStarterName?.length === 0) {
            errorMsg = "Do you not love me? Am I not deserveth of a name?"
        }
    }

    const onClick = () => {
        if (clicks === 0) {
            setClicks(1)
        }
        if (!newStarterName) {
            return
        }
        localStorage.setItem('starter-name', newStarterName)
        setClicks((old) => (old + 1))
    }

    if (starterName && window.innerWidth <= 844) {
        return <>Please use a laptop. Mobile mode still in progress.</>
    }

    if (starterName) {
        return <FeedStarter />
    }

    return <SubpageWrapper>
        <div className="starter__container">
            <Jar className="starter-jar" />
            <div className="starter-name-tag">
                <div className="starter-name-tag__header"><div className="starter-name-tag__hello">HELLO</div><div>my name is</div></div>
                <div className="starter-inputs">
                    <input className="starter-name-input" type="text" onChange={(e) => setNewStarterName(e.target.value)} value={newStarterName} />
                    <button className="starter-name-submit" onClick={onClick}>ok</button>
                </div>
                <div className="starter-name-error">{errorMsg}</div>
                <div className="starter-name-tag__footer" />
            </div>
        </div>
    </SubpageWrapper>
}

export default StarterFactory