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
      telephone: '',
      days: '',
      startDate: '',
      endDate: '',
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
    console.log('>>>>> ', this.props)
    console.log('>>>>> ', this.props.hotelInfo)

    let dataObj = {
      status_id: 2,      // Saved
      type_id: 2,        // hotel
      user_email: `${this.props.email}`,
      providerName: `${this.props.hotelInfo.localizedName}`,
      address: `${this.props.hotelInfo.address}, ${this.props.hotelInfo.city}`,
      telephone: '',
      days: '',
      startDate: `${this.props.startDate}`,
      endDate: `${this.props.endDate}`,
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

    if(this.props.hotelInfo !== undefined) {
      return (
        <div className="item-hotel">
          {saveButton}
          <p>
            <a href={"https://www.expedia.com/New-York-Hotels.h"+this.props.hotelInfo.hotelId+".Hotel-Information?rfrr=TG.LP.TopHotels#chkin="+this.changeDate(this.props.startDate)+"&chkout="+this.changeDate(this.props.endDate)} target="_blank">
            { this.props.hotelInfo.localizedName }
            </a>
          </p>
          <p>
            <img src={'https://images.trvl-media.com' + this.props.hotelInfo.largeThumbnailUrl }/>
          </p>
          <p>
            ${ this.props.hotelInfo.lowRateInfo.priceToShowUsers } per night
          </p>
          <p>
            { this.props.hotelInfo.shortDescription }
          </p>
        </div>
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