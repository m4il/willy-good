import React from 'react'

export const YouGotMail = ({numUnread = 0, isActive, setIsActive}: {numUnread?: number, isActive: boolean, setIsActive: (b: boolean) => void}) => {
  return isActive ? (<div className="you-got-mail__overlay">
      <div className="you-got-mail">
        <div className="you-got-mail__content">
        <div className="you-got-mail__header">
          <h5>
            You've Got Mail!
          </h5>
          <button onClick={() => setIsActive(false)}>
            X
          </button>
          </div>
          <div className="you-got-mail__body">
        {/* <h5>
          Your inbox has 5 unread messages
        </h5> */}
        <p>As generative ai attempts to take over the world, recruiters have successfully taken over my inbox. The hype is inescapable -- AI is coming for my job. A mere "human" coder, my skills will soon render useless, forcing me to make an inevitable career shift. </p>
        <p>So then why is my inbox full of recruiters? As it turns out, venture capital investors are literally giving away money to any tech bro with a chat gpt subscription and a pitch deck for an ai drag and drop workflow builder.</p>
        <p>In an attempt to cut down on internet clutter, I've redacted some of these such emails for your reading.</p>
        <p>This post is inspired by Ben Grosser's redaction poetry of Andreessen's Techno-Optimist Manifesto, which you should absolutely read <a href="https://bengrosser.com/blog/andreessens-techno-optimist-manifesto-as-redaction-poetry/">here</a>.</p>
        <button onClick={() => setIsActive(false)}>OK</button>
        </div>
        </div>
      </div>
    </div>) : null
}

export default YouGotMail
