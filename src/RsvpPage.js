import React, { Component } from 'react';

import { PlainNavBar } from './PlainNavBar';
import { RsvpMainForm } from './RsvpMainForm';

export class RsvpPage extends Component {
    render() {
        return(
            <div>
                <PlainNavBar />
                <RsvpMainForm />
            </div>
        );
    }
}