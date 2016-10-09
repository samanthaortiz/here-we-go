// DASHBOARD COMPONENT ========================================================
import React, { Component } from 'react';
import { Link } from 'react-router';
//import { PieChart } from 'react-easy-chart';

const BudgetChart = React.createClass({

  // componentWillMount: function() {
  //   this.renderChart();
  // },

  // renderChart: function() {
  //   console.log('START!');
  //   // var pie = new d3pie("pieChart", { });
  //   var pie = new d3pie("pieChart", {
  //     "data": {
  //       "content": [
  //         { "label": "Master Course", "value": 2807 },
  //         { "label": "Affiliates", "value": 1072 },
  //         { "label": "Ebook", "value": 972 }
  //       ]
  //     }
  //   });


    // var width = 320,
    //     height = 200,
    //     radius = Math.min(width, height) / 2;

    // var color = d3.scaleOrdinal()
    //     .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

    // var arc = d3.arc()
    //     .outerRadius(radius - 10)
    //     .innerRadius(0);

    // var labelArc = d3.arc()
    //     .outerRadius(radius - 40)
    //     .innerRadius(radius - 40);

    // var pie = d3.pie()
    //     .sort(null)
    //     .value(function(d) { return d.population; });

    // var svg = d3.select("body").append("svg")
    //     .attr("width", width)
    //     .attr("height", height)
    //   .append("g")
    //     .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    // d3.csv("data/chartData.csv", type, function(error, data) {
    //   if (error) throw error;

    //   var g = svg.selectAll(".arc")
    //       .data(pie(data))
    //     .enter().append("g")
    //       .attr("class", "arc");

    //   g.append("path")
    //       .attr("d", arc)
    //       .style("fill", function(d) { return color(d.data.age); });

    //   g.append("text")
    //       .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
    //       .attr("dy", ".35em")
    //       .text(function(d) { return d.data.age; });
    // });

    // function type(d) {
    //   d.population = +d.population;
    //   return d;
    // }



// var w = 400;
// var h = 400;
// var r = h/2;
// var color = d3.scaleOrdinal(d3.schemeCategory20c);

// var data = [{"label":"Category A", "value":20}, 
//               {"label":"Category B", "value":50}, 
//               {"label":"Category C", "value":30}];


// var vis = d3.select('#chart').append("svg:svg").data([data]).attr("width", w).attr("height", h).append("svg:g").attr("transform", "translate(" + r + "," + r + ")");
// var pie = d3.pie().value(function(d){return d.value;});

// // declare an arc generator function
// var arc = d3.arc().outerRadius(r);

// // select paths, use arc generator to draw
// var arcs = vis.selectAll("g.slice").data(pie).enter().append("svg:g").attr("class", "slice");
// arcs.append("svg:path")
//     .attr("fill", function(d, i){
//         return color(i);
//     })
//     .attr("d", function (d) {
//         // log the result of the arc generator to show how cool it is :)
//         console.log(arc(d));
//         return arc(d);
//     });

// // add the text
// arcs.append("svg:text").attr("transform", function(d){
//       d.innerRadius = 0;
//       d.outerRadius = r;
//     return "translate(" + arc.centroid(d) + ")";}).attr("text-anchor", "middle").text( function(d, i) {
//     return data[i].label;}
//     );

  // },
      // <div>
        // <div id="pieChart"></div>
      // </div>
  
  render() {
    console.log('this.props in budget', this.props)
    return (
      <div>HI</div>
      {/*<PieChart
        size={200}
        data={[
          { key: 'Flight', value: 100 },
          { key: 'Hotel', value: 200 },
          { key: 'Car Rental', value: 50 },
          { key: 'Activities', value: 50 }
        ]}
      />
  }*/}
    );
  }
}); 

export default BudgetChart;
