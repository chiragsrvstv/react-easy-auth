import React from 'react'
// firebase dependencies
import * as firebase from 'firebase/app'
import 'firebase/auth'

class TwitterAuth extends React.Component {
  state = { userData: '', loading: false }

  onSignIn = () => {
    const provider = new firebase.auth.TwitterAuthProvider()
    try {
      firebase.auth().signInWithRedirect(provider)
    } catch (error) {
      console.log(error)
    }
    firebase
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

  onSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.setState({ userData: null })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  authListener = (enteredUser) => {
    this.setState({ userData: enteredUser })
    console.log(enteredUser)
    if (this.state.loading) {
      this.setState({ loading: false })
    }
  }

  componentDidMount() {
    firebase.initializeApp(this.props.firebaseConfig)
    const subscriber = firebase.auth().onAuthStateChanged(this.authListener)
    return subscriber
  }

  render() {
    if (this.state.userData) {
      return (
        <div>
          {' '}
          <button onClick={this.onSignOut}>Logout</button>{' '}
          {this.state.userData.displayName}{' '}
        </div>
      )
    }
    return (
      <div>
        Twitter Login{' '}
        <div>
          <button onClick={this.onSignIn}>Login with twitter</button>
        </div>
      </div>
    )
  }
}

export default TwitterAuth
