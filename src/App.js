import React, { Component } from 'react';
import { LandingPage } from './LandingPage';
import { ThanksPage } from './ThanksPage';
import { NotFound } from './NotFound';
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <ThanksPage />
      // </div>
      <BrowserRouter baseName={process.env.PUBLIC_URL}>
        <div>
          <Switch>
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
            <Route component={NotFound}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
