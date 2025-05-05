import React, { useEffect, useRef, useState } from 'react'

export const DarkPhoto = ({imgUrl, horizontal = true }: {imgUrl: string, horizontal?: boolean}) => {

  const lightState = true
  return (
    <div className="dark-photo">
      <div className="blacktop-bumper" />
      <a href={imgUrl} target="_blank">
      <img className="photo-lamp" src={process.env.PUBLIC_URL + '/lamp.png'} alt={'frame'} />
      <div className={`art-light ${lightState ? '' : 'art-light--off'}`}>
          <div className={`art-frame`}>
          <img className={`art-frame__frame ${horizontal ? 'art-frame__frame--horizontal' : ''}`} src={process.env.PUBLIC_URL + '/frame.png'} alt={'frame'} />
          <div className={`dark-photo-matte ${horizontal ? 'dark-photo-matte--horizontal' : ''}`}>
            <img className="dark-photo__photo" src={imgUrl} alt={imgUrl} />
          </div>
          </div>
      </div>
      </a>
    </div>
  )
}

export default DarkPhoto
