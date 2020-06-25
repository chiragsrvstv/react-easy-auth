# react-easy-auth

> A React component that easily adds social authentication with firebase to your projects.

[![NPM](https://img.shields.io/npm/v/react-easy-auth.svg)](https://www.npmjs.com/package/react-easy-auth) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![showcase video](https://media.giphy.com/media/JpMiCUdQCchhSA3dt5/giphy.gif)

## Install

```bash
npm install --save react-easy-auth
```

## Configuration
1. Use an existing firebase project or create a new one. Then enable your preferred sign-in method from the firebase console.<br />
   For help visit: https://firebase.google.com/docs/web/setup
2. Paste your firebase configuration in a `.env` file inside your React project:
```bash
REACT_APP_APIKEY="api-key"
REACT_APP_AUTHDOMAIN="project-id.firebaseapp.com"
REACT_APP_DATABASEURL="https://project-id.firebaseio.com"
REACT_APP_PROJECTID="project-id"
REACT_APP_STORAGEBUCKET="project-id.appspot.com"
REACT_APP_MESSAGINGSENDERID="sender-id"
REACT_APP_APPID="app-id"
```

## Usage

```jsx
import React, { useState } from 'react'

import { SocialSignIn, SocialSignOut } from 'react-easy-auth'

export const App = () => {
  const [user, setUser] = useState(null)

  //a method to fetch user data from the SocialSignIn component
  const fetchUserData = (userData, userCredentials, error) => {
    if (!error) {
      setUser(userData)
    }
  }

  // a method to handle sign-out 
  const onSignOut = (error) => {
    if (!error) {
      console.log('signed out')
      setUser(null)
    }
  }

// if the user data is present we show the SocialSignOut Compononent
  if (user) {
    return (
      <div>
        <h1> Welcome {user.displayName} </h1>
        <SocialSignOut style={{ color: 'red' }} onSignOut={onSignOut} />
      </div>
    )
  }

// if there is no user data we show the SocialSignIn Component
  return (
        <SocialSignIn
          authProvider='Google'
          style={{ color: 'white', backgroundColor: 'red', fontSize: '20px', borderRadius: '5px' }}
          fetchUserData={fetchUserData}
        />
  )
}
```

## API

### SocialSignIn

#### `authProvider()`
| Type           | Required     |  
| :------------- | :----------: | 
|  string        | Yes          |

This prop is used to describe what authentication provider needs to be activated. <br />
Make sure to also enable the same from firebase console.<br />
The available providers are:
  * Google
  * Twitter
  * Facebook
  * Github
  * Microsoft


#### `fetchUserData()`
| Type           | Parameters                              | Required     |  
| :------------- | :------------------------------------:  | :----------: | 
|  function      | `userData`, `userCredentials`, `error`  | Yes          |

This function is used as a prop to fetch the data from the SignIn Component whenever
a user signs in. <br/>
  * `userData` (Object): The user related data. <br />
  * `userCredentials` (Object): The user credentials like access tokens <br />
  * `error` (Object): Error generated during the authentication flow<br />


#### `style`
| Type           | Required          |  
| :------------- | :---------------: | 
|  object        | Optional          |

This prop is used to add styling to the SocialSignIn button using inline CSS. You can add your preffered <br />
styling to the button to give it a custom appeal.<br />

#### `scopes`
| Type           | Required          |  
| :------------- | :---------------: | 
|  array         | Optional          |

This prop is used to specify additional OAuth 2.0 scopes that you want to request from the. <br />
authentication provider.<br />

<br />

### SocialSignOut

#### `onSignOut()`
| Type           | Parameters    | Required     |  
| :------------- | :----------:  | :----------: | 
|  function      | `error`       | Yes          |

This function is used as a prop to activate the sign out method. If any error<br/>
occurs during the process it is returned through the error object. <br />
  * `error` (Object): Error generated during the sign out flow<br />

#### `style`
| Type           | Required          |  
| :------------- | :---------------: | 
|  object        | Optional          |

This prop is used to add styling to the SocialSignOut button using inline CSS. You can add your preffered <br />
styling to the button to give it a custom appeal.<br />

<br />


## Contributing
See contributing guidlines [here](CONTRIBUTING.md)


## License

MIT © [chiragsrvstv](https://github.com/chiragsrvstv)
