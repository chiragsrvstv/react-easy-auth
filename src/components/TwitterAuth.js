import React from 'react'
// firebase dependencies
import * as firebase from 'firebase/app'
import 'firebase/auth'

class TwitterAuth extends React.Component {
  state = { userData: '' }

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
    if (enteredUser) {
      this.setState({ userData: enteredUser }) // reloading the component for testing
      this.props.loginHandler(enteredUser)
      console.log(enteredUser)
    }
  }

  componentDidMount() {
    firebase.initializeApp(this.props.firebaseConfig)
    firebase.auth().onAuthStateChanged(this.authListener)
  }

  render() {
    if (this.state.userData) {
      return <button onClick={this.onSignOut}>Sign Out</button>
    }
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
