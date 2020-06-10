import React from 'react'

import { firebaseConfig, firebaseConfigAuth } from '../firebaseConfig'

const auth = ({ authProvider }) => {
  let provider
  /*
  switch cases to initialize an instance of the provider
  */
  switch (authProvider) {
    case 'Twitter':
      provider = new firebaseConfigAuth.TwitterAuthProvider()
      break
    case 'Google':
      provider = new firebaseConfigAuth.GoogleAuthProvider()
      break
    case 'Facebook':
      provider = new firebaseConfigAuth.FacebookAuthProvider()
      break
    case 'LinkedIn':
      provider = new firebaseConfigAuth.LinkedInAuthProvider()
      break
    default:
      provider = null
  }

  /* 
  method to handle sign-in functionality with firebase
  */
  const onSignIn = () => {
    try {
      firebaseConfig.auth().signInWithRedirect(provider)
    } catch (error) {
      console.log(error)
    }
    firebaseConfig
      .auth()
      .getRedirectResult()
      .then((result) => {
        const user = result.user
        const token = result.credential.accessToken
        const secret = result.credential.secret
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <div>
      <button onClick={onSignIn}>Sign In with {authProvider}</button>
    </div>
  )
}

export default auth
