import React, { Component } from 'react';

import Blog from './containers/Blog/Blog';
import Header from './containers/Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Blog />
      </div>
    );
  }
}

export default App;
