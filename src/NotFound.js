import React, { Component } from 'react';
import { PlainElement } from './PlainElement.js';

export class NotFound extends Component {
    render() {
        let content = <p>
            Sorry, it looks like we couldn't find what you were looking for 😞 Click <a href="/">here</a> to return home.
        </p>

        return (
            <div className="App">
                <div className="Header">
                    <PlainElement
                        pid="not-found"
                        title="Oops"
                        content={content}
                        border="true"/>
                </div>
            </div>
        );
    }
}
