import React, { Component } from 'react';
import { Link } from 'react-router';
import { Accordion, Panel } from 'react-bootstrap';
import BudgetForm from './BudgetForm';
import HotelItin from './HotelItin';
import FlightItin from './FlightItin';
import CarItin from './CarItin';
import ActivityItin from './ActivityItin';

const Itinerary = React.createClass({

  handleBudgetForm: function(event) {
    event.preventDefault();
    // DISPLAY BUDGET FOR LIGHTBOX
    document.getElementById('light').style.display='block';
    document.getElementById('fade').style.display='block';
  },

  addToNewTrip(){
    //each hotel/flight/car
  },

  render() {
    console.log("ACTIVITY PROPS ITIN", this.props.data)
    // console.log('hotel itin data', this.props.data.reducerHotelItin.hotelItinData)
    // if(this.props.data.reducerTripData.loggedIn){

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


      return (
        <div className="tile-itinerary">
        <ul className="nav nav-tabs">
          <li className="active"><a data-toggle="tab" href="#booked">Booked</a></li>
          <li><a data-toggle="tab" href="#saved">Saved</a></li>
          <li><a data-toggle="tab" href="#budget">Budget</a></li>
          <li><a data-toggle="tab" href="#trips">Trips</a></li>
        </ul>


        <div className="tab-content">
          <div id="booked" className="tab-pane fade in active">
          <button type="button" className="new-trip-btn" onClick={this.addToNewTrip}>Add to New Trip</button>
          <button type="button" className="existing-trip-btn" onClick={this.addToExistingTrip}>Add to Existing Trip</button>
          <button type="button" className="move-btn"onClick={this.moveToSaved}>Move to Saved</button> 

          <Accordion>

          <Panel header="Hotels" eventKey="1">
          {bookedHotelList.map((hotelItin, i) => 
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
            {bookedFlightList.map((flightItin, i) =>
              <FlightItin
                key={i}
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
          <button type="button" className="new-trip-btn" onClick={this.addToNewTrip}>Add to New Trip</button>
          <button type="button" className="existing-trip-btn" onClick={this.addToExistingTrip}>Add to Existing Trip</button>
          <button type="button" className="move-btn" onClick={this.moveToBooked}>Move to Booked</button> 
          
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

            <div id="budget" className="tab-pane fade">
             <h3>Budget</h3>
                <div id="light" className="lightbox-content">
                  <BudgetForm />
                </div>
                <div id="fade" className="black_overlay"></div>
                <p><button onClick={this.handleBudgetForm}>Add New Budget!</button></p>
            </div>


            <div id="trips" className="tab-pane fade">
              <button type="button" className="new-trip-btn" onClick={this.createNewTrip}>Create New Trip</button>
              <button type="button" className="existing-trip-btn" onClick={this.editExistingTrip}>Edit Existing Trip</button>
            </div>

        </div>
        </div>
      );
    }
})
export default Itinerary;