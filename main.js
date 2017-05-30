var graph = {
  "nodes": [
    {"name": "Donald Trump", "x": 100, "y": 100},
    // {"name": "orange"},
    // {"name": "yellow"},
    // {"name": "green"},
    // {"name": "blue"},
    // {"name": "violet"}
  ],
  "links": [
    // {"source": "Donald Trump", "target": "yellow"},
    // {"source": "Donald Trump", "target": "blue"},
    // {"source": "Donald Trump", "target": "green"}
  ]
}

var width = window.innerWidth;
var height = window.innerHeight;

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

var simulation = d3.forceSimulation()
    .force("charge", d3.forceManyBody().strength(-200))
    .force("link", d3.forceLink().id(function(d) { return d.name; }).distance(40))
    .force("x", d3.forceX(width / 2))
    .force("y", d3.forceY(height / 2));

var link = svg.append("g")
            .attr("class", "links")
            .selectAll("line")
            .data(graph.links)
            .enter().append("line")
            .attr("stroke-width", 1),
    node = svg.selectAll(".node");

var node = svg.selectAll(".node")
            .data(graph.nodes)
            .enter().append("g")
            .attr("class", "node")

node.append("circle")
    .attr("r", 5)
    .attr("fill", "#000");

node.append("text")
    .attr("dx", 6)
    .text(function(d) { return d.name; });



  simulation.nodes(graph.nodes)
   .on("tick", ticked);

  simulation.force("link").links(graph.links);

function ticked() {
  link.attr("x1", function(d) { return d.source.x; })
      .attr("y1", function(d) { return d.source.y; })
      .attr("x2", function(d) { return d.target.x; })
      .attr("y2", function(d) { return d.target.y; });

  node.attr("transform", function(d) {
                console.log(d);
                return "translate(" + d.x + "," + d.y + ")";
            });
}