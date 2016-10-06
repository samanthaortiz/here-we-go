import React from 'react';

const HotelItin = React.createClass({

  onChange(){
    if (this.props.dashboardState.selectedBookedHotels[this.props.hotelItinInfo.id] === undefined){
      this.props.dashboardState.selectedBookedHotels[this.props.hotelItinInfo.id] = true;
    } else {
      this.props.dashboardState.selectedBookedHotels[this.props.hotelItinInfo.id] = !this.props.dashboardState.selectedBookedHotels[this.props.hotelItinInfo.id]
    } 
    console.log('this is the dash state for booked hotel itin: ', this.props.dashboardState.selectedBookedHotels)
  },

  render() {
      return (
      	// <div>HELLO!</div>
        <div className='item-hotel-itin'>
          <h4>HOTEL ITIN</h4>
          <form>
          <div className="checkbox">
            <label>
              <input type="checkbox" value="" onChange={this.onChange}/>{this.props.hotelItinInfo.providerName}
            </label>
            <p>{this.props.hotelItinInfo.days} Days</p>
          </div>
        </form>
      </div>
    );
  } 
});

export default HotelItin;