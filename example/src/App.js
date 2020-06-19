import React, { useState } from 'react'

import { SocialAuth, SocialAuthSignOut } from 'react-easy-auth'

const App = () => {
  const [user, setUser] = useState(null)

  const fetchUserData = (passedUser) => {
    setUser(passedUser)
  }

  const onSignOut = () => {
    setUser(null)
  }

  if (user) {
    return (
      <div>
        <h3> {user.displayName} </h3>
        <SocialAuthSignOut style={{ color: 'red' }} onSignOut={onSignOut} />
      </div>
    )
  }

  return (
    <div>
      <h1> Super Power App </h1>
      <div>
        Social Login
        <SocialAuth
          authProvider='Twitter'
          style={{ color: 'green', fontSize: '20px', borderRadius: '5px' }}
          fetchUserData={fetchUserData}
        />
        <SocialAuth
          authProvider='Google'
          style={{ color: 'red', fontSize: '20px', borderRadius: '5px' }}
          fetchUserData={fetchUserData}
          loaderImage='/refresh.png'
        />
        <SocialAuth
          authProvider='Facebook'
          style={{ color: 'blue', fontSize: '20px', borderRadius: '5px' }}
          fetchUserData={fetchUserData}
        />
      </div>
    </div>
  )
}

export default App
