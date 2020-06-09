import React, { useState, useEffect } from 'react'

import { GoogleLogin, TwitterLogin, Logout } from 'react-easy-auth'
import 'react-easy-auth/dist/index.css'

import { firebaseConfig } from './firebaseConfig.js'

const App = () => {
  const [user, setUser] = useState(null)

  const loginHandler = (passedUser) => {
    setUser(passedUser)
  }

  // if (user) {
  //   return <div> Hello {user.displayName} ! </div>
  // }

  return (
    <div>
      <h1> Super Power App </h1>
      <div>
        TwitterLogin
        <TwitterLogin
          text='Create React Library Example Boo 😄'
          firebaseConfig={firebaseConfig}
          loginHandler={loginHandler}
        />
      </div>
    </div>
  )
}

export default App
