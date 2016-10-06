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

  changeDate(date) {
    let newDate = date.substring(0,10).split("-").join("/");
    let year = newDate.slice(0,4);
    let monthDay = newDate.slice(5);
    return monthDay += '/' + year;
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
              <p>{this.changeDate(this.props.hotelItinInfo.startDate)} to {this.changeDate(this.props.hotelItinInfo.endDate)}</p>
            </label>
          </div>
        </form>
      </div>
    );
  } 
});

export default HotelItin;