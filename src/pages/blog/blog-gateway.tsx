import { useState } from "react"
import SubpageWrapper from "../subpage-wrapper"
import Subpage from "../subpage"

interface Props {
  children?: React.ReactNode
  password?: string
}

export const BlogGateway = ({children, password}: Props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(password ? false : true)
  const [pwd, setPwd] = useState('')

  const handleSubmit = () => {
    if (pwd === password) {
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

  return children
}

export default BlogGateway
