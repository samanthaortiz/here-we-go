// DASHBOARD > PANEL > ACTIVITY TILE =============================================
import React from 'react';
import { Accordion, Panel } from 'react-bootstrap';
import BudgetChart from './BudgetChart';

const Trips = React.createClass({
  render() {
    console.log('these are the trip props:', this.props)
    // if(this.props.data.data.reducerAllTrips !== undefined) {
      
      return (
        <div className="trips">
          <Accordion>
            {
            this.props.data.data.reducerAllTrips.allTripInfo.map((trips, i) =>
              <Panel key={i} header={trips.trip_name} eventKey={i + 1}>
                <div>
                <BudgetChart 
                  key={i} 
                  data={this.props}
                  item={trips.trip_name}
                >
                </BudgetChart>
                </div>

                <h4>Flights:</h4>
                  <p>flight1</p>
                  <p>flight2</p>
                <h4>Hotels:</h4>
                  <p>hotel1</p>
                  <p>hotel2</p>
                <h4>Cars:</h4>
                  <p>car1</p>
                  <p>car2</p>
                <h4>Activites:</h4>
                  <p>activity1</p>
                  <p>activity2</p>
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
