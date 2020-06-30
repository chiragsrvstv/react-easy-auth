import React, { useState } from 'react'

import { SocialSignIn, SocialSignOut } from 'react-easy-auth'

import './index.css'

const App = () => {
  const [user, setUser] = useState(null)

  //a method to fetch the data after user signs-in
  const fetchUserData = (userData, userCredentials, error) => {
    if (error) {
      console.error(error)
    }
    console.log(userCredentials)
    setUser(userData)
  }

  // a method to handle user sign-out//
  const onSignOut = (error) => {
    if (!error) {
      console.log('signed out')
      setUser(null)
    }
  }

  if (user) {
    return (
      <div className="container">
        <h3 className="title"> {user.displayName} </h3>
        <div class="button">
          <SocialSignOut style={{ color: 'red', fontSize: '10px'}} onSignOut={onSignOut} />
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <h1 className="title"> Super Power App </h1>
      <div className="button">
        <SocialSignIn
          authProvider='Google'
          style={{
            color: 'white',
            backgroundColor: 'red',
            fontSize: '20px',
            borderRadius: '5px'
          }}
          scopes={[
            'https://www.googleapis.com/auth/androidpublisher',
            'https://www.googleapis.com/auth/games'
          ]}
          fetchUserData={fetchUserData}   
        />
      </div>
    </div>
  )
}

export default App
