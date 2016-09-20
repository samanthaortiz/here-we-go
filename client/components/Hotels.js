import React from 'React';

const Hotel = React.createClass({
  render(){
    return (
      <figure className="hotel-figure">
        {this.props.hotelInfo.name} &nbsp;
        {this.props.hotelInfo.lowRate}
        </figure>
      );
  } 
})

export default Hotel;