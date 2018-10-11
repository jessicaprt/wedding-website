import React, { Component } from 'react';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';

import ClipLoader from 'react-spinners/ClipLoader';
import Ionicon from 'react-ionicons'

import { RsvpConfirmation } from './RsvpConfirmation';

export class RsvpMainForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading : false,
            matching : false,
            name : '',
            continue: false
        }
    }

    handleNameChange(event) {
        var inputName = event.target.value;
        this.setState({name : inputName})
        if (inputName == 0) {
            this.setState({ loading: false});
        } else if (inputName == 'test') {
            this.setState({ loading: false});
            this.setState({ matching: true});
        } else {
            this.setState({ loading: true});
            this.setState({ matching: false});
        }
    }

    handleButtonClick(event) {
        this.setState({ continue: true });
    }

    render() {
        return(
            <Grid>
                <form>
                    <FormGroup
                        controlId="formBasicText">

                        <Row className="formBlock">
                            <Col sm={12}><h4>Enter your name below: </h4> </Col></Row>

                        <Row className="formBlock">
                            <Col sm={8}>
                                { !this.state.continue ? 
                                    <FormControl
                                        type="text"
                                        placeholder="Full Name"
                                        className="formInput"
                                        onChange= { this.handleNameChange.bind(this) } /> :

                                    <FormControl
                                        readOnly
                                        type="text"
                                        placeholder="Full Name"
                                        className="formInput"
                                        onChange= { this.handleNameChange.bind(this) } /> }
                                        
                            </Col>
                            
                            <Col sm={4}>
                                <ClipLoader
                                    className="formSpinner"
                                    sizeUnit={"px"}
                                    size={36}
                                    color={'#dcbc91'}
                                    loading={this.state.loading}
                                /></Col>
                        </Row>

                        <Row className="formBlock">
                            <Col sm={12}><h4>Or enter your RSVP code: </h4> </Col></Row>
                        
                        <Row className="formBlock">
                            <Col sm={8}>
                            <FormControl
                                type="text"
                                placeholder="RSVP code"
                                className="formInput"
                                onChange= { this.handleNameChange.bind(this) } /></Col>
                        </Row>

                        
                        <Row>
                            { ( this.state.matching && !this.state.continue ) ?
                                <Button 
                                    className="formButton"
                                    onClick={ this.handleButtonClick.bind(this) }>Continue</Button> : null }

                            { this.state.continue ? <RsvpConfirmation show={true}/> : null }

                        </Row>
                        <FormControl.Feedback />
                    </FormGroup>
                </form>
            </Grid>);
    }
}