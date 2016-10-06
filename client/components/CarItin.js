import React from 'react';

const CarItin = React.createClass({
  onChange(){
    if (this.props.dashboardState.selectedBookedCars[this.props.carItinInfo.id] === undefined){
      this.props.dashboardState.selectedBookedCars[this.props.carItinInfo.id] = true;
    } else {
      this.props.dashboardState.selectedBookedCars[this.props.carItinInfo.id] = !this.props.dashboardState.selectedBookedCars[this.props.carItinInfo.id]
    } 
    console.log('this is the dash state for booked car itin: ', this.props.dashboardState.selectedBookedCars)
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
          <h4>CAR RENTAL ITIN</h4>
          <form>
            <div className="checkbox">
              <label>
                <input type="checkbox" value="" 
                onChange={this.onChange}/>
                {this.props.carItinInfo.rentalCompany}
                <br/>{this.props.carItinInfo.vehicleBrand}
                <br/>{this.changeDate(this.props.carItinInfo.pickUpTime)} to {this.changeDate(this.props.carItinInfo.dropOffTime)}
              </label>
            </div>
          </form>
        </div>      
      );
    } 
});

export default CarItin;