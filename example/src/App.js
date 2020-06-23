import React, { useState } from 'react'

import { SocialAuth, SocialAuthSignOut } from 'react-easy-auth'

const App = () => {
  const [user, setUser] = useState(null)

  const fetchUserData = (userData, userCredentials, error) => {
    if (error) {
      console.error(error)
    }
    setUser(userData)
  }

  const onSignOut = (error) => {
    if (!error) {
      console.log('signed out')
      setUser(null)
    }
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
          scopes='https://www.googleapis.com/auth/androidpublisher'
        />
        <SocialAuth
          authProvider='Facebook'
          style={{ color: 'blue', fontSize: '20px', borderRadius: '5px' }}
          fetchUserData={fetchUserData}
        />
        <SocialAuth
          authProvider='Microsoft'
          style={{ color: 'cyan', fontSize: '20px', borderRadius: '5px' }}
          fetchUserData={fetchUserData}
        />
      </div>
    </div>
  )
}

export default App
