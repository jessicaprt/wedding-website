import React, { Component } from 'react';
import { Header } from './Header.js';
import { OurWedding } from './OurWedding.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <OurWedding />
      </div>
    );
  }
}

export default App;
