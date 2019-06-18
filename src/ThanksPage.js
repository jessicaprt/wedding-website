import React, { Component } from 'react';
var qs = require('qs');

export class ThanksPage extends Component {
    render() {
        const query = qs.parse(window.location.search, {
            ignoreQueryPrefix: true
        });
        let name = query.name
        let tableNumber = query.table

        return (
          <div className="App">
              <h1>Thanks for coming to our wedding { name }!</h1>
          </div>
        );
      }
}