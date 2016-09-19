import React from 'React';

const Hotel = React.createClass({
  render(){
<<<<<<< 51e04b6ca11e4be137ec2f436d359e52f30392bd
    var hotel = this.props;
    return (
      <p>
        { this.props.hotelInfo.localizedName } 
      </p>
    )
=======

    return (
      <figure className="hotel-figure">
        <div className="hotel-wrap">
          { this.props.expediaInfo[0].hotelList[0].name }
        </div>

      </figure>
      )
>>>>>>> fix(): Expedia info rendering hotel name from hotel list
  }
})

export default Hotel;