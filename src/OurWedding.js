import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

export class OurWedding extends Component {
    render() {
        return(
            <Grid>
                <Row>
                    <Col sm={6}></Col>
                    <Col sm={6}></Col>
                </Row>
            </Grid>
        );
    }
}