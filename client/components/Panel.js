// DASHBOARD PANEL ============================================================
import React from 'react';
import Hotels from './Hotels';

const Panel = React.createClass({
  render() {
    console.log('>>>> PANEL this.props: ', this.props);
    // let hotelList = this.props.expediaInfo.expediaInfo.hotelList;
    return (
      <div className="panel-view">
        <Hotels hotelList={this.props.hotelList}/>
        { /*
          <Flights/>
          <CarRentals/>
          <Activities/>
          */
        }
      </div>
    );
  }
});

export default Panel;
