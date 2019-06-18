import React, { Component } from 'react';
import { LandingPage } from './LandingPage';
import { ThanksPage } from './ThanksPage';
import { BrowserRouter, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <ThanksPage />
      // </div>
      <BrowserRouter baseName={process.env.PUBLIC_URL}>
        <div>
          <Route exact={true}
            path='/'
            render={() => (
              <div className="App">
                <LandingPage />
              </div>
          )}/>

          <Route exact={true}
            path='/thanks'
            render={() => (
              <div className="App">
                <ThanksPage />
              </div>
          )}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
