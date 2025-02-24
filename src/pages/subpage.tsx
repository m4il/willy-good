import React from 'react'
import './subpage.css'

interface Props {
    children?: React.ReactNode
}
export const Subpage = ({ children = undefined }: Props) => {
    return <div className="subpage">
        {children}
    </div>
}

export default Subpage