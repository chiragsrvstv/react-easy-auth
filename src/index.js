import React from 'react'

// importing firebase configuration and dependencies
import { firebaseConfig } from './firebaseConfig'

import Auth from './components/auth'
import Spinner from './components/Spinner'

class SocialAuth extends React.Component {
  state = { userData: '', isLoading: false }

  /* 
  a method that sets the userData state when a user signs-in and 
  it also sends that data back to the parent component with the help 
  of fetchUserData prop 
  */
  authListener = (enteredUser) => {
    if (enteredUser) {
      this.setState({ userData: enteredUser }) // reloading the component for testing
      this.props.fetchUserData(enteredUser)
      if (typeof window !== 'undefined') {
        localStorage.removeItem('loader')
      }
      this.setState({ isLoading: false })
    }
  }

  /* 
    activating the firebase authentication state observer, it listens 
    for changes in the authentication state and executes the function(or observer)
    passed to it everytime the authentication state changes 
  */
  componentDidMount() {
    firebaseConfig.auth().onAuthStateChanged(this.authListener)
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
  a method to show content on screen
  */
  renderContent() {
    /* 
    if localstorage doesn't contain loading variable,
    the Spinner component is rendered     
    */
    if (typeof window !== 'undefined') {
      if (localStorage.getItem('loader') === 'loading') {
        return <Spinner />
      }
    }
    if (this.state.userData) {
      return (
        <div>
          <button style={this.props.style} onClick={this.SignOutHandler}>
            {' '}
            Sign Out{' '}
          </button>
          <h3> {this.state.userData.displayName} </h3>
        </div>
      )
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

export default SocialAuth
