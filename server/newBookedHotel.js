var Hotel = require('./database/models/Hotel');

var bookedHotel = function(item, email){
    new Hotel({
      status_id: 1,
      type_id: 2,
      sift_id: item.sift_id,
      user_email: email,
      providerName: item.payload.reservationFor.name,
      address: item.payload.reservationFor.address,
      telephone: item.payload.reservationFor.telephone ,
      days: item.payload.reservationFor["x-days"],
      startDate: item.payload.checkinTime,
      endDate: item.payload.checkoutTime,
      organization: item.payload.broker.name
    })
    .save() 
}
module.exports = bookedHotel