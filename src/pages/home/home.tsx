import React, { useState } from 'react'
import './home.css'

const colorsMap = (b: boolean) => (
    b ? ['#28487d', '#617ca2'] : ['#34000d', '#800020']
)

export const Home = () => {
    const [colorMode, setColorMode] = useState(true)
    const colors = colorsMap(colorMode)
    const linearGradientString = `repeating-linear-gradient(to bottom, transparent, transparent 5px, ${colors[0]} 5px, ${colors[0]} 10px), repeating-linear-gradient(to right, ${colors[1]}, ${colors[1]} 5px, ${colors[0]} 5px,${colors[0]} 10px)`
    return <div style={{ backgroundImage: linearGradientString }} className="home">
        <div className="shelf">
            <a href="/willy-good/#starter" className="actionable jar">
                <img src={process.env.PUBLIC_URL + "/pixel-jar.png"}></img>
            </a>

            <img className="vines" src={process.env.PUBLIC_URL + "/pixel-vines.png"}></img>
        </div>
        <div className="home-centerer">
            <div className="table">
                <img src={process.env.PUBLIC_URL + "/pixel-table.png"}></img>
                <a className="actionable bread" href="/willy-good/#baking">
                    <img src={process.env.PUBLIC_URL + "/pixel-bread.png"}></img>
                </a>
                <img className="tv" src={process.env.PUBLIC_URL + "/pixel-tv.png"}></img>
                <div className="tv-text">Hello! Welcome to my room full of all the willy good stuff in my life!</div>
            </div>
            <div className="couch">
                <img src={process.env.PUBLIC_URL + "/pixel-couch.png"}></img>
                <a className="actionable guitar" href="/willy-good/#music"><img src={process.env.PUBLIC_URL + "/pixel-guitar.png"}></img></a>
                <a className="actionable cat" href="/willy-good/#about"><img src={process.env.PUBLIC_URL + "/pixel-cat.png"}></img></a>
            </div>
            <button className="lamp" onClick={() => setColorMode((old) => !old)}>
                <img src={process.env.PUBLIC_URL + "/pixel-lamp.png"}></img>
            </button>
        </div>
    </div >
}

export default Home