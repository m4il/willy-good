import React from 'react'
import { SubpageWrapper } from '../subpage-wrapper'
import Subpage from '../subpage'
import './projects.css'

export const Blog = () => {
    return <SubpageWrapper><Subpage>
        <div className="projects-list">
            {/* <a className="project-link__wrapper" href="/willy-good/#blog/bikes-bridges-battery-mis-management">
            <div className="project-link">
                <div className="project-link__date">May 4, 2025</div>
                <img alt={'photo of bike project'}  />
                <div className="project-link__title" >my scrap bikes!</div>
            </div>
            </a>
            <a className="project-link__wrapper" href="/willy-good/#blog/bikes-bridges-battery-mis-management">
            <div className="project-link">
                <div className="project-link__date">May 4, 2025</div>
                <img alt={'photo of electric guitar'}  />
                <div className="project-link__title" >homemade electric guitar</div>
            </div>
            </a> */}
            <a className="project-link__wrapper" href="/willy-good/#/?dark=true">
            <div className="project-link">
                <div className="project-link__date">May 4, 2025</div>
                <img src={process.env.PUBLIC_URL + '/website.png'} alt={'photo of bike project'}  />
                <div className="project-link__title" >This website (hard mode)</div>
            </div>
            </a>
        </div>
        </Subpage></SubpageWrapper>
}

export default Blog
