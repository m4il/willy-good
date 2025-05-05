import React from 'react'
import './blogs.css'

export const BlogsWrapper = ({children = undefined}: {children?: React.ReactElement}) => {
  return <div className="blogs-wrapper">
    {children}
  </div>
}

export default BlogsWrapper
