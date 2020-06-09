import React, { useState } from 'react'

import SocialAuth from 'react-easy-auth'
import 'react-easy-auth/dist/index.css'

import { firebaseConfig } from './firebaseConfig.js'

const App = () => {
  const [user, setUser] = useState(null)

  const fetchUserData = (passedUser) => {
    setUser(passedUser)
  }

  // if (user) {
  //   return <div> Hello {user.displayName} ! </div>
  // }

  return (
    <div>
      <h1> Super Power App </h1>
      <div>
        Social Login
        <SocialAuth
          firebaseConfig={firebaseConfig}
          fetchUserData={fetchUserData}
        />
      </div>
    </div>
  )
}

export default App
