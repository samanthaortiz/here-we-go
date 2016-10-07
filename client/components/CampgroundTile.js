// // DASHBOARD > PANEL > CAMPGROUND TILE =============================================
// import React from 'react';
// import Campground from './Campground';

// const CampgroundTile = React.createClass({
//   render() {

//     // console.log('>>>>> Campground TILE <<<<<');
//     // console.log('Campground tile this.props: ',  this.props);

//     if(this.props.CampgroundData.length !== 0) {
//       return (
//         <div className="tile-campground">
//         <h3>CampgroundS</h3>
//           {
//             this.props.campgroundData.tripData[0].campgroundData.campgroundList.map((Campground) =>
//               <Campground
//                 key={campground.campgroundId}
//                 CampgroundInfo={campground}
//                 startDate={this.props.campgroundData.startDate}
//                 endDate={this.props.campgroundData.endDate}
//               />
//             )
//           }
//         </div>
//       );
//     } else {
//       return (
//         <div className="tile-campground">
//           <Campground />
//         </div>
//       );
//     }

//   }
// });

// export default CampgroundTile;
