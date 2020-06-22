import React from 'react'

// importing firebase configuration and dependencies
import { firebaseConfig } from './firebaseConfig'

import Auth from './components/auth'

export class SocialAuth extends React.Component {
  state = { userCredentials: null }
  /* 
  a method that sets the userData state when a user signs-in and 
  it also sends that data back to the parent component with the help 
  of fetchUserData prop 
  */
  authListener = (user) => {
    if (user) {
      console.log(user)
      this.props.fetchUserData(user, this.state.userCredentials)
    }
  }

  /* 
    a method to fetch user credentials(after successful sign-in) from auth component 
  */
  fetchUserCredentials = (credentials) => {
    this.setState({ userCredentials: credentials })
  }

  /* 
    activating the firebase authentication state observer, it listens 
    for changes in the authentication state and executes the function(or observer)
    passed to it everytime the authentication state changes 

  */
  componentDidMount() {
    firebaseConfig.auth().onAuthStateChanged(this.authListener)
  }

  /* 
  a method to show content on screen
  */
  renderContent() {
    /*
    The Auth component is rendered that provides the sign-in facility. 
    style and authProvider props coming from the parent component are
    passed down again as props
    */

    return (
      <Auth
        style={this.props.style}
        authProvider={this.props.authProvider}
        scopes={this.props.scopes}
        fetchUserCredentials={this.fetchUserCredentials}
      />
    )
  }

  render() {
    return <div>{this.renderContent()}</div>
  }
}

export class SocialAuthSignOut extends React.Component {
  // a method to sign users out
  SignOutHandler = () => {
    firebaseConfig
      .auth()
      .signOut()
      .then(() => {
        console.log('signed out')
        // executing the signOut function received as props from the parent component
        this.props.onSignOut()
      })
      .catch((error) => {
        console.log(error)
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
