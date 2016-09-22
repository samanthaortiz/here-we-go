const dummyHotelResp = [
{
    "message": "OK",
    "code": 200,
    "id": "bcbb50ba-97b3-11e4-9480-0a32a945b5b0",
    "result": {
        "hotel": {
            "@context": "http://schema.org",
            "@type": "LodgingReservation",
            "reservationId": "12345678",
            "reservationStatus": "http://schema.org/ReservationConfirmed",
            "reservationFor": {
                "@type": "LodgingBusiness",
                "address": "200 International Drive, 21202 Baltimore, Maryland, U.S.A.",
                "telephone": "1 (410) 576-5800",
                "name": "Four Seasons Hotel Baltimore",
                "x-days": "1"
            },
            "checkinTime": "2015-05-06T15:00:00",
            "checkoutTime": "2015-05-07T15:00:00",
            "broker": {
                "@type": "Organization",
                "name": "Four Seasons Hotels and Resorts"
            }
        }
    }
}
]