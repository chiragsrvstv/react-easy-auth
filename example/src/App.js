import React from 'react'

import { GoogleLogin } from 'react-easy-auth'
import 'react-easy-auth/dist/index.css'

import {firebaseConfig} from './firebaseConfig.js'

const App = () => {
  return (
    <GoogleLogin
      text='Create React Library Example Boo 😄'
      firebaseConfig={firebaseConfig}
    />
  )
}

export default App
