import React from 'react'

// importing firebase configuration and dependencies
import { firebaseConfig, firebaseConfigAuth } from '../firebaseConfig'

const auth = ({ authProvider, style, fetchUserCredentials, scopes }) => {
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
    provider = scopes ? provider.addScope(scopes) : provider
    firebaseConfig
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const credential = result.credential
        const user = result.user
        fetchUserCredentials(user)
      })
      .catch((error) => {
        console.error(error)
        if (error.code === 'auth/account-exists-with-different-credential') {
          if (typeof window !== 'undefined') {
            alert(
              'An account already exists with the same email address. You have already signed up with a different auth provider for that email.'
            )
          }
        }
      })
  }

  return (
    <div>
      <button style={style} onClick={onSignIn}>
        Sign In with {authProvider}
      </button>
    </div>
  )
}

export default auth
