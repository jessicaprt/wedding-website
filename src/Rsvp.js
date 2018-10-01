import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import { RsvpMainForm } from './RsvpMainForm.js';

export class Rsvp extends Component {
    render() {
        return(
            <div className="rsvp" id="rsvp">
                <div className="rsvpTitle AmaticSC">RSVP</div>
                <p>Type your name below (as shown in the invitation) and click continue to confirm your attendance.</p>
                <RsvpMainForm />

                {/* <Button
                    className="rsvpButton">Click Here to RSVP</Button> */}
            </div>
        );
    }
}