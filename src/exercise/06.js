// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, {useState} from 'react'
// import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  //destructure an array or object
  // const {useState} = React
  const [error, setError] = useState(null)

  function handleSubmit(event) {
    // this is to prevent a full page refresh onsubmit
    event.preventDefault()
    // console.dir()
    onSubmitUsername(event.target.elements.usernameInput.value)
  }

  // validate the error state
  function handleChange(event) {
    const {value} = event.target
    const isLowerCase = value === value.toLowerCase()
    //Note: 3 part of the ternary condition ? return value if condition is true : else return this
    setError(isLowerCase ? null : 'Username must be lower case')
  }

  // instead doing an error state - use controlled input - what implications, does this ave in relation to mobile and touch screens
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input id="usernameInput" type="text" onChange={handleChange} />
      </div>
      {/* error handling */}
      <div style={{color: 'red'}}>{error}</div>
      <button disabled={Boolean(error)} type="submit">
        Submit
      </button>
    </form>
  )
}
function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
