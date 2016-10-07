// DASHBOARD > PANEL > HOTEL TILE > HOTEL =====================================
import React from 'react';

const Hotel = React.createClass({

  getInitialState() {
    return {
      status_id: '',
      type_id: '',
      user_email: '',
      providerName: '',
      address: '',
      // telephone: '',
      startDate: '',
      endDate: '',
      days: '',
      organization: ''
    };
  },

  changeDate(date) {
    let newDate = date.split("-").join("/");
    let year = newDate.slice(0,4);
    let monthDay = newDate.slice(5);
    return monthDay += '/' + year;
  },

  handleSaveHotel: function(event) {
    event.preventDefault();
    // console.log('>>>>> ', this.props)
    // console.log('>>>>> ', this.props.hotelInfo)

    let dataObj = {
      status_id: 2,      // Saved
      type_id: 2,        // hotel
      user_email: `${this.props.userEmail.split("=")[1].split("#")[0]}`,
      providerName: `${this.props.hotelInfo.localizedName}`,
      address: `${this.props.hotelInfo.address}, ${this.props.hotelInfo.city}`,
      // telephone: '',
      startDate: `${this.props.startDate}`,
      endDate: `${this.props.endDate}`,
      days: `${this.props.days}`,
      organization: 'Expedia'
    };

    // console.log('>>>> ', dataObj);

    $.ajax({
      url: '/hotelReservations',
      type: 'POST',
      data: JSON.stringify(dataObj),
      contentType: 'application/json',
      success: function (data) {
        // // Trigger a fetch to update the messages, pass true to animate
        // app.fetch();
      },
      error: function (data) {
        console.error('ERROR SENDING TO DATABASE: ', data);
      }
    });
  },

  render() {
    let saveButton;
    if (this.props.isLoggedIn) {
      saveButton = <button type="button" className="btn" onClick={this.handleSaveHotel}>Save Hotel</button>;
    }

<<<<<<< d352e2d2a38b5699ad83b93ba4819f2414a6a167
<<<<<<< ec867f9d4a18d735bd4bcf99738d98ff4fe38272
<<<<<<< 252e928e170f190e0e6b909f471c97b32f4861a4
=======
    // console.log('>>>>>> ', this.props);

>>>>>>> fix(Activities): Activities routes edited to populate itineraries correctly
=======
<<<<<<< c2898f8eee83564b25d84c4bb25652132a19bcf6
=======
    // console.log('>>>>>> ', this.props);

>>>>>>> Bundle.js added
>>>>>>> Bundle.js added
=======
    // console.log('>>>>>> ', this.props);

>>>>>>> Bundle.js added:
    let thumbIMG = this.props.hotelInfo.largeThumbnailUrl
    let largeIMG = thumbIMG.replace("d.jpg", "b.jpg");

    if(this.props.hotelInfo !== undefined) {
      return (
        <li className="item-hotel">
          <div className="crop">
            <img src={ `https://images.trvl-media.com${largeIMG}` }/>
          </div>
          <div className="details clearfix">
            <a href={"https://www.expedia.com/New-York-Hotels.h"+this.props.hotelInfo.hotelId+".Hotel-Information?rfrr=TG.LP.TopHotels#chkin="+this.changeDate(this.props.startDate)+"&chkout="+this.changeDate(this.props.endDate)} target="_blank">{ this.props.hotelInfo.localizedName }</a><br />

            <span>{ this.props.hotelInfo.address }, {this.props.hotelInfo.city}</span><br />
            
            <strong>${ this.props.hotelInfo.lowRateInfo.priceToShowUsers }</strong> per night
            
            {saveButton}
          </div>
        </li>
      );
    } else {
      return (
        <div className="item-hotel">
          <h3>Select Your Hotel</h3>
        </div>
      );
    }
  }
});

export default Hotel;