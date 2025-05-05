import React from 'react'
import { SubpageWrapper } from '../subpage-wrapper'
import Subpage from '../subpage'
import './blog.css'

export const Blog = () => {
    return <SubpageWrapper><Subpage>
        <div className="blogs-list">
            <a href="/willy-good/#blog/bikes-bridges-battery-mis-management">
            <div className="blog-link">
                <img src={process.env.PUBLIC_URL + '/blog/IMG_3007.jpg'} alt={'photo of bike on bridge'}  />
                <div>Bikes, Bridges, and Battery (Mis-)Management</div>
            </div>
            </a>
        </div>
        </Subpage></SubpageWrapper>
}

export default Blog
