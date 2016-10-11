import React from 'react';
import DateTime from 'react-datetime'

const HotelItin = React.createClass({

  onChange(){
    if (this.props.hotelItinInfo.status_id === 1){
      if (this.props.dashboardState.itinItems[0].selectedBookedHotels[this.props.hotelItinInfo.id] === undefined){
        this.props.dashboardState.itinItems[0].selectedBookedHotels[this.props.hotelItinInfo.id] = true;
      } else {
        this.props.dashboardState.itinItems[0].selectedBookedHotels[this.props.hotelItinInfo.id] 
          = !this.props.dashboardState.itinItems[0].selectedBookedHotels[this.props.hotelItinInfo.id]
      } 
    } else if (this.props.hotelItinInfo.status_id === 2){
      if (this.props.dashboardState.itinItems[1].selectedSavedHotels[this.props.hotelItinInfo.id] === undefined){
        this.props.dashboardState.itinItems[1].selectedSavedHotels[this.props.hotelItinInfo.id] = true;
      } else {
        this.props.dashboardState.itinItems[1].selectedSavedHotels[this.props.hotelItinInfo.id] 
          = !this.props.dashboardState.itinItems[1].selectedSavedHotels[this.props.hotelItinInfo.id]
      } 
    }
  },

  changeDate(date) {
    var date1 = date.split("-").join("/")
    return date1.substring(5,10) + "/" + date1.substring(0,4)
  },

  render() {
      return (
        <div className='item-hotel-itin'>
          <form>
          <div className="checkbox">
            <label>
              <input 
                type="checkbox" 
                value="" 
                onChange={this.onChange}
              />
              {this.props.hotelItinInfo.providerName} 
              <br/>
              {this.changeDate(this.props.hotelItinInfo.startDate)} 
              - 
              {this.changeDate(this.props.hotelItinInfo.endDate)}
            </label>
          </div>
        </form>
      </div>
    );
  } 
});

export default HotelItin;