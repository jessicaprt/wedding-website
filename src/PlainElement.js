import React, { Component } from 'react'; 
import Grid from 'react-bootstrap/lib/Grid';

export class PlainElement extends Component {
    render() {
        return(
            <Grid className="element" id={ this.props.pid }>
                <div className="mainTitle sectionTitle AmaticSC">{ this.props.title }</div>
                <div className="elementLine"></div>
                <div className="elementContent">{ this.props.content }</div>
                <div className="elementLine"></div>
            </Grid>
        );
    }
}