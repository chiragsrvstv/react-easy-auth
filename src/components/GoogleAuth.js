import React from 'react'
import styles from '../styles.module.css'

// firebase dependencies
import * as firebase from 'firebase/app'
import 'firebase/auth'

export class GoogleAuth extends React.Component {
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
            this.setState({ initializing: false })
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

  onSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithRedirect(provider)
  }

  display = () => (
    <div>
      {this.state.userData.displayName}
      <div>
        <button onClick={this.onSignOut}> Sign Out </button>
      </div>
    </div>
  )

  render() {
    if (this.state.userData) {
      // console.log(this.state.userData)
      return this.display()
    } else {
      return (
        <div>
          <div className={styles.test}>
            Example Component: {this.props.text}
          </div>
          <button onClick={this.onSignIn}> Sign In with Google </button>
          <button onClick={this.onSignOut}> Sign Out </button>
        </div>
      )
    }
  }
}
