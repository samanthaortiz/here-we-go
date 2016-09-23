let d3 = require("d3")
let data = [10, 50, 80];
let r = 300;

var color = d3.scale.ordinal()
  .range(["red", "blue", "orange"]);

let canvas = d3.select("body").append("svg")
  .attr("width", 1500)
  .attr("height", 1500);

let group = canvas.append("g")
  .attr("transform", "translate(300, 300)");

let arc = d3.svg.arc()
  .innerRadius(200) 
  //if inner is 0 and outer is a positive integer, 
  //it becomes a pie chart 
  .outerRadius(r);

let pie = d3.layout.pie()
  .value(function(d){return d;});

let arcs = group.selectAll(".arc")
  .data(pie(data))
  .enter()
  .append("g")
  .attr("class", "arc");

arcs.append("path")
  .attr("d", arc)
  .attr("fill", function(d){return color(d.data);})

arcs.append("text")
  .attr("transform", function(d){return "translate("+ arc.centroid(d) + ")";})
  .attr("text-anchor", "middle")
  .attr("font-size", "1.5em")
  .attr("font-color", "white")
  .attr("font-family", "sans-serif")
  .text(function(d){return d.data;});