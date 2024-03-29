import React, { Component } from 'react';
import { Header } from './Header.js';
import { OurWedding } from './OurWedding.js';
import { Rsvp } from './Rsvp.js';
import { PlainElement } from './PlainElement.js';
import { ContactInfo } from './ContactInfo.js';

export class LandingPage extends Component {
    render() {
        const gifts="We're so lucky to be able to spend our wedding day with all of our friends and family. Your presence is truly the only gift we need. Since we will be living in a different province after the wedding if you would like give us a gift we kindly ask for a small monetary gift for our future. We will have dropboxes available during guest check-in at the reception.";
        const accommodation="We are aware that a lot of our guests will be travelling from outside of Calgary. We have worked with Deerfoot Inn & Casino to give our guests discounts for room rates. To get the discount code, email info@georgeandjessica.ca or contact either one of us.";

        return (
          <div className="App">
            <Header />
            <OurWedding />
            <Rsvp />
            <PlainElement
              pid="gifts"
              title="Gifts"
              content={ gifts }
              border="true"/>
            <PlainElement
              pid="accommodation"
              title="Guest Accommodations"
              content={ accommodation }
              border="false"/>
            <div class="castle"></div>
            <ContactInfo />
          </div>
        );
      }
}