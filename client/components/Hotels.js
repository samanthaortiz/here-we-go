import React from 'React';

const Hotel = React.createClass({
  render(){
    var hotel = this.props;
    return (

      <div className="tile-hotel">
        { this.props.hotelInfo.localizedName } 
      </div>

    )
  }
})

export default Hotel;