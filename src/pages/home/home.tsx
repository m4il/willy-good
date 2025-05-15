import React, { useState } from 'react'
import { MobileHome } from './mobile-home'
import './home.css'
import { useSearchParams } from 'react-router-dom'

const colorsMap = (b: boolean) => (
    b ? ['#28487d', '#617ca2'] : ['#34000d', '#800020']
)

export const Home = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const isDark = searchParams.get('dark') === 'true'

    const [isMobile, setIsMobile] = useState(false)
    const [client, setClient] = useState({ x: 0, y: 0 })
    const colors = colorsMap(!isDark)
    const linearGradientString = `repeating-linear-gradient(to bottom, transparent, transparent 5px, ${colors[0]} 5px, ${colors[0]} 10px), repeating-linear-gradient(to right, ${colors[1]}, ${colors[1]} 5px, ${colors[0]} 5px,${colors[0]} 10px)`


    const updateDarkMode = () => {
        if (isDark) {
            setSearchParams({})
        } else {
            setSearchParams({dark: 'true'})
        }
    }

    React.useEffect(() => {
        const media = window.matchMedia('(max-width: 900px)');
        if (media.matches !== isMobile) {
            setIsMobile(media.matches);
        }
        const listener = () => setIsMobile(media.matches);
        window.addEventListener('resize', listener);
        return () => window.removeEventListener('resize', listener);
    }, [isMobile]);

    React.useEffect(() => {
        function handleMouseMove(event) {
            const { clientX, clientY } = event;
            setTimeout(() => {
                setClient({ x: clientX, y: clientY })
            }, 50);
        }

        document.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [setClient])

    if (isMobile) {
        return <MobileHome />
    }

    return <div style={{ backgroundImage: linearGradientString }} className="home">
        <div style={{ background: `radial-gradient(circle at ${client.x}px ${client.y}px, #00000000 10px, #000000ee ${!isDark ? '9999px' : '100px'})` }} className="spotlight" />
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
                <a className="actionable tv" href="/willy-good/#blog">
                <img src={process.env.PUBLIC_URL + "/pixel-tv.png"}></img>
                <div className="tv-text">Hello! Welcome to my room full of all the willy good stuff in my life!</div>
                </a>
                <a className="actionable picture-frame" href="/willy-good/#photography/dark/">
                    <img className="picture-frame__picture" src={process.env.PUBLIC_URL + "/photog/file_16.jpg"}></img>
                    <img src={process.env.PUBLIC_URL + "/frame.png"}></img>
                </a>
            </div>
            <div className="couch">
                <img src={process.env.PUBLIC_URL + "/pixel-couch.png"}></img>
                <a className="actionable guitar" href="/willy-good/#projects"><img src={process.env.PUBLIC_URL + "/pixel-guitar.png"}></img></a>
                <a className="actionable cat" href="/willy-good/#about"><img src={process.env.PUBLIC_URL + "/pixel-cat.png"}></img></a>
            </div>
            <button className="lamp" onClick={updateDarkMode}>
                <img src={process.env.PUBLIC_URL + "/pixel-lamp.png"}></img>
            </button>
        </div>
    </div >
}

export default Home
