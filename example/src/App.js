import React from 'react'

import { GoogleLogin, TwitterLogin } from 'react-easy-auth'
import 'react-easy-auth/dist/index.css'

import { firebaseConfig } from './firebaseConfig.js'

const App = () => {
  return (
    <div>
      <h1> Super Power App </h1>
      <TwitterLogin
        text='Create React Library Example Boo 😄'
        firebaseConfig={firebaseConfig}
      />
    </div>
  )
}

export default App
