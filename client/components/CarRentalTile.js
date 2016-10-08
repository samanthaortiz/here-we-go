// DASHBOARD > PANEL > CAR RENTAL TILE ========================================
import React from 'react';
import CarRental from './CarRental';

const CarRentalTile = React.createClass({

  filterCars() {
    let carInfo = this.props.carData.tripData[1].carData.CarInfoList.CarInfo;
    let cars = [];
    let filterCars = [];

    carInfo.forEach(function(car){
      if(car.CarClass !== "Special Special") {
        cars.push(car);
      }
    });

    if(cars.length > 25){
      for(var i = 0; i < 25; i++){
       filterCars.push(cars[i]);
     }
     return filterCars;
   }
   return cars;
  },

  render() {
    let cars = this.filterCars();

    return (
      <div className="tile-car-rental">
        <h3>CAR RENTAL</h3>
        <ul className="row">
          {
            cars.map((car) => 
              <CarRental
                {...this.props}
                key={car.PIID}
                carInfo={car}
                isLoggedIn={this.props.carData.loggedIn}
                userEmail={this.props.carData.email}
                startDate={this.props.carData.startDate}
              />
            )
          }
        </ul>
      </div>
    );
  }
});

export default CarRentalTile;
