import React, { useState } from 'react'

import { SocialSignIn, SocialSignOut } from 'react-easy-auth'

const App = () => {
  const [user, setUser] = useState(null)

  //a method to fetch the data after user signs-in
  const fetchUserData = (userData, userCredentials, error) => {
    if (error) {
      console.error(error)
    }
    setUser(userData)
  }

  // a method to handle user sign-out// 
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
        <SocialSignOut style={{ color: 'red' }} onSignOut={onSignOut} />
      </div>
    )
  }

  return (
    <div>
      <h1> Super Power App </h1>
      <div>
        Social Login
        <SocialSignIn
          authProvider='Twitter'
          style={{ color: 'green', fontSize: '20px', borderRadius: '5px' }}
          fetchUserData={fetchUserData}
        />
        <SocialSignIn
          authProvider='Google'
          style={{ color: 'red', fontSize: '20px', borderRadius: '5px' }}
          fetchUserData={fetchUserData}
          scopes='https://www.googleapis.com/auth/androidpublisher'
        />
        <SocialSignIn
          authProvider='Facebook'
          style={{ color: 'blue', fontSize: '20px', borderRadius: '5px' }}
          fetchUserData={fetchUserData}
        />
        <SocialSignIn
          authProvider='Microsoft'
          style={{ color: 'cyan', fontSize: '20px', borderRadius: '5px' }}
          fetchUserData={fetchUserData}
        />
      </div>
    </div>
  )
}

export default App
