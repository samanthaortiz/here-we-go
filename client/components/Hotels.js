import React from 'React';

const Hotel = React.createClass({
  render(){
    const {hotel} = this.props.expediaInfo[0].hotelList;
    return (
      <figure className="hotel-figure">
        <div className="hotel-wrap">
          {console.log('hotel', hotel.name)}
          {hotel.name}
          
        </div>

      </figure>
      )
  }
})

export default Hotel;