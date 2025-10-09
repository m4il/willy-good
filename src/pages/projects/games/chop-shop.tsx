import React, { useEffect, useState } from 'react'
import SubpageWrapper from '../../subpage-wrapper'
import Modal from '../../../components/modal/modal'
import './chop-shop.css'


const ChopShopModal = () => {
  const [isChopModalOpen, setIsChopModalOpen] = useState(true)
  const [isReadyToChop, setIsReadyToChop] = useState(false)
  const [countDownTimer, setCountDownTimer] = useState(300)
  const [chopTimer, setChopTimer] = useState(10)
  const [chopCount, setChopCount] = useState(0)

  const isCountingDown = isReadyToChop && countDownTimer !== 0
  const isChopping = isReadyToChop && !isCountingDown && chopTimer !== 0

  useEffect(() => {
    if (!isChopping){
      return
    }
      setTimeout(() => {
        setChopTimer((old) => old - 1)
      }, 1000)
  }, [isChopping, chopTimer, setChopTimer])

  useEffect(() => {
    if (!isCountingDown) {
      return
    }
    setTimeout(() => {
      setCountDownTimer((oldCountDown) => oldCountDown - 1)
    }, 10)
  }, [isCountingDown, countDownTimer, setCountDownTimer])

  useEffect(() => {
    /* Reset Values */
    return (() => {
      setIsReadyToChop(false)
      setCountDownTimer(300)
      setChopTimer(10)
      setChopCount(0)
    })
  }, [])

  const conicalGradientString = `conic-gradient(white ${100 - countDownTimer % 100}%, black 0)`

  return isChopModalOpen ? <Modal isActive={isChopModalOpen} header="Alert!" body={<>
    {isReadyToChop ? (
      <>
        {isCountingDown ? (
          <div className="countdown-timer-bg" style={{background: conicalGradientString}}>{Math.ceil(countDownTimer/100)}</div>
        ) : (<>{isChopping ? (<div>
            <div className="chop-trees-header"><div>Chop count: {chopCount}</div>time: {chopTimer}</div>
            <div className="chop-trees-wrapper">
            <button className='chop-trees' onClick={() => setChopCount((oldCount) => oldCount + 1)}>
              <div className='tree-stump' />
              <div className='tree-bottom-triangle' />
              <div className='tree-middle-triangle' />
              <div className='tree-top-triangle' />
            </button>
            </div>
          </div>) : (<>
            <p>Woohoo!</p><p>You successfully logged {chopCount} old growth trees!</p><p>You escaped quickly, and a local smuggler paid you {chopCount} gold for the load. What a great capitalist you are!</p>
            <div className="chop-shop-chopping-buttons"><button>Quit</button><button>Continue</button></div>
            </>
          )}</>)}
      </>
    ) : (
      <div>
      <div>
        Hoo-Rah! You have stumbled upon an old growth forest. The authorities are hot on your tail, so better chop 'em quick. Click/tap the trees to cut down as many as you can before you run out of time!
      </div>
      <button onClick={() => setIsReadyToChop(true)}>start</button>
    </div>
    )}
    </>} setIsActive={setIsChopModalOpen} /> : null
}


const ChopShop = () => {

  return (<SubpageWrapper>
        <div className="chop-shop__sky">
          <ChopShopModal />
          <div className="chop-shop__mountain-1" />
          <div className="chop-shop__clouds">
            <div className="chop-shop__cloud-1" />
            <div className="chop-shop__cloud-2" />
            <div className="chop-shop__cloud-3" />
            <div className="chop-shop__cloud-4" />
          </div>
          <div className="chop-shop__mountain-2" />
          <div className="chop-shop__mountain-3" />
          <div className="chop-shop__mountain-4" />
          <div className="chop-shop__mountain-5" />
          <div className="chop-shop__airplane">
            <div className="chop-shop__airplane-body" />
            <div className="chop-shop__airplane-wing" />
            <div className="chop-shop__airplane-wing2" />
          </div>
        </div>
      </SubpageWrapper>
  )
}

export default ChopShop
