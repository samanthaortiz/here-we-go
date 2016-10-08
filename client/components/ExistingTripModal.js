import React, { Component } from 'react';
import { Modal, Button, FormGroup, Radio} from 'react-bootstrap';

const ExistingTripModal = React.createClass({
  getInitialState(){
    return({
      selectedTrip: ""
    })
  },
  handleChangeValue(event) {
    console.log('the selected trip is:', event.target.value)
    this.setState({
      selectedTrip: event.target.value
    });
  },
  // componentWillMount(){
    // this.props.data.data.getAllTrips(this.props.data.data.reducerTripData.email)
    // console.log('this.props in existing trip modal:', this.props)
  // },
  handleSubmit(){
    console.log("WE GOT EXISTING!!", this.state.existingTrip)

      for (var item in this.props.data.dashboardState.itinItems[0].selectedBookedFlights){
        if(this.props.data.dashboardState.itinItems[0].selectedBookedFlights[item] === true){
          this.props.data.data.updateTripId(18, +item, 1);   
        }
      }

      for (var item in this.props.data.dashboardState.itinItems[0].selectedBookedHotels){
        if(this.props.data.dashboardState.itinItems[0].selectedBookedHotels[item] === true){
          this.props.data.data.updateTrip(tripId, +item, 2);         
        }
      }

      for (var item in this.props.data.dashboardState.itinItems[0].selectedBookedCars){
        if(this.props.data.dashboardState.itinItems[0].selectedBookedCars[item] === true){
          this.props.data.data.updateTrip(tripId, +item, 3);         
        }
      }

      for (var item in this.props.data.dashboardState.itinItems[0].selectedBookedActivities){
        if(this.props.data.dashboardState.itinItems[0].selectedBookedActivities[item] === true){
          this.props.data.data.updateTrip(tripId, +item, 4);         
        }
      }
///////////////////////////////////////////////////

        for (var item in this.props.data.dashboardState.itinItems[0].selectedSavedFlights){
        if(this.props.data.dashboardState.itinItems[0].selectedSavedFlights[item] === true){
          this.props.data.data.updateTrip(tripId, +item, 1);     
        }
      }

      for (var item in this.props.data.dashboardState.itinItems[0].selectedSavedHotels){
        if(this.props.data.dashboardState.itinItems[0].selectedSavedHotels[item] === true){
          this.props.data.data.updateTrip(tripId, +item, 2);         
        }
      }

      for (var item in this.props.data.dashboardState.itinItems[0].selectedSavedCars){
        if(this.props.data.dashboardState.itinItems[0].selectedSavedCars[item] === true){
          this.props.data.data.updateTrip(tripId, +item, 3);         
        }
      }

      for (var item in this.props.data.dashboardState.itinItems[0].selectedSavedActivities){
        if(this.props.data.dashboardState.itinItems[0].selectedSavedActivities[item] === true){
          this.props.data.data.updateTrip(tripId, +item, 4);         
        }
      }

    this.props.onHide();
  },
 

  render() {
    if(this.props.data.data.reducerAllTrips === undefined){
      return(
        <Modal {...this.props} bsSize="small" aria-labelledby="contained-modal-title-sm">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-sm">No Trips Available</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <p>Head to the Trip tab to add a new trip!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
        )
    } else {  
    return (
      <Modal {...this.props} bsSize="small" aria-labelledby="contained-modal-title-sm">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-sm">Add to Trip</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormGroup>
            {this.props.data.data.reducerAllTrips.allTripInfo.map((trips) =>
              <Radio name="selected" value={trips.trip_name} onChange={this.handleChangeValue}>
                {trips.trip_name}
              </Radio>
            )}
          </FormGroup>
        
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handleSubmit}>Submit</Button>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
    }
  }
});

export default ExistingTripModal;