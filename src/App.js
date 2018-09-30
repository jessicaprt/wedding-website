import React, { Component } from 'react';
import { Header } from './Header.js';
import { OurWedding } from './OurWedding.js';
import { Rsvp } from './Rsvp.js';
import { PlainElement } from './PlainElement.js';
import { ContactInfo } from './ContactInfo.js';

class App extends Component {
  render() {
    const registry="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    const accommodation="We are aware that a lot of our guests will be travelling from outside of Calgary. We have worked with Deerfoot Inn & Casino to give our guests discounts for room rates. To get the discount, you must confirm your attendance first by completing the RSVP form";
    return (
      <div className="App">
        <Header />
        <OurWedding />
        <Rsvp />
        <PlainElement
          pid="registry"
          title="Registry" 
          content={ registry }/>
        <PlainElement 
          pid="accommodation"
          title="Accommodation"
          content={ accommodation } />
        <ContactInfo />
      </div>
    );
  }
}

export default App;
