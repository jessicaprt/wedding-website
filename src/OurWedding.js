import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import { compose, withProps } from "recompose"
import GoogleMapReact from 'google-map-react';

const MapMarker = ({ text }) => (
    <div style={{
      color: 'black', 
      background: '#dcbc91',
      padding: '10px 10px',
      display: 'inline-flex',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      transform: 'translate(-50%, -50%)',
    }}>
      {text}
    </div>
  );

export class OurWedding extends Component {
    static defaultProps = {
        ceremony: {
            lat: 50.923816,
            lng: -113.966120
        },

        reception: {
            lat: 50.949348,
            lng: -113.982655
        },

        zoom: 17
    };

    render() {
        return(
            <Grid className="OurWedding" id="our-wedding">
                <h1 className="AmaticSC sectionTitle">OUR WEDDING</h1>
                <p>AUGUST 3, 2019</p>
                <Row>
                    <Col sm={6} className="mapWrapper">
                        <div style={{ height: '50vh', width: '100%' }} className="map">
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: 'AIzaSyDy0UjpoRktMXm2HbhkC_hTaY6ugOOCtGE'}}
                                defaultCenter={this.props.ceremony}
                                defaultZoom={this.props.zoom}
                                >
                                <MapMarker
                                    lat={ this.props.ceremony.lat }
                                    lng={ this.props.ceremony.lng }
                                    text={''}
                                />
                            </GoogleMapReact>
                        </div>
                        <div className="mapDescription">
                            <h1 className="AmaticSC">CEREMONY</h1>
                            <p>St. Albert the Great Parish</p>
                            <p>10 Prestwick Dr SE</p>
                            <p>Calgary, Alberta</p></div></Col>
                    <Col sm={6} className="mapWrapper">
                        <div style={{ height: '50vh', width: '100%' }} className="map">
                            <GoogleMapReact
                                defaultCenter={this.props.reception}
                                defaultZoom={this.props.zoom}
                                >
                                <MapMarker
                                    lat={ this.props.reception.lat }
                                    lng={ this.props.reception.lng }
                                    text={''}
                                />
                            </GoogleMapReact>
                        </div>
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