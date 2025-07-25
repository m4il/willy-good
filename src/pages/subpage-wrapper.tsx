import React, { forwardRef } from 'react'
import './subpage.css'

interface Props {
    children?: React.ReactNode
    ref?: React.Ref<HTMLDivElement>
    navbarChildren?: React.ReactNode
}
export const SubpageWrapper = ({ children = undefined, ref = undefined, navbarChildren = undefined }: Props) => {
    return <div className="subpage-wrapper">
        <div className='navbar'>
            <a className="navbar-home" href="/willy-good/"><img src={process.env.PUBLIC_URL + "/pixel-couch.png"}></img></a>
            {navbarChildren}
        </div>
        <div className="content" ref={ref}>{children}</div>
    </div>
}

export default SubpageWrapper
