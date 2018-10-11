import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { LandingPage } from './LandingPage';
import { RsvpPage } from './RsvpPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter baseName={process.env.PUBLIC_URL}>
        <div>
          <Route exact={true} 
            path='/'
            render={() => (
              <div className="App">
                <LandingPage />
              </div> )}/>

          <Route exact={true} 
            path='/rsvp'
            render={() => (
              <div className="App">
                <RsvpPage />
              </div> )}/>
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
