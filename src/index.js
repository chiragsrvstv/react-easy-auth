import React from 'react'

// importing firebase configuration and dependencies
import { firebaseConfig } from './firebaseConfig'

import Auth from './components/auth'
import Spinner from './components/Spinner'

export class SocialAuth extends React.Component {
  state = { userData: null }

  /* 
  a method that sets the userData state when a user signs-in and 
  it also sends that data back to the parent component with the help 
  of fetchUserData prop 
  */
  authListener = (enteredUser) => {
    console.log('auuth listener')
    if (enteredUser) {
      this.setState({ userData: enteredUser }) // reloading the component for testing
      this.props.fetchUserData(enteredUser)
    }
  }

  init = () => {
    firebaseConfig
      .auth()
      .getRedirectResult()
      .then((result) => {
        const user = result.user
        const token = result.credential.accessToken
        const secret = result.credential.secret
        if (typeof window !== 'undefined') {
          localStorage.removeItem('initializer')
        }
      })
      .catch((error) => {
        console.error(error)
        if (typeof window !== 'undefined') {
          localStorage.removeItem('initializer')
          this.setState({ userData: null })
        }
      })
  }

  /* 
    activating the firebase authentication state observer, it listens 
    for changes in the authentication state and executes the function(or observer)
    passed to it everytime the authentication state changes 

  */
  componentDidMount() {
    firebaseConfig.auth().onAuthStateChanged(this.authListener)
    this.init()
  }

  /* 
  a method to show content on screen
  */
  renderContent() {
    /* 
    if localstorage doesn't contain loading variable,
    the Spinner component is rendered     
    */
    if (typeof window !== 'undefined') {
      if (localStorage.getItem('initializer') === 'initializing') {
        return <Spinner />
      }
    }
    /*
    If there is no user related data in the userData state, the Auth component
    is rendered that provides the sign-in facility. style and authProvider props
    coming from the parent component is passed down as props
    */
    if (!this.state.userData) {
      return (
        <Auth style={this.props.style} authProvider={this.props.authProvider} />
      )
    }
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
        // this.props.fetchUserData(null)
        console.log('signed out')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <button style={this.props.style} onClick={this.SignOutHandler}>
        {' '}
        Sign Out{' '}
      </button>
    )
  }
}
