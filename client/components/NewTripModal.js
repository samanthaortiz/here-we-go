import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

const NewTripModal = React.createClass({

  getInitialState() {
    return({
      newTrip: ""
    })
  },
    
  handleChangeValue(event) {
    this.setState({
      newTrip: event.target.value
    });
  },

  handleSubmit(){
    console.log("WE GOT THIS", this.state.newTrip)
    console.log("NEWTRIPMODAL PROPS", this.props.data)

    this.props.data.data.postNewTrip(this.state.newTrip, this.props.data.data.reducerTripData.email)
    this.props.data.getAllTrips(this.props.data.data.reducerTripData.email, "/dashboard");
    this.props.onHide();
  },

  render() {

    return (
      <Modal {...this.props} bsSize="small" aria-labelledby="contained-modal-title-sm">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-sm">New Trip</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input 
            type="text" 
            value={this.state.newTrip} 
            onChange={this.handleChangeValue} 
            placeholder="New Trip Name"
          />
        </Modal.Body>
        <Modal.Footer>
                  <Button onClick={this.handleSubmit}>Submit</Button>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
});

export default NewTripModal;