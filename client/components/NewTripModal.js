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
      // console.log('FRONT END RECEIVED TRIP ID:', tripId)
      for (var item in this.props.data.dashboardState.itinItems[0].selectedBookedFlights){
        if(this.props.data.dashboardState.itinItems[0].selectedBookedFlights[item] === true){
          this.props.data.data.updateTripId(18, +item, 1);   
        }
      }

//       for (var item in this.props.data.dashboardState.itinItems[0].selectedBookedHotels){
//         if(this.props.data.dashboardState.itinItems[0].selectedBookedHotels[item] === true){
//           this.props.data.data.updateTrip(tripId, +item, 2);         
//         }
//       }

//       for (var item in this.props.data.dashboardState.itinItems[0].selectedBookedCars){
//         if(this.props.data.dashboardState.itinItems[0].selectedBookedCars[item] === true){
//           this.props.data.data.updateTrip(tripId, +item, 3);         
//         }
//       }

//       for (var item in this.props.data.dashboardState.itinItems[0].selectedBookedActivities){
//         if(this.props.data.dashboardState.itinItems[0].selectedBookedActivities[item] === true){
//           this.props.data.data.updateTrip(tripId, +item, 4);         
//         }
//       }
// ///////////////////////////////////////////////////

//         for (var item in this.props.data.dashboardState.itinItems[0].selectedSavedFlights){
//         if(this.props.data.dashboardState.itinItems[0].selectedSavedFlights[item] === true){
//           this.props.data.data.updateTrip(tripId, +item, 1);     
//         }
//       }

//       for (var item in this.props.data.dashboardState.itinItems[0].selectedSavedHotels){
//         if(this.props.data.dashboardState.itinItems[0].selectedSavedHotels[item] === true){
//           this.props.data.data.updateTrip(tripId, +item, 2);         
//         }
//       }

//       for (var item in this.props.data.dashboardState.itinItems[0].selectedSavedCars){
//         if(this.props.data.dashboardState.itinItems[0].selectedSavedCars[item] === true){
//           this.props.data.data.updateTrip(tripId, +item, 3);         
//         }
//       }

//       for (var item in this.props.data.dashboardState.itinItems[0].selectedSavedActivities){
//         if(this.props.data.dashboardState.itinItems[0].selectedSavedActivities[item] === true){
//           this.props.data.data.updateTrip(tripId, +item, 4);         
//         }
//       }

    this.props.onHide();
  },

  render() {

    return (
      <Modal {...this.props} bsSize="small" aria-labelledby="contained-modal-title-sm">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-sm">New Trip</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" value={this.state.newTrip} onChange={this.handleChangeValue} placeholder="New Trip Name"/>
          
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