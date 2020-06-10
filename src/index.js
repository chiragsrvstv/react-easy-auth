import React from 'react'
import { firebaseConfig} from './firebaseConfig'
import GoogleAuth from './components/GoogleAuth'
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
    firebaseConfig.auth().onAuthStateChanged(this.authListener)
  }

  render() {
    return (
      <div>
        {/* <GoogleAuth loginHandler={this.props.loginHandler} auth={this.auth}/> */}
        <TwitterAuth />
      </div>
    )
  }
}

export default SocialAuth
