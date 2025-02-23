import React from 'react'
import JarIMG from './empty-jar.png'
import './jar.css'

interface Props {
    className?: string
    daysSinceLastFeed?: number
    mode?: 'empty' | 'fresh-feed' | 'bubbly'
    starterHeight?: number
    hasFlour?: boolean
    hasWater?: boolean
}

export const Jar = ({ className = "", mode = "empty", starterHeight = 0, hasFlour = false, hasWater = false }: Props) => {

    return <div className={`sourdough-starter-jar ${className}`}>
        <div className="starter-jar-contents">
            {hasFlour && <div className="starter-flour" />}
            {hasWater && <div className="starter-water" />}
            {mode === 'fresh-feed' && <div style={{ height: starterHeight }} className={`starter-fresh`} />}
            {mode === 'bubbly' && <div style={{ height: starterHeight }} className={`starter-bubbly`} />}
        </div>
        <img className="starter-jar" src={JarIMG}></img>
    </div>
}