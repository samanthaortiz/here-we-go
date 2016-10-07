var Car = require('./database/models/Car');

var bookedCar = function(item, email){
  // console.log('payload res for: ', payload.reservationFor)
    new Car({
      status_id: 1,
      type_id: 3,
      sift_id: item.sift_id,
      user_email: email,
      vehicleType: item.payload.reservationFor["@type"],
      vehicleBrand: item.payload.reservationFor.name,
      rentalCompany: item.payload.provider.name,
      pickUpAddress: item.payload.pickupLocation.address,
      dropOffAddress: item.payload.dropoffLocation.address,
      pickupTime: item.payload.pickupTime,
      dropOffTime: item.payload.dropoffTime
    })
    .save() 
}
module.exports = bookedCar