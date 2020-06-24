import React from 'react'

// importing firebase configuration and dependencies
import { firebaseConfig } from './firebaseConfig'

import Auth from './components/auth'

export class SocialSignIn extends React.Component {
  state = { userCredentials: null, error: null }

  authListener = (user) => {
    /* 
  a method that sets the userData state when a user signs-in and 
  it also sends that data back to the parent component with the help 
  of fetchUserData prop 
  */
    if (user) {
      this.props.fetchUserData(user, this.state.userCredentials, null)
    }
  }

  fetchAuthData = (credentials, error) => {
    /* 
    a method to fetch user credentials(after successful sign-in) 
    from auth component 
  */
    if (error) {
      this.props.fetchUserData(null, null, error)
    }
    this.setState({ userCredentials: credentials, error: error })
  }

  componentDidMount() {
    /* 
    activating the firebase authentication state observer, it listens 
    for changes in the authentication state and executes the function(or observer)
    passed to it everytime the authentication state changes 
  */
    firebaseConfig.auth().onAuthStateChanged(this.authListener)
  }

  render() {
    /*
    The Auth component is rendered that provides the sign-in facility. 
    Props coming down from the parent are passed to the Auth component.
    */
    return (
      <Auth
        style={this.props.style}
        authProvider={this.props.authProvider}
        scopes={this.props.scopes}
        fetchAuthData={this.fetchAuthData}
      />
    )
  }
}

export class SocialSignOut extends React.Component {
  SignOutHandler = () => {
    // a method to sign users out
    firebaseConfig
      .auth()
      .signOut()
      .then(() => {
        this.props.onSignOut(null)
      })
      .catch((error) => {
        this.props.onSignOut(error)
      })
  }

  render() {
    return (
      <button style={this.props.style} onClick={this.SignOutHandler}>
        Sign Out
      </button>
    )
  }
}
