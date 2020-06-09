import React from 'react'
import styles from '../styles.module.css'


export class GoogleAuth extends React.Component {
  state = { userData: '' }

  // firebase authentication listener for change in account states
  authListener = (enteredUser) => {
    if (enteredUser) {
      console.log(enteredUser)
      this.setState({ userData: enteredUser }) // re-rendering component for testing
      this.props.loginHandler(enteredUser)
    }
  }

  componentDidMount() {
    firebase.initializeApp(this.props.firebaseConfig)
    firebase.auth().onAuthStateChanged(this.authListener)
  }

  // method to handle sign-out functionality
  onSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log('signed out')
        this.setState({ userData: null })
      })
      .catch((error) => {
        console.log(error)
        console.log('cant sign out')
      })
  }

  // method to handle sign-in functionality
  onSignIn = () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithRedirect(provider)
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    if (this.state.userData) {
      return <button onClick={this.onSignOut}> Sign Out </button>
    }
    return (
      <div>
        <button onClick={this.onSignIn}> Sign In with Google </button>
      </div>
    )
  }
}
