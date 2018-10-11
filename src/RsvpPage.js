import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';

import { PlainNavBar } from './PlainNavBar';
import { RsvpMainForm } from './RsvpMainForm';

export class RsvpPage extends Component {
    render() {
        return(
            <div>
                <PlainNavBar />
                <Grid><h1 className="AmaticSC">RSVP</h1></Grid>
                <RsvpMainForm />
            </div>
        );
    }
}