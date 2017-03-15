import React, { Component } from 'react'
import { Link } from 'react-router'

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>HomePage</h1>
        <Link to="/products">products</Link>
      </div>
    )
  }
}

export default HomePage