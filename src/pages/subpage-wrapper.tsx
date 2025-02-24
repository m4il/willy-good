import React from 'react'
import './subpage.css'

interface Props {
    children?: React.ReactNode
}
export const SubpageWrapper = ({ children = undefined }: Props) => {
    return <div className="subpage-wrapper">
        <div className='navbar'>
            <a className="navbar-home" href="/willy-good/"><img src={process.env.PUBLIC_URL + "/pixel-couch.png"}></img></a>
        </div>
        <div className="content">{children}</div>
    </div>
}

export default SubpageWrapper