import React, { Component } from 'react';
import { Header } from './Header.js';
import { OurWedding } from './OurWedding.js';
import { Rsvp } from './Rsvp.js';
import { PlainElement } from './PlainElement.js';
import { ContactInfo } from './ContactInfo.js';

export class LandingPage extends Component {
    render() {
        const registry="We're so lucky to be able to spend our wedding day with all of our friends and family. Your presence is truly all the present we need. Because we're living on a different province after the wedding and because we already have all the basic household supplies covered, if you'd like to get us a gift to celebrate, we've created a registry fund that we'll use to enjoy our honeymoon. You can either use the link below, or there will be dropboxes at the reception.";
        const accommodation="We are aware that a lot of our guests will be travelling from outside of Calgary. We have worked with Deerfoot Inn & Casino to give our guests discounts for room rates. To get the discount, you must confirm your attendance first by completing the RSVP form";
        return (
          <div className="App">
            <Header />
            <OurWedding />
            <Rsvp />
            <PlainElement
              pid="registry"
              title="Registry" 
              content={ registry }
              link="#"
              linkText="available soon"/>
            <PlainElement 
              pid="accommodation"
              title="Guest Accommodations"
              content={ accommodation } 
              link="/#rsvp"
              linkText="RSVP"/>
            <ContactInfo />
          </div>
        );
      }
}