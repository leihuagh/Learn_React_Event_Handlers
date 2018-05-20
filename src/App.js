import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
  }

  changeNameSubmit = newName => {
    this.setState({
      name: newName
    })
  }

  changeName = e => {
    const name = e.target.value
    this.setState({
      name
    })
  }

  render() {
    const { name } = this.state
    return (
      <div>
        <br />
        <br />
        <button onClick={() => this.changeNameSubmit('My Name is Lei Hua')}>
          Change State arrow function
        </button>
        <br />
        <br />
        <button onClick={this.changeNameSubmit.bind(this, 'My Name data bind')}>
          Change State bind new name
        </button>
        <br />
        <br />
        <label>
          Enter your name:
          <br />
          <input
            type="text"
            value={name}
            onChange={this.changeName.bind(this)}
          />
        </label>

        <br />
        <br />
        <div>Your name is: {name}</div>
      </div>
    )
  }
}

export default App
