import React from 'react'

// importing firebase configuration and dependencies
import { firebaseConfig, firebaseConfigAuth } from '../firebaseConfig'

class TwitterAuth extends React.Component {
  /* 
  method to handle sign-in with Twitter functionality
  */
  onSignIn = () => {
    const provider = new firebaseConfigAuth.TwitterAuthProvider()
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

  render() {
    return (
      <div>
        <div>
          <button onClick={this.onSignIn}>Sign In with twitter</button>
        </div>
      </div>
    )
  }
}
export default TwitterAuth
