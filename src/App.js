import React, { Component } from 'react'
import { Provider } from 'react-redux'

import store from './store'
import { Header } from './components/shared/'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header/>
          {this.props.children}
        </div>
      </Provider>
    );
  }
}

export default App
