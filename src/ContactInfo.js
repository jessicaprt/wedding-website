import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';

export class ContactInfo extends Component {
    renderDate() {
        var d = new Date();
        return (<p className="contactContent">&copy; Created by Jessica Prieto &amp; George Antonious - { d.getFullYear() }</p>);
    }

    render() {
        return(
            <div className="contact" id="contact">
                <Grid>
                    <div className="sectionTitle AmaticSC">Contact Info</div>
                    <div className="contactContent">
                        If you have any questions, you can always message us on facebook or email us at info@georgeandjessica.ca
                    </div>
                    <div className="contactLine"></div>
                    { this.renderDate() }
                </Grid>
            </div>
        )
    }
}