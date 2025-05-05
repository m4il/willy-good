import React from 'react'
import { SubpageWrapper } from '../subpage-wrapper'
import './photo.css'

export const Photo = ({imgUrl}: {imgUrl: string}) => {
    return <img className="photo" src={imgUrl} alt={imgUrl} />
}

export const Photography = () => {
    const directoryPath = '/photog/'

    return <SubpageWrapper>
        <div className="photog">

        {Array.from(new Array(49)).map((_, index) => (
            <Photo key={`file_${index + 1}.jpg`} imgUrl={`${process.env.PUBLIC_URL}${directoryPath}file_${index + 1}.jpg`} />
        ))}
        </div>
    </SubpageWrapper>
}

export default Photography
