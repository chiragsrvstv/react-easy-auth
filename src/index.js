import React from 'react'

// firebase dependencies
import * as firebase from 'firebase/app'
import 'firebase/auth'

import { GoogleAuth } from './components/GoogleAuth'
import TwitterAuth from './components/TwitterAuth'

class SocialAuth extends React.Component {
  state = { userData: '' }

  authListener = (enteredUser) => {
    if (enteredUser) {
      this.setState({ userData: enteredUser }) // reloading the component for testing
      this.props.fetchUserData(enteredUser)
      console.log(enteredUser)
    }
  }

  // loginHandler = (userData) => {
  //   if (userData) {
  //     this.setState({ user: userData })
  //     this.props.fetchUserData(userData)
  //   }
  // }

  componentDidMount() {
    firebase.initializeApp(this.props.firebaseConfig)
    firebase.auth().onAuthStateChanged(this.authListener)
  }

  render() {
    return (
      <div>
        {/* <GoogleAuth loginHandler={this.props.loginHandler} auth={this.auth}/> */}
        <TwitterAuth auth={firebase.auth} />
      </div>
    )
  }
}

export default SocialAuth
