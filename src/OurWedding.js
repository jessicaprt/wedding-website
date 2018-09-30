import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

export class OurWedding extends Component {
    render() {
        return(
            <Grid className="OurWedding" id="our-wedding">
                <h1 className="AmaticSC sectionTitle">OUR WEDDING</h1>
                <p>AUGUST 3, 2019</p>
                <Row>
                    <Col sm={6} className="mapWrapper">
                        <div className="map"></div>
                        <div className="mapDescription">
                            <h1 className="AmaticSC">CEREMONY</h1>
                            <p>St. Albert the Great Parish</p>
                            <p>10 Prestwick Dr SE</p>
                            <p>Calgary, Alberta</p></div></Col>
                    <Col sm={6} className="mapWrapper">
                        <div className="map"></div>
                        <div className="mapDescription">
                            <h1 className="AmaticSC">RECEPTION  </h1>
                            <p>Deerfoot Inn &amp; Casino</p>
                            <p>11500 35 St SE #1000</p>
                            <p>Calgary, Alberta</p></div></Col>
                        
                </Row>

            </Grid>
        );
    }
}