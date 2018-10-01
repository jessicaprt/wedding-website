import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';
import ClipLoader from 'react-spinners/ClipLoader';
import Ionicon from 'react-ionicons'

export class RsvpMainForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading : false,
            matching : false
        }
    }

    handleChange(event) {
        console.log(event.target.value);
        if (event.target.value.length == 0) {
            this.setState({ loading: false});
        } else if (event.target.value == 'test') {
            this.setState({ loading: false});
            this.setState({ matching: true});
        } else {
            this.setState({ loading: true});
            this.setState({ matching: false});
        }
    }

    render() {
        return(<Grid>
            <form>
                <FormGroup
                    controlId="formBasicText">

                    <div className="formBlock">
                        <FormControl
                            type="text"
                            placeholder="Full Name"
                            className="formInput"
                            onChange= { this.handleChange.bind(this) } />

                        <ClipLoader
                            className="formSpinner"
                            sizeUnit={"px"}
                            size={36}
                            color={'#dcbc91'}
                            loading={this.state.loading}
                        />

                    </div>
                    { this.state.matching ?
                    <Button className="formButton">Continue</Button> : null }
                    
                    <FormControl.Feedback />
                </FormGroup>
            </form>
        </Grid>);
    }
}