import React, { useRef, useState } from 'react'
import SubpageWrapper from '../subpage-wrapper'
import DarkPhoto from './dark-photo'
import './photo.css'
import Photography from './photography'

const horizontalMap = [
  true, true, false,
  true, true, false,
  true, true, false,
  true, true, true,
  true, true, true,
  true, true, false,
  true, true, false,
  true, true, false,
  true, true, true,
  true, true, false,
  true, false, false,
  false, true, false,
  false, true, false,
  false, false, false,
  true, true, false,
  true, false, false,
  true,
]

export const PhotogDark = () => {
  const directoryPath = '/photog/'
  const [isMobile, setIsMobile] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)


  React.useEffect(() => {
      const media = window.matchMedia('(max-width: 700px), (max-height: 800px)');
      if (media.matches !== isMobile) {
          setIsMobile(media.matches);
      }
      const listener = () => setIsMobile(media.matches);
      window.addEventListener('resize', listener);
      return () => window.removeEventListener('resize', listener);
  }, [isMobile]);


  if (isMobile) {
      return <Photography />
  }

  return (
    <div className="photog-dark">
      <SubpageWrapper ref={scrollRef}>
        <div className="photog-hallway">
          {Array.from(new Array(49)).map((_, index) => (
              <DarkPhoto key={`file_${index + 1}.jpg`} imgUrl={`${process.env.PUBLIC_URL}${directoryPath}file_${index + 1}.jpg`} horizontal={horizontalMap[index]} />
          ))}
        </div>
        <div className="photog-ceiling"></div>
        <div className="photog-floor"></div>
      </SubpageWrapper>
    </div>
    )
}

export default PhotogDark
