// DASHBOARD > PANEL > CAR RENTAL TILE ========================================
import React from 'react';
import CarRental from './CarRental';

const CarRentalTile = React.createClass({
  render() {
    console.log('>>>>> CAR RENTAL TILE <<<<<');
    // console.log('carData: ', this.props.carData.data.expediaCarRentalInfo.expediaCarRentalInfo.CarInfoList.CarInfo)

    return (
      <div className="tile-car-rental">
        <h3>Car Rentals</h3>
        {
          this.props.carData.data.expediaCarRentalInfo.expediaCarRentalInfo.CarInfoList.CarInfo.map((car) =>
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
