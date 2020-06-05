import React from 'react'
import styles from '../styles.module.css'

// firebase dependencies
import * as firebase from 'firebase/app'
import 'firebase/auth'

export class GoogleAuth extends React.Component {
  // initializing firebase with firebase-configuration which is received as props object
  state = { userData: '' }

  // firebase authentication listener for change in account states
  authListener = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('user signed in')
        firebase
          .auth()
          .getRedirectResult()
          .then((result) => {
            // if (result.credential) {
            //   const token = result.credential.accessToken
            // }
            // const user = result.user
            console.log(result.user)
            this.setState({ userData: result.user })
          })
          .catch((error) => {
            console.error(error)
          })
      } else {
        console.log('no user')
      }
    })
  }

  componentDidMount() {
    firebase.initializeApp(this.props.firebaseConfig)
    this.authListener()
  }

  onSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log('signed out')
      })
      .catch((error) => {
        console.log(error)
        console.log('cant sign out')
      })
  }

  onGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithRedirect(provider)
  }

  render() {
    if (this.state.userData) {
      console.log(this.state.userData)
      return (
        <div>
          {this.state.userData.displayName}
          <div>
            <button onClick={this.onSignOut}> Sign Out </button>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <div className={styles.test}>
            Example Component: {this.props.text}
          </div>
          <button onClick={this.onGoogleSignIn}> Sign In with Google </button>
          <button onClick={this.onSignOut}> Sign Out </button>
        </div>
      )
    }
  }
}
