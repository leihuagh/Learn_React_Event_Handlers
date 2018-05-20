import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'My Name'
    }
  }

  changeName = newName => {
    this.setState({
      name: newName
    })
  }

  render() {
    const { name } = this.state
    return (
      <div>
        <br />
        <br />
        <button onClick={() => this.changeName('My Name is Lei Hua')}>
          Change State arrow function
        </button>
        <br />
        <br />
        <button onClick={this.changeName.bind(this, 'My Name data bind')}>
          Change State bind new name
        </button>
        <br />
        <br />
        <div>{name}</div>
      </div>
    )
  }
}

export default App
