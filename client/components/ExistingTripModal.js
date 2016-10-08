import React, { Component } from 'react';
import { Modal, Button} from 'react-bootstrap';

const ExistingTripModal = React.createClass({
  getInitialState(){
    return({
      existingTrip: ""
    })
  },
  handleChangeValue(event) {
    this.setState({
      existingTrip: event.target.value
    });
  },

  handleSubmit(){
    console.log("WE GOT EXISTING!!", this.state.existingTrip)
    this.props.onHide();
  },
 

  render() {
    return (
      <Modal {...this.props} bsSize="small" aria-labelledby="contained-modal-title-sm">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-sm">Existing Trip</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" value={this.state.existingTrip} onChange={this.handleChangeValue} placeholder="Existing Trip Name"/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handleSubmit}>Submit</Button>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
});

export default ExistingTripModal;