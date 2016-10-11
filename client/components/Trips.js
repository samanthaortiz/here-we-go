// DASHBOARD > PANEL > ACTIVITY TILE =============================================
import React from 'react';
import { Accordion, Panel } from 'react-bootstrap';
//import BudgetChart from './BudgetChart';

const Trips = React.createClass({
  //set the state with the trip id from reducer all trips which you're mapping on
  //within that map, use the state which is updated based on the trip id and contains all trip info
  render() {
    console.log('all trips inside Trips:', this.props.data.data.reducerAllTrips.allTripInfo)
    console.log('all trip info inside Trips:', this.props.data.data.reducerAllTripInfo.allTripInfo)
    
      return (

        <div className="trips">
          <Accordion>
            {
            this.props.data.data.reducerAllTrips.allTripInfo.map((trips, i) =>
              <Panel key={i} header={trips.trip_name} eventKey={i}>
                 {
                  this.props.data.data.reducerAllTripInfo.allTripInfo.map((trips, i) =>
                <div className="inner-trip">
                <h4 className="inner-trip-heading">Flights:</h4>
                  <p>{trips.departureAirportCity} - {trips.arrivalAirportCity}</p>
                <h4 className="inner-trip-heading">Hotels:</h4>
                  <p>{trips.providerName}</p>
                <h4 className="inner-trip-heading">Cars:</h4>
                  <p>{trips.rentalCompany}: {trips.vehicleBrand}</p>
                <h4 className="inner-trip-heading">Activites:</h4>
                  <p>{trips.name}</p>
                  </div>
                )
                }
              </Panel>
              )
            }
          </Accordion>
        </div>
      );
    }
});

export default Trips;
