// DASHBOARD > PANEL > CAR RENTAL TILE ========================================
import React from 'react';
import CarRental from './CarRental';

const CarRentalTile = React.createClass({
  render() {
    console.log('>>>>> CAR RENTAL TILE <<<<<');
    console.log('carData: ', this.props.carData.data.expediaCarRentalInfo.expediaCarRentalInfo.CarInfoList.CarInfo)
    // var CarInfoArray = this.props.carData.data.expediaCarRentalInfo.expediaCarRentalInfo.CarInfoList.CarInfo;

    return (
      <div className="tile-car-rental">
        {
          this.props.carData.data.expediaCarRentalInfo.expediaCarRentalInfo.CarInfoList.CarInfo.map((car) =>
            <CarRental
              carInfo={car}
            />
          )
        }
      </div>
    );
  }
});

export default CarRentalTile;
