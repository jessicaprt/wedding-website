import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';

export class Rsvp extends Component {
    render() {
        return(
            <div className="rsvp" id="rsvp">
                <div className="rsvpTitle AmaticSC">RSVP</div>
                <Button
                    className="rsvpButton">Click Here to RSVP</Button>
            </div>
        );
    }
}