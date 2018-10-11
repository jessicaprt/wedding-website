import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';
import Radio from 'react-bootstrap/lib/Radio';

export class RsvpConfirmation extends Component {
    handleChange(event) {

    }

    handleCancel(event) {
        
    }

    render() {
        return(
            <Grid>
                <form>
                <FormGroup
                    controlId="formBasicText">

                    <div className="formRadioButtons">

                        <Radio name="radioGroup" inline>
                        Going
                        </Radio>{' '}
                        <Radio name="radioGroup" inline>
                        Not Going
                        </Radio>{' '}

                    </div>
                        <Button 
                            className="formButton">Submit</Button>
                        <Button 
                            className="formButton formButton2"
                            onClick={this.handleCancel.bind(this)}>Cancel</Button>

                    <FormControl.Feedback />
                </FormGroup>
            </form>
            </Grid>
        )
    }
}