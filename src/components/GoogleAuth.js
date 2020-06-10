import React from 'react'
// import styles from '../styles.module.css'

// importing firebase configuration and dependencies
import { firebaseConfig, firebaseConfigAuth } from '../firebaseConfig'

class GoogleAuth extends React.Component {
  /* 
  method to handle sign-in with Twitter functionality
  */
  onSignIn = () => {
    try {
      const provider = new firebaseConfigAuth.GoogleAuthProvider()
      firebaseConfig.auth().signInWithRedirect(provider)
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.onSignIn}> Sign In with Google </button>
      </div>
    )
  }
}

export default GoogleAuth
