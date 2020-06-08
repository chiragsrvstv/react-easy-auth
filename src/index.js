import React from 'react'



import { GoogleAuth } from './components/GoogleAuth'
import TwitterAuth from './components/TwitterAuth'

export const GoogleLogin = (props) => {
  return <GoogleAuth firebaseConfig={props.firebaseConfig} />
}

export const TwitterLogin = (props) => {
  return <TwitterAuth firebaseConfig={props.firebaseConfig} />
}
