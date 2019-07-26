import React, { Component } from 'react';
import { PlainNavBar } from './PlainNavBar';
import { PlainElement } from './PlainElement';

export class Info extends Component {
    render() {
        let links = 
            <div>
                <p><a href="./info/rehearsal">Rehearsal Day</a></p>
                <p><a href="./info/master-schedule">Master Schedule</a></p>
            </div>
        return (
            <div className="App Info">
            <PlainNavBar />
                <div className="Header">
                    <PlainElement 
                        pid="info"
                        title="Information"
                        content={links}
                        border="true"
                    />
                </div>
            </div>
        );
    }
}