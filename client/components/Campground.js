// // DASHBOARD > PANEL > campground TILE > campground =====================================
// import React from 'react';

// const Campground = React.createClass({

//   render() {
    
//     // console.log('>>>>> campground <<<<<');
//     // console.log('campground: ', this.props.campgroundInfo);

//     if(this.props.campgroundInfo !== undefined) {
//       return (
//         <div className="item-campground">
//           <button type="button" className="btn">Save campground</button>
//           <p>
//             <a href={"https://www.expedia.com/New-York-campgrounds.h"+this.props.campgroundInfo.campgroundId+".campground-Information?rfrr=TG.LP.Topcampgrounds#chkin="+this.changeDate(this.props.startDate)+"&chkout="+this.changeDate(this.props.endDate)} target="_blank">
//             { this.props.campgroundInfo.localizedName }
//             </a>
//           </p>
//           <p>
//             <img src={'https://images.trvl-media.com' + this.props.campgroundInfo.largeThumbnailUrl }/>
//           </p>
//           <p>
//             ${ this.props.campgroundInfo.lowRateInfo.priceToShowUsers } per night
//           </p>
//           <p>
//             { this.props.campgroundInfo.shortDescription }
//           </p>
//         </div>
//       );
//     } else {
//       return (
//         <div className="item-campground">
//           <h3>Select Your Campground</h3>
//         </div>
//       );
//     }
//   }
// });

// export default Campground;