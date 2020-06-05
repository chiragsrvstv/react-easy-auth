import React from 'react'

import { GoogleAuth } from './components/GoogleAuth'

export const GoogleLogin = (props) => {
  return <GoogleAuth firebaseConfig={props.firebaseConfig} />
}
