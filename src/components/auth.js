import React from 'react'

// importing firebase configuration and dependencies
import { firebaseConfig, firebaseConfigAuth } from '../firebaseConfig'

const auth = ({ authProvider }) => {
  let provider

  /*
  switch cases to initialize an instance of the provider(Twitter, Google, etc.)
  object according to the authProvider prop passed from parent(SocialAuth) component
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
    case 'Github':
      provider = new firebaseConfigAuth.GithubAuthProvider()
      break
    case 'Microsoft':
      provider = new firebaseConfigAuth.OAuthProvider('microsoft.com')
      break
    case 'Apple':
      provider = new firebaseConfigAuth.OAuthProvider('apple.com')
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
    if (typeof window !== 'undefined') {
      localStorage.setItem('loader', 'loading')
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
