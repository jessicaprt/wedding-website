import React, { Component } from 'react';

import { RsvpMainForm } from './RsvpMainForm.js';

export class Rsvp extends Component {
    render() {
        return(
            <div className="rsvp" id="rsvp">
                <div className="rsvpTitle AmaticSC">RSVP</div>
                <p>Tell us if you can make it to the wedding!</p>

                <a href="/rsvp"
                    className="rsvpButton">Click Here to RSVP</a>
            </div>
        );
    }
}