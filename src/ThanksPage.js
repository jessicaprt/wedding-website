import React, { Component } from 'react';
import { PlainElement } from './PlainElement.js';
var qs = require('qs');

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

export class ThanksPage extends Component {
    render() {
        const query = qs.parse(window.location.search, {
            ignoreQueryPrefix: true
        });
        let name = query.name ? query.name.capitalize() : ""
        let tableNumber = query.table

        let content = <p>
            Looks like you tried scanning the QR code 😛 Thanks for making your way out to our wedding! It means a lot to us to be able to share this day with our closest family and friends. We hope you're having/had a wonderful time celebrating our special day.
            <br/><br/>
            Keep this QR code handy. We will post links to our wedding photos and video here when they are ready.
            <br/><br/>
            Once again, thank you for coming!
            <br/><br/>
            💜 Mr. and Mrs. Antonious
        </p>

        return (
          <div className="App">
              <div className="Header">
                <PlainElement
                    pid="thanks"
                    title={`Thanks for coming ${name}!`}
                    content={content}
                    border="true"/>
                </div>
          </div>
        );
      }
}