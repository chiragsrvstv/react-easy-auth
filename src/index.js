import React from 'react'

// importing firebase configuration and dependencies
import { firebaseConfig } from './firebaseConfig'

import GoogleAuth from './components/GoogleAuth'
import TwitterAuth from './components/TwitterAuth'

class SocialAuth extends React.Component {
  state = { userData: '' }

  /* 
  a method that sets the userData state when a user signs-in and 
  it also sends that data back to the parent component with the help of fetchUserData prop 
  */
  authListener = (enteredUser) => {
    if (enteredUser) {
      this.setState({ userData: enteredUser }) // reloading the component for testing
      this.props.fetchUserData(enteredUser)
      console.log(enteredUser)
    }
  }

  // a method to sign users out
  SignOutHandler = () => {
    firebaseConfig
      .auth()
      .signOut()
      .then(() => {
        this.setState({ userData: null })
        console.log('signed out')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  /* 
    activating the firebase authentication state observer, it listens for changes in the authentication state
    and executes the function(or observer) passed to it everytime the authentication state changes 
  */
  componentDidMount() {
    firebaseConfig.auth().onAuthStateChanged(this.authListener)
  }

  render() {
    if (this.state.userData) {
      return <button onClick={this.SignOutHandler}> Sign Out </button>
    }
    return (
      <div>
        <TwitterAuth />
        <GoogleAuth />
      </div>
    )
  }
}

export default SocialAuth
