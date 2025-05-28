import React from 'react'
import { SubpageWrapper } from '../subpage-wrapper'
import Subpage from '../subpage'
import './blog.css'

export const Blog = () => {
    return <SubpageWrapper><Subpage>
        <div className="blogs-list">
            <a className="blog-link__wrapper" href="/willy-good/#blog/bikepacking-1">
            <div className="blog-link">
                <div className="blog-link__date">May 26, 2025</div>
                <img className="blog-link__img-centered" src={process.env.PUBLIC_URL + '/blog/bikepacking/start.jpeg'} alt={'Bikes loaded up with gear'}  />
                <div className="blog-link__title" >Icarus</div>
            </div>
            </a>
            <a className="blog-link__wrapper" href="/willy-good/#blog/the-maine-event">
            <div className="blog-link">
                <div className="blog-link__date">May 20, 2025</div>
                <img className="blog-link__img-centered" src={process.env.PUBLIC_URL + '/blog/maine.jpg'} alt={'photo of me in Maine'}  />
                <div className="blog-link__title" >The Hayward Help</div>
            </div>
            </a>
            <a className="blog-link__wrapper" href="/willy-good/#blog/happiest-place-on-earth">
            <div className="blog-link">
                <div className="blog-link__date">May 14, 2025</div>
                <img className="blog-link__img-centered" src={process.env.PUBLIC_URL + '/blog/windowless-plane.jpeg'} alt={'photo of plane with no window'}  />
                <div className="blog-link__title" >The Happiest Place on Earth</div>
            </div>
            </a>
            <a className="blog-link__wrapper" href="/willy-good/#blog/bikes-bridges-battery-mis-management">
            <div className="blog-link">
                <div className="blog-link__date">May 4, 2025</div>
                <img src={process.env.PUBLIC_URL + '/blog/IMG_3007.jpg'} alt={'photo of bike on bridge'}  />
                <div className="blog-link__title" >Bikes, Bridges, and Battery (Mis-)Management</div>
            </div>
            </a>
        </div>
        </Subpage></SubpageWrapper>
}

export default Blog
