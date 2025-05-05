import { useState } from "react"
import AmsterdamBlog from "./amsterdam-blog"
import SubpageWrapper from "../../../subpage-wrapper"
import Subpage from "../../../subpage"

export const AmsterdamGateway = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [pwd, setPwd] = useState('')

  const handleSubmit = () => {
    if (pwd === 'tulip') {
      setIsLoggedIn(true)
    }
    setPwd('')
  }

  if (!isLoggedIn) {
    return (
      <SubpageWrapper>
          <Subpage>
    <div style={{margin: 10, display: 'flex', flexDirection: 'column', gap: 4}}>
      <div>
      <label>Password:</label>
      </div>
      <div>
      <input value={pwd} onChange={(e) => setPwd(e.currentTarget.value)}></input>
      <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
    </Subpage>
  </SubpageWrapper>
    )
  }

  return (
    <AmsterdamBlog />
  )
}

export default AmsterdamGateway
