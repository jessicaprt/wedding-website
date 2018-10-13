import React, { Component } from 'react'; 
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

export class PlainElement extends Component {
    render() {
        return(
            <Grid className="element" id={ this.props.pid }>
                <div className="mainTitle sectionTitle AmaticSC">{ this.props.title }</div>
                <div className="elementLine"></div>
                <Row>
                    <Col sm={12}><div className="elementContent">{ this.props.content }</div></Col></Row>
                <Row><Col sm={12} className="peLink">
                    { (this.props.link !== null) ? 
                        <a href={this.props.link}>{this.props.linkText}</a> : null }</Col></Row>
                <div className="elementLine"></div>
            </Grid>
        );
    }
}