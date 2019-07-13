import React, { Component } from 'react';
import { LandingPage } from './LandingPage';
import { ThanksPage } from './ThanksPage';
import { NotFound } from './NotFound';
import { RehearsalDinner } from './RehearsalDinner';
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
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
            <Route exact={true}
              path='/info/rehearsal-dinner'
              render={() => (
                <div className="App">
                  <RehearsalDinner />
                </div>
              )}/>

            <Route exact={true}
              path='/info/rehearsal'
              render={() => (
                <div className="App">
                  <RehearsalDinner />
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
