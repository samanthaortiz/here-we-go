// DASHBOARD > PANEL > ACTIVITY TILE =============================================
import React from 'react';
import { Accordion, Panel } from 'react-bootstrap';
//import BudgetChart from './BudgetChart';

const Trips = React.createClass({
  render() {
    // // console.log('these are the trip props:', this.props.data.getAllTripInfo(1))
    // if(this.props.data.reducerAllTrips !== undefined) {
    // var trips = []
    // this.props.data.reducerAllTrips.allTripInfo.forEach(function(trip, i){
    //   // trips.push(this.props.data.data.getAllTripInfo(trip.id))
    //   trips.push(this.props.data.getAllTripInfo(trip.id))
    // })
    // }
  //   console.log('trips', trips)
  // }


    // var flightTrips = []
    // this.props.data.data.reducerFlightItin.flightItinData.forEach(function(flight, i) {
    //   if(tripIds.indexOf(flight.trip_id) !== -1){
    //     flightTrips.push(flight)
    //   } 
    // })

    // var hotelTrips = []
    // this.props.data.data.reducerHotelItin.hotelItinData.forEach(function(hotel, i){
    //   if(tripIds.indexOf(hotel.trip_id) !== -1){
    //     hotelTrips.push(hotel)
    //   } 
    // })

    // var carTrips = []
    // this.props.data.data.reducerCarItin.carItinData.forEach(function(car, i) {
    //   if(tripIds.indexOf(car.trip_id) !== -1){
    //     carTrips.push(car)
    //   } 
    // })

    // var activityTrips = []
    // this.props.data.data.reducerActivityItin.activityItinData.forEach(function(activity, i) {
    //   if(tripIds.indexOf(activity.trip_id) !== -1){
    //     activityTrips.push(activity)
    //   } 
    // })
      return (

        <div className="trips">
          <Accordion>
            {
            this.props.data.data.reducerAllTrips.allTripInfo.map((trips, i) =>
              <Panel key={i} header={trips.trip_name} eventKey={i + 1}>
              {console.log("TRIPSSSSSS", trips)}
                {/*<div>
                <BudgetChart 
                  key={i} 
                  data={this.props.}
                  item={trips.trip_name}
                >
                </BudgetChart>
              <div>
              {flightTrips.map((flight, i) => 
                <div>
                <p>{flight.trip_id}</p>
                <p>{flight.airline} Flight {flight.flightNumber}</p>
                <p>{flight.departureAirportCode} to {flight.arrivalAirportCode}</p>
                <p>{flight.deparureTime} to {flight.arrivalTime}</p>
                </div>
              )}
              </div>
                </div>*/}
                 {
                  this.props.data.data.reducerAllTripInfo.allTripInfo.map((trips, i) =>
                    <Panel>
                <h4>Flights:</h4>
                  <p>{trips.arrivalAirportCity} - {trips.departureAirportCity}</p>
                <h4>Hotels:</h4>
                  <p>{trips.providerName}</p>
                <h4>Cars:</h4>
                <h4>Activites:</h4>
                  <p>{trips.name}</p>
                  </Panel>
                )
                }
              </Panel>
              )
            }
          </Accordion>
        </div>
      );

    } 
    // else {

    //   return (
    //     <div className="trips">
    //       <h4>No trips found. Add a new trip above!</h4>
    //     </div>
    //   );

    // }
  // }
});

export default Trips;
