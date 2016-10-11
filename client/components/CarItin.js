import React from 'react';

const CarItin = React.createClass({

  getInitialState(){
    return({
      checked: false
    })
  },

  onChange(){
    if (this.props.carItinInfo.status_id === 1){
      if (this.props.dashboardState.itinItems[0].selectedBookedCars[this.props.carItinInfo.id] === undefined){
        this.props.dashboardState.itinItems[0].selectedBookedCars[this.props.carItinInfo.id] = true;
      } else {
        this.props.dashboardState.itinItems[0].selectedBookedCars[this.props.carItinInfo.id] 
        = !this.props.dashboardState.itinItems[0].selectedBookedCars[this.props.carItinInfo.id]
      } 
    } else if (this.props.carItinInfo.status_id === 2){
      if (this.props.dashboardState.itinItems[1].selectedSavedCars[this.props.carItinInfo.id] === undefined){
        this.props.dashboardState.itinItems[1].selectedSavedCars[this.props.carItinInfo.id] = true;
      } else {
        this.props.dashboardState.itinItems[1].selectedSavedCars[this.props.carItinInfo.id] 
        = !this.props.dashboardState.itinItems[1].selectedSavedCars[this.props.carItinInfo.id]
      } 
    }
  },

   changeDate(date) {
    let newDate = date.substring(0,10).split("-").join("/");
    let year = newDate.slice(0,4);
    let monthDay = newDate.slice(5);
    return monthDay += '/' + year;
  },

  render() {
      return (
        <div className='item-car-itin'>
          <form>
            <div className="checkbox">
              <label>
                <input type="checkbox" value="" 
                onChange={this.onChange}/>
                {this.props.carItinInfo.rentalCompany}
                <br/>{this.props.carItinInfo.vehicleBrand}
                <br/>{this.changeDate(this.props.carItinInfo.pickUpTime)} 
                -  
                {this.changeDate(this.props.carItinInfo.dropOffTime)}
              </label>
            </div>
          </form>
        </div>      
      );
    } 
});

export default CarItin;