import React from 'React';

const Hotel = React.createClass({
  render(){
    var hotel = this.props;
    return (
      <p>
        { this.props.hotelInfo.localizedName } 
      </p>
    )
  }
})

export default Hotel;