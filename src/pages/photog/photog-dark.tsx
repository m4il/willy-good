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
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [isScrolling, setIsScrolling] = useState<number | undefined>(undefined)
  const [showHint, setShowHint] = useState(false)
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

  React.useEffect(() => {
      const listener = () => {
        setScreenWidth(window.innerWidth)
      }
      window.addEventListener('resize', listener);
      return () => window.removeEventListener('resize', listener);
  }, [isMobile]);

  React.useEffect(() => {
    function handleMouseMove(event) {
        const { clientX } = event;

        const bottomThird = screenWidth / 3
        const bottomSixth = screenWidth / 6
        const bottomTwelfth = screenWidth / 12
        const topThird = screenWidth * 2 / 3
        const topSixth = screenWidth * 5 / 6
        const topTwelfth = screenWidth * 11 / 12

        if (clientX < bottomTwelfth) {
            setIsScrolling(-6)
        } else if (clientX < bottomSixth) {
            setIsScrolling(-3)
        } else if (clientX < bottomThird) {
            setIsScrolling(-1)
        } else if (clientX > topTwelfth) {
          setIsScrolling(6)
        } else if (clientX > topSixth) {
            setIsScrolling(3)
        } else if (clientX > topThird) {
            setIsScrolling(1)
        } else {
          setIsScrolling(undefined)
        }
    }
    document.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [screenWidth])


  React.useEffect(() => {
    setTimeout(() => {
      setShowHint(true)
    }, 5000)
  }, [])

  React.useEffect(()=> {
    const intervalId = setInterval(() => {
      if (scrollRef.current && isScrolling !== undefined) {
        scrollRef.current.scrollLeft = scrollRef.current.scrollLeft + isScrolling
      }
    }, 15)

    return () => clearInterval(intervalId)
  }, [isScrolling])

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
        <div className="photog-floor">
          {showHint && <a href="/willy-good/#photography" className="photog-floor-gallery">{'[][][][][][] gallery view [][][][][][]'}</a>}
        </div>
      </SubpageWrapper>
    </div>
    )
}

export default PhotogDark
