import React, { Component } from 'react';

export class Rsvp extends Component {
    render() {
        return(
            <div className="rsvp" id="rsvp">
                <div className="rsvpTitle AmaticSC">RSVP</div>
                <p>Tell us if you can make it to the wedding!</p>

                <a href="/#"
                    className="rsvpButton">Click Here to RSVP</a>
            </div>
        );
    }
}