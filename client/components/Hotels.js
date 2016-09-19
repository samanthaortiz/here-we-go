import React from 'React';

const Hotel = React.createClass({
  render(){

    return (
      <figure className="hotel-figure">
        <div className="hotel-wrap">
          { this.props.expediaInfo[0].hotelList[0].name }
        </div>

      </figure>
      )
  }
})

export default Hotel;