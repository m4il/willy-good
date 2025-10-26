import React, { useState } from "react"
import './blog.css'


const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbxXfxcaElye_fBuEk4pwSUn7m_lBcFgyjcKHwJ5PHevHViHQMg6z4WgDePFr3gAqWA8/exec'

export const Subscribe = () => {
    const [email, setEmail] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setSuccess] = useState(false)
    const handleSubmit = async () => {
        setIsLoading(true)
        try {
            const res = await fetch(WEB_APP_URL, {
                redirect: "follow",
                mode: "no-cors",
                method: "POST",
                headers: { "Content-Type": "text/plain;charset=utf-8", "Host": "script.google.com", },
                body: JSON.stringify({ email: email }),
            })
            setSuccess(true)
            setIsLoading(false)
        } catch (error) {
            console.error('Error subscribing:', error);
            alert('Failed to subscribe. Please try again.');
            setIsLoading(false)
            setSuccess(false)
        }
    }

    return <div className="subscribe__wrapper">
        {isSuccess ? (
            <div className="subscribed">Success! Keep an eye out, you'll receive emails at {email} with my blog updates.</div>
        ) :
            (<div className="subscribe">
                <input disabled={isLoading} className="subscribe__input" placeholder="john@doe.com" value={email} onChange={(str) => setEmail(str.currentTarget.value)}></input>
                <button disabled={isLoading} className="subscribe__button" onClick={handleSubmit}>Subscribe</button>
            </div>)
        }
    </div>
}