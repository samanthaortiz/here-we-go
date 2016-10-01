// DASHBOARD > PANEL > CAR RENTAL TILE ========================================
import React from 'react';
import CarRental from './CarRental';

const CarRentalTile = React.createClass({

  filterCars(){

    let carInfo = this.props.carData.tripData[1].carData.CarInfoList.CarInfo;

    let cars = [];

    carInfo.forEach(function(car){
      if(car.CarClass !== "Special Special"){
        cars.push(car);
      }
    })

    // let legs = allLegs.map(function(leg){
    //   return leg.legId === givenLegs[0] || leg.legId === givenLegs[1]
    // })

    return cars;
  },


  render() {
    // console.log('>>>>> CAR RENTAL TILE <<<<<');
    // console.log('carData: ', this.props.carData.tripData[1].carData)
    let cars = this.filterCars();
    // console.log('cars', cars);
    return (
      <div className="tile-car-rental">
        {
          cars.map((car) => 
            <CarRental
              key={car.PIID}
              carInfo={car}
            />
          )
        }
      </div>
    );
  }
});

export default CarRentalTile;
