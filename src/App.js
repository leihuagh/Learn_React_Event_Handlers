import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'My Name'
    }
  }
  render() {
    const { name } = this.state
    return (
      <div>
        <br />
        <br />
        <button>Change State</button>
        <br />
        <br />
        <div>{name}</div>
      </div>
    )
  }
}

export default App
