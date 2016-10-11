import React, { Component } from 'react';
import { Link } from 'react-router';
import { Accordion, Panel, Modal, Button, ButtonToolbar } from 'react-bootstrap';
import BudgetForm from './BudgetForm';
import NewTripForm from './NewTripForm';
import HotelItin from './HotelItin';
import FlightItin from './FlightItin';
import CarItin from './CarItin';
import ActivityItin from './ActivityItin';
import NewTripModal from "./NewTripModal";
import ExistingTripModal from './ExistingTripModal';
import Trips from './Trips';
//import BudgetChart from './BudgetChart';

const Itinerary = React.createClass({
  
  // getInitialState() {
  //   return { 
  //     // existingModal: false, 
  //     // newModal: false
  //   };
  // },

  // displayForm(event) {
  //  NOT BEING USED UNTIL BUDGET COMPLETE
  //   event.preventDefault();
  //   // DISPLAY BUDGET FOR LIGHTBOX
  //   document.getElementById('light').style.display='block';
  //   document.getElementById('fade').style.display='block';
  // },

  changeStatusOfItem(){
    //BOOKED TO SAVED
    for (var item in this.props.dashboardState.itinItems[0].selectedBookedFlights){
      if(this.props.dashboardState.itinItems[0].selectedBookedFlights[item] === true){
        console.log('taking flight from booked to saved');
        this.props.data.changeStatus(+item, 1, 1);     
      }
    }

    for (var item in this.props.dashboardState.itinItems[0].selectedBookedHotels){
      if(this.props.dashboardState.itinItems[0].selectedBookedHotels[item] === true){
        this.props.data.changeStatus(+item, 2, 1);     
      }
    }

    for (var item in this.props.dashboardState.itinItems[0].selectedBookedCars){
      if(this.props.dashboardState.itinItems[0].selectedBookedCars[item] === true){
        this.props.data.changeStatus(+item, 3, 1);     
      }
    }

    for (var item in this.props.dashboardState.itinItems[0].selectedBookedActivities){
      if(this.props.dashboardState.itinItems[0].selectedBookedActivities[item] === true){
        this.props.data.changeStatus(+item, 4, 1);     
      }
    }

//SAVED TO BOOKED

    for (var item in this.props.dashboardState.itinItems[1].selectedSavedFlights){
      if(this.props.dashboardState.itinItems[1].selectedSavedFlights[item] === true){
        console.log('taking flight from saved to booked');
        this.props.data.changeStatus(+item, 1, 2);     
      }
    }

    for (var item in this.props.dashboardState.itinItems[1].selectedSavedHotels){
      if(this.props.dashboardState.itinItems[1].selectedSavedHotels[item] === true){
        this.props.data.changeStatus(+item, 2, 2);     
      }
    }

     for (var item in this.props.dashboardState.itinItems[1].selectedSavedCars){
      if(this.props.dashboardState.itinItems[1].selectedSavedCars[item] === true){
        this.props.data.changeStatus(+item, 3, 2);     
      }
    }
       for (var item in this.props.dashboardState.itinItems[1].selectedSavedActivites){
      if(this.props.dashboardState.itinItems[1].selectedSavedActivites[item] === true){
        this.props.data.changeStatus(+item, 4, 2);     
      }
    }

    this.props.postHotelItin(this.props.reducerTripData.email, "/dashboard")
    this.props.postFlightItin(this.props.reducerTripData.email, "/dashboard")
    this.props.postCarItin(this.props.reducerTripData.email, "/dashboard")
    this.props.postActivityItin(this.props.reducerTripData.email, "/dashboard")
    // this.props.getAllTrips(this.props.reducerTripData.email, "/dashboard");
    //some sort of function that force refreshes each itinerary instance
  },

  render() {
      var bookedHotelList = [];
      var bookedCarList = [];
      var bookedFlightList = [];
      var bookedActivityList = [];

      var savedHotelList = [];
      var savedCarList = [];
      var savedFlightList = [];
      var savedActivityList = [];

      this.props.data.reducerHotelItin.hotelItinData.forEach(function(hotelItin){
        if (hotelItin.status_id === 1){
          bookedHotelList.push(hotelItin);
        } else if (hotelItin.status_id === 2){
          savedHotelList.push(hotelItin);
        }
      });

      this.props.data.reducerFlightItin.flightItinData.forEach(function(flightItin){
        if (flightItin.status_id === 1){
          bookedFlightList.push(flightItin);
        } else if(flightItin.status_id === 2){
          savedFlightList.push(flightItin);
        }
      });

      this.props.data.reducerCarItin.carItinData.forEach(function(carItin){
        if (carItin.status_id === 1){
          bookedCarList.push(carItin);
        } else if(carItin.status_id === 2){
          savedCarList.push(carItin);
        }
      });

      this.props.data.reducerActivityItin.activityItinData.forEach(function(activityItin){
        if (activityItin.status_id === 1){
          bookedActivityList.push(activityItin);
        } else if(activityItin.status_id === 2){
          savedActivityList.push(activityItin);
        }
      });

    // let existingClose = () => this.setState({ existingModal: false });
    // let newClose = () => this.setState({ newModal: false });

  return (

    <div className="tile-itinerary">
      <ul className="nav nav-tabs">
        {/*<li><a data-toggle="tab" href="#trips">Trips</a></li>*/}
        <li className="active"><a data-toggle="tab" href="#booked">Booked</a></li>
        <li><a data-toggle="tab" href="#saved">Saved</a></li>
       {/* <li><a data-toggle="tab" href="#budget">Budget</a></li>*/}
      </ul>


    <div className="tab-content">
  {/* TRIPS TAB 

        <div id="trips" className="tab-pane fade in active">
          <Button bsStyle="primary" onClick={()=>this.setState({ newModal: true })}>
            Add New Trip
          </Button>
          <NewTripModal 
            show={this.state.newModal} 
            onHide={newClose} 
            data={this.props}
          />
          <Trips
            data={this.props}
          />
        </div>
  */}
    
    <div id="booked" className="tab-pane fade in active">
    {/* Booked Items <ButtonToolbar> */ }
    
      <Button 
        bsStyle="primary" 
        onClick={this.changeStatusOfItem}>
        Move to Saved
      </Button> 
      {/*<Button 
        bsStyle="primary" 
        onClick={()=>this.setState({ existingModal: true })}>
        Add to Trip
      </Button>
      <ExistingTripModal 
        show={this.state.existingModal} 
        onHide={existingClose} 
        data={this.props} 
      />
    </ButtonToolbar>
      */}

    <Accordion>

      <Panel header="Hotels" eventKey="1">
      {bookedHotelList.map((hotelItin, i) => 
        <HotelItin
          key={i}
          dashboardState={this.props.dashboardState}
          hotelItinInfo={hotelItin}
          tableName=""
          startDate={this.props.data.reducerTripData.startDate}
          endDate={this.props.data.reducerTripData.endDate}
        />
        )}
      </Panel>

      <Panel header="Flights" eventKey="2">
        {bookedFlightList.map((flightItin, i) =>
          <FlightItin
            key={i}
            startDate={this.props.data.reducerTripData.startDate}
            endDate={this.props.data.reducerTripData.endDate}
            dashboardState={this.props.dashboardState}
            flightItinInfo={flightItin}
        />
        )}
      </Panel>

      <Panel header="Car Rentals" eventKey="3">
        {bookedCarList.map((carItin, i) => 
          <CarItin
            key={i}
            dashboardState={this.props.dashboardState}
            carItinInfo={carItin}
          />
        )}
      </Panel>

      <Panel header="Activities" eventKey="4">
        {bookedActivityList.map((activityItin, i) => 
          <ActivityItin
            key={i}
            dashboardState={this.props.dashboardState}
            activityItinInfo={activityItin}
          />
        )}
      </Panel>

    </Accordion> 

    </div>

    <div id="saved" className="tab-pane fade">
    {/* Saved Items     <ButtonToolbar> */}

      <Button 
        bsStyle="primary" 
        onClick={this.changeStatusOfItem}>
        Move to Booked
      </Button> 
      {/*<Button 
        bsStyle="primary" 
        onClick={()=>this.setState({ existingModal: true })}>
        Add to Trip
      </Button>
      <ExistingTripModal 
        show={this.state.existingModal} 
        onHide={existingClose} 
        data={this.props} 
      />
    </ButtonToolbar>
      */}

        
    <Accordion>
      
      <Panel header="Hotels" eventKey="1">
        {savedHotelList.map((hotelItin, i) => 
          <HotelItin
            key={i}
            dashboardState={this.props.dashboardState}
            hotelItinInfo={hotelItin}
            startDate={this.props.data.reducerTripData.startDate}
            endDate={this.props.data.reducerTripData.endDate}
          />
          )}
      </Panel>
      
      <Panel header="Flights" eventKey="2">
        {savedFlightList.map((flightItin, i) =>
          <FlightItin
            key={i}
            startDate={this.props.data.reducerTripData.startDate}
            endDate={this.props.data.reducerTripData.endDate}
            dashboardState={this.props.dashboardState}
            flightItinInfo={flightItin}
          />
        )}
      </Panel>
      
      <Panel header="Car Rentals" eventKey="3">
          {savedCarList.map((carItin, i) => 
            <CarItin
              key={i}
              dashboardState={this.props.dashboardState}
              carItinInfo={carItin}
            />
          )}
      </Panel>
      
      <Panel header="Activites" eventKey="4">
          {savedActivityList.map((activityItin, i) => 
            <ActivityItin
              key={i}
              dashboardState={this.props.dashboardState}
              activityItinInfo={activityItin}
            />
          )}
      </Panel>
      
      </Accordion>   

    </div>

       {/* BUDGET TAB
        <div id="budget" className="tab-pane fade">
         <h3>Budget</h3>
            <div id="light" className="lightbox-content">
              <BudgetForm data={this.props.data}/>
            </div>
            <div id="fade" className="black_overlay"></div>
            <p><button onClick={this.displayForm}>Add New Budget!</button></p>
            <BudgetChart/>
        </div>*/}
    </div>
  </div>
  );
  }
})
export default Itinerary;