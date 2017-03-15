import React, { Component } from 'react'
import { Link } from 'react-router'
// import { COMPANY_NAME } from '../env'

class HomePage extends Component {
  render() {
    // console.log(COMPANY_NAME)

    return (
      <div>
        <h1>HomePage</h1>
        <Link to="/products">products</Link>
      </div>
    )
  }
}

export default HomePage