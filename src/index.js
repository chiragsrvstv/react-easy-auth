import React from 'react'
import * as firebase from 'firebase/app'

import { GoogleAuth } from './components/GoogleAuth'
import TwitterAuth from './components/TwitterAuth'

// googe login component
export const GoogleLogin = (props) => {
  return <GoogleAuth firebaseConfig={props.firebaseConfig} />
}

// twitter login component
export const TwitterLogin = (props) => {
  return (
    <TwitterAuth
      firebaseConfig={props.firebaseConfig}
      loginHandler={props.loginHandler}
    />
  )
}


