import React from 'react'
import { SubpageWrapper } from '../subpage-wrapper'
import Subpage from '../subpage'
import './about.css'

export const About = () => {
    return <SubpageWrapper><Subpage>
        <div className='about-me'>
        <div className="about-me-photo-surf">
        <img className="about-me-photo" src={process.env.PUBLIC_URL + '/surf.jpg'} alt={'self-portrait'} />
        </div>
        <div className='about-me-content'>
            <p>
                hey there! i'm will, and this is my digital archive. this project started
                on a rainy saturday as a way to play around with some css. over time, this
                project has sort of evolved into my personal website? this website is a work
                in progress, as is just about everything in my life, so mind the mess ^.^
            </p>
            <p>
                i spend most evenings kneading some sort of natually leveaned dough in the sleepy sunset of san francisco.
                in the fall you'll find
                me guzzling electrolytes in the sand dunes of ocean beach, as i reconcile with a dodgy
                decision to ditch all my responsibilites and spend my entire day in my favorite brine bath -- the pacific ocean. back in my day, i was something of a football player. the one you
                play with your feet, obviously. my favorite spring sundays are enjoyed just a few paces
                from ocean beach, as a proud participant of <a href="https://www.sfsfl.com/" target="_blank">SFSFL</a>.
            </p>
            <p>
                ---------
            </p>
            <div className='about-me-flexbox'>
            <div className='about-me-me'>
                <img className="about-me-photo" src={process.env.PUBLIC_URL + '/avi.jpg'} alt={'self-portrait'} />
                </div>
            <div>
            <p>
                i'm a tinkerer at heart, and i spent most of my early childhood taking apart
                whatever i could get my hands on. think: my mom's film camera, pens, printers, etc.
                at some point along the way, i sort of figured how to put things back together.
                couple that with a love for bicycles, and that's how i've found myself with a garage full of semi-functional franken-bikes.
            </p>
            <p>
                professionally, i spent my university summers working on embedded systems for small-scale satellites, before
                finding a love for front-end software development. since 2021 i've worked at a company called everbright, where i
                build out a system to ensure residential solar customers are being sold working solar systems that actually save them
                money. at some point, i plan to make the transition to teaching, where i hope to teach high school caclulus.
            </p>
            </div>
            </div>
            </div>
        </div>
        </Subpage></SubpageWrapper>
}

export default About
