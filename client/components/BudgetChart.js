// DASHBOARD COMPONENT ========================================================
import React, { Component } from 'react';
import { Link } from 'react-router';

const BudgetChart = React.createClass({

  componentDidMount: function() {
    this.renderChart();
  },

  renderChart: function() {
    console.log('START!')

var w = 400;
var h = 400;
var r = h/2;
var color = d3.scaleOrdinal(d3.schemeCategory20c);

var data = [{"label":"Category A", "value":20}, 
              {"label":"Category B", "value":50}, 
              {"label":"Category C", "value":30}];


var vis = d3.select('#chart').append("svg:svg").data([data]).attr("width", w).attr("height", h).append("svg:g").attr("transform", "translate(" + r + "," + r + ")");
var pie = d3.pie().value(function(d){return d.value;});

// declare an arc generator function
var arc = d3.arc().outerRadius(r);

// select paths, use arc generator to draw
var arcs = vis.selectAll("g.slice").data(pie).enter().append("svg:g").attr("class", "slice");
arcs.append("svg:path")
    .attr("fill", function(d, i){
        return color(i);
    })
    .attr("d", function (d) {
        // log the result of the arc generator to show how cool it is :)
        console.log(arc(d));
        return arc(d);
    });

// add the text
arcs.append("svg:text").attr("transform", function(d){
      d.innerRadius = 0;
      d.outerRadius = r;
    return "translate(" + arc.centroid(d) + ")";}).attr("text-anchor", "middle").text( function(d, i) {
    return data[i].label;}
    );

  },
  
  render() {
    return (
      <div>
        <div id="chart"></div>
      </div>
    );
  }
}); 

export default BudgetChart;
