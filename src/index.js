import React from 'react'

// importing firebase configuration and dependencies
import { firebaseConfig } from './firebaseConfig'

import Auth from './components/auth'
import Spinner from './components/Spinner'

export class SocialAuth extends React.Component {
  state = { userCredentials: null }
  /* 
  a method that sets the userData state when a user signs-in and 
  it also sends that data back to the parent component with the help 
  of fetchUserData prop 
  */
  authListener = (user) => {
    if (user) {
      this.props.fetchUserData(user, this.state.userCredentials)
    }
  }

  /*
  a method to get Back redirected result if the 
  user has requested a sign-in process
  */
  getSignInResults = () => {
    firebaseConfig
      .auth()
      .getRedirectResult()
      .then((result) => {
        const user = result.user
        const token = result.credential.accessToken
        const secret = result.credential.secret
        this.setState({ userCredentials: result })
        if (typeof window !== 'undefined') {
          localStorage.removeItem('initializer')
        }
      })
      .catch((error) => {
        if (error.code === 'auth/account-exists-with-different-credential') {
          alert(
            'You have already signed up with a different auth provider for that email.'
          )
          // If you are using multiple auth providers on your app you should handle linking
          // the user's accounts here.
        }
        console.error(error)
        if (typeof window !== 'undefined') {
          localStorage.removeItem('initializer')
        }
      })
  }

  /* 
    activating the firebase authentication state observer, it listens 
    for changes in the authentication state and executes the function(or observer)
    passed to it everytime the authentication state changes 

  */
  componentDidMount() {
    this.getSignInResults()
    firebaseConfig.auth().onAuthStateChanged(this.authListener)
  }

  /* 
  a method to show content on screen
  */
  renderContent() {
    /* 
    if localstorage doesn't contain initializing variable,
    the Spinner component is rendered     
    */
    if (typeof window !== 'undefined') {
      if (localStorage.getItem('initializer') === 'initializing') {
        return <Spinner loaderImage={this.props.loaderImage} />
      }
    }
    /*
    The Auth component is rendered that provides the sign-in facility. 
    style and authProvider props coming from the parent component are
    passed down again as props
    */
    return (
      <Auth style={this.props.style} authProvider={this.props.authProvider} />
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
