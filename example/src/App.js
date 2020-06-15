import React, { useState } from 'react'

import SocialAuth from 'react-easy-auth'
import 'react-easy-auth/dist/index.css'

const App = () => {
  const [user, setUser] = useState(null)

  const fetchUserData = (passedUser) => {
    setUser(passedUser)
  }

  // if (user) {
  //   return (
  //     <div>
  //       {' '}
  //       Hello {user.displayName} !
  //     </div>
  //   )
  // }

  return (
    <div>
      <h1> Super Power App </h1>
      <div>
        Social Login
        <SocialAuth
          authProvider='Twitter'
          style={{ color: 'blue'} }
          fetchUserData={fetchUserData}
        />
      </div>
    </div>
  )
}

export default App
