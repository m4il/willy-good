import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SubpageWrapper from '../../../subpage-wrapper'
import TheCompany from './the-company'
import "./redactive-recruiting.css"
import YouGotMail from './you-got-mail'
import DoomScrolling from './doom-scrolling'
import Angels from './angels'
import NSFW from './nsfw'

export const RedactiveRecruiting = () => {
  const [activePage, setActivePage] = useState(0)
  const [isHelpOpen, setIsHelpOpen] = useState(true)
  const navigate = useNavigate()
  const numUnread = 3


  return (
    <div className="redactive-recruiting__wrapper">
    <SubpageWrapper navbarChildren={
      <div className='navbar-chilren-recruiting'>
      <button onClick={() => navigate("/")}>home</button>
      <button onClick={() => setIsHelpOpen(true)}>?</button>
      </div>
    } >
      <div className="redactive-recruiting-inbox">
        <div className="redactive-recruiting-picker">
        <div className="redactive-recruiting-picker__title">INBOX</div>
        <ul className="redactive-recruiting-picker__list">
          <li className="redactive-recruiting-picker__li">
            <button onClick={() => setActivePage(4)} className={`redactive-recruiting-picker__btn ${activePage === 4 && 'rrpb-active'}`}>
              <div className="redactive-recruiting-picker__btn__subject">
                NSFW
              </div>
              <div>
              <div className="redactive-recruiting-picker__btn__content">
                will
              </div>
              <div className="redactive-recruiting-picker__btn__date">
                june 21 2024
              </div>
              </div>
            </button>
          </li>
          <li className="redactive-recruiting-picker__li">
            <button onClick={() => setActivePage(1)} className={`redactive-recruiting-picker__btn ${activePage === 1 && 'rrpb-active'}`}>
              <div className="redactive-recruiting-picker__btn__subject">
                Allegience to "The Company"
              </div>
              <div>
              <div className="redactive-recruiting-picker__btn__sender">
                will
              </div>
              <div className="redactive-recruiting-picker__btn__date">
                june 21 2024
              </div>
              </div>
            </button>
          </li>
          <li className="redactive-recruiting-picker__li">
            <button onClick={() => setActivePage(2)} className={`redactive-recruiting-picker__btn ${activePage === 2 && 'rrpb-active'}`}>
              <div className="redactive-recruiting-picker__btn__subject">
                Doom Scrolling
              </div>
              <div>
              <div className="redactive-recruiting-picker__btn__content">
                will
              </div>
              <div className="redactive-recruiting-picker__btn__date">
                june 21 2024
              </div>
              </div>
            </button>
          </li>
          <li className="redactive-recruiting-picker__li">
            <button onClick={() => setActivePage(3)} className={`redactive-recruiting-picker__btn ${activePage === 3 && 'rrpb-active'}`}>
              <div className="redactive-recruiting-picker__btn__subject">
                Angels
              </div>
              <div>
              <div className="redactive-recruiting-picker__btn__content">
                hanna
              </div>
              <div className="redactive-recruiting-picker__btn__date">
                june 21 2024
              </div>
              </div>
            </button>
          </li>
        </ul>
        </div>
        <div className="redactive-recruiting-focus">
          {activePage === 1 && (<TheCompany />)}
          {activePage === 2 && (<DoomScrolling />)}
          {activePage === 3 && (<Angels />)}
          {activePage === 4 && (<NSFW />)}
          {activePage <1 || activePage > 4 && (null)}
        </div>
      </div>
      <YouGotMail isActive={isHelpOpen} setIsActive={setIsHelpOpen} />
    </SubpageWrapper>
  </div>
  )
}

export default RedactiveRecruiting
