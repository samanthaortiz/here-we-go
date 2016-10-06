import React from 'react';
import DateTime from 'react-datetime'

const HotelItin = React.createClass({

  onChange(){
    if (this.props.dashboardState.selectedBookedHotels[this.props.hotelItinInfo.id] === undefined){
      this.props.dashboardState.selectedBookedHotels[this.props.hotelItinInfo.id] = true;
    } else {
      this.props.dashboardState.selectedBookedHotels[this.props.hotelItinInfo.id] = !this.props.dashboardState.selectedBookedHotels[this.props.hotelItinInfo.id]
    } 
    console.log('this is the dash state for booked hotel itin: ', this.props.dashboardState.selectedBookedHotels)
  },

  changeDate(date) {
    var string = new Date(date).toString()
    var formattedDate = string.substring(4,10) + ", " + string.substring(11, 15);
    return formattedDate
  },

  render() {

      return (
        <div className='item-hotel-itin'>
          <h4>HOTEL ITIN</h4>
          <form>
          <div className="checkbox">
            <label>
              <input type="checkbox" value="" 
              onChange={this.onChange}/>
              {this.props.hotelItinInfo.providerName} 
              <br/>
              {this.changeDate(this.props.hotelItinInfo.startDate)} - {this.changeDate(this.props.hotelItinInfo.endDate)}
            </label>
          </div>
        </form>
      </div>
    );
  } 
});

export default HotelItin;