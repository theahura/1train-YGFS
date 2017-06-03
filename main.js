// forked from http://bl.ocks.org/mbostock/1153292

nodes = {
    "Donald Trump": {
        "name": "United States",
        "USA": true,
        "index": 0,
        "x": 350,
        "y": 300,
        "image": "http://www.flags.net/images/largeflags/UNST0001.GIF",
        "description": "dick president",
        "source":"",
        "largeRadius": true
    },
    "Vladimir Putin": {
        "name": "Russia",
        "USA": false,
        "index": 1,
        "x": 850,
        "y": 300,
        "image": "https://upload.wikimedia.org/wikipedia/en/archive/f/f3/20120812153730%21Flag_of_Russia.svg",
        "description": "dick prime minister",
        "source":"",
        "largeRadius": true
    }
}

  links = [{
    "source": nodes["Donald Trump"],
    "target": nodes["Vladimir Putin"],
    "type": LINK_TYPE.Default,
    "confirmed": true
  }];

var width = window.innerWidth,
    height = window.innerHeight;

var simulation = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).distance(40))
    .alphaTarget(1)
    .on("tick", ticked);

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

  // function expand() {
  //   $('.intro-text').fadeOut();
  //   $('.svg-container').removeClass('intro');
  //   $('.about-button').removeClass('intro');
  //   simulation.restart();
  //   var a1 = $(nodes["You"]).animate({x:21, px: 21});
  //   var a2 = $(nodes["Donald Trump"]).animate({x:1121, px: 1121});
  //   $.when( a1, a2 ).then(function() {
  //     simulation.stop();
  //     nodes = {};
  //     links = [];
  //     restart();
  //     initData();
  //     restart();
  //     $('.ui-container').fadeIn(500);
  //     panIfSmall();
  //     $(window).resize(panIfSmall);
  //     setTimeout(function() {
  //       simulation.stop();
  //     }, 5000);
  //   });
  // }

// initialize();

svg.append("defs").selectAll("pattern")
    .data(d3.values(nodes))
    .enter()
    .append("pattern")
                        .attr("id", function (d) { return d.index })
                        .attr("height", 1)
                        .attr("width", 1)
                        .attr("x", "0")
                        .attr("y", "0")
                        .append("image")
                        .attr("xlink:href", function (d) { return d.image })
                        .attr("height", 0)
                        .attr("width", 0);

svg.append("defs").selectAll("marker")
    .data(["arrow"])
    .enter().append("marker")
    .attr("id", function (d) { return d; })
    .attr("viewBox", "0 -5 10 10")
    .attr("refX", 55)
    .attr("refY", -2)
    .attr("markerWidth", 8)
    .attr("markerHeight", 8)
    .attr("orient", "auto")
    .append("path")
    .attr("d", "M0,-5L10,0L0,5");

var g = svg.append("g"),
    link = g.append("g").selectAll("path")
    node = g.append("g").selectAll("circle");

restart();

function nodeBuild() {
    node = node.data(d3.values(nodes), function (d) { return d.name;});
    node.exit().remove();

    node = node.enter().append("g")

    var a = node.append("a")
        .on("mouseover", function (d) {
            d3.select(this).style("cursor", "default");
            d3.select(this.parentNode).selectAll("text").style("opacity", 0);
            d3.select(this.parentNode).selectAll("circle").attr("fill", function (d) { return "url(#" + d.index + ")" });
            $("#description-box").text(d.description);
        })
        .on("mouseout", function (d) { 
            d3.select(this.parentNode).selectAll("text").style("opacity", 1);
            d3.select(this.parentNode).selectAll("circle").attr("fill", "white") 
        });

    a.append("circle")
        .attr("r", function (d) {
            if (d.largeRadius) {
                return 95;
            }
            else {
                return 35;
            }
        })
        .attr("fill", "white")
        .attr("stroke-width", 3)
        .attr("stroke", function (d) {
            if (d.USA) {
                return "#9DD1F1";
            }
            else {
                return "#BA6157";
            }
        });

    a.append("text")
        .attr("text-anchor", "middle")
        .attr("dy", 0.3)
        .style("fill", "#485F6E")
        .style("font-size", "60%")
        .text(function (d) { return d.name; })
        .call(wrap, 50);
}

function restart() {

    nodeBuild();

    link = link.data(links, function (d) { console.log(d.source.name + "-" + d.target.name); return d.source.name + "-" + d.target.name; });

    link = link.enter().append("path")
        .attr("class", function (d) { return "link " + d.type; })
        .style("stroke-dasharray", function (d) {
            if (d.source.name != "United States") {
                if (d.confirmed) {
                    return d3.select(this).node().getTotalLength();
                }
                else {
                    return 3;
                }
            }
        })
        .style("stroke", function (d) {
            if (d.type == LINK_TYPE.Business) {
                return "#8FD5A6"
            }
            else if (d.type == LINK_TYPE.Political) {
                return "#FC7753"
            }
            else if (d.type == LINK_TYPE.Personal) {
                return "#EB5160"
            }
            else {
                return "FFF"
            }
        })
        .attr("marker-end", "url(#arrow)")
    
    var initLink = svg.select("path.default");

    // var startPoint = pathStartPoint(initLink);
    // var marker = svg.append("circle");
    
    // marker.attr("r", 7)
    //     .attr("id", "marker")
    //     .attr("transform", "translate(" + startPoint + ")");
    // console.log(initLink.node().attr("d"));
    // var startPoint = initLink.x;


    link
      .attr("stroke", "steelblue")
      .attr("stroke-width", "2")
      .attr("fill", "none");

      var path = svg.append("path")
      .attr("d","M 500 60 L 50 110 L 90 70 L 140 100")
      .attr("stroke", "steelblue")
      .attr("stroke-width", "2")
      .attr("fill", "none")

      var totalLength = path.node().getTotalLength();

      path
      .attr("stroke-dasharray", totalLength + " " + totalLength)
      .attr("stroke-dashoffset", totalLength)
      .transition()
    .duration(2000)
    .attr("stroke-dashoffset", 0);

    startPoint = pathStartPoint(path);

    var circ = svg.append("circle")
        .attr("r", 50)
        .attr("transform", "translate(500, 60)");

    circ.transition()
        .duration(2000)
        .attrTween("transform", translateAlong(path.node()))
        // .each("end", transition);// infinite loop

    console.log(link.node())


    // .attr("transform", "translate(" + startPoint + ")");


    // console.log(translateAlong(startPoint));

    // link.filter( function (d) {
    //     return d.source.name == "United States";
    //     })
    initLink
        .attr("d", linkArc)
        .attr("stroke-dasharray", function (d) {

            // var totalLength = d3.select(this).node().getTotalLength();
            // return totalLength + " " + totalLength;
            return "500 500"
        })
        .attr("stroke-dashoffset", function (d) {
            return "500";
            // return d3.select(this).node().getTotalLength();
        })
        .transition()
        .duration(2000)
        .attr("stroke-dashoffset", 0)
        .attr("marker-end", "url(#arrow)")

    var totalLength = link.node().getTotalLength();

    startPoint = pathStartPoint(link);
    console.log(startPoint);

    // var marker = svg.append("polygon")
    //     .attr("points", "0,0 10,0 5,8.66")
    // .attr("refX", 55)
    // .attr("refY", -2)
    //     // .attr("transform", "translate(" + startPoint + ")");

    // marker.transition()
    //     .duration(2000)
    //     .attrTween("transform", translateAlong(link.node()))

    // link
    // .transition()
    // .duration(2000)
    // .attr("stroke-dashoffset", function (d) {
    //     console.log(d3.select(this).node().getTotalLength());
    //     return d3.select(this).node().getTotalLength();
    // });

    
    // .transition()
    // .duration(2000)
    // .attr("stroke-dashoffset", function (d) {
        // d3.select(this).node().getTotalLength();
    // });

    simulation.nodes(nodes);
    simulation.force("link").links(links);
    simulation.alpha(1).on("tick", ticked).restart();
}

function translateAlong(path) {
  var l = path.getTotalLength();
  var t0 = 0;
  return function(i) {
    return function(t) {
      var p0 = path.getPointAtLength(t0 * l);//previous point
      var p = path.getPointAtLength(t * l);////current point
      var angle = Math.atan2(p.y - p0.y, p.x - p0.x) * 180 / Math.PI;//angle for tangent
      t0 = t;
      //Shifting center to center of rocket
      var centerX = p.x - 5,
      centerY = p.y - 4.33;
      return "translate(" + centerX + "," + centerY + ")rotate(" + angle + " 5" + " 4.33" +")";
    }
  }
}

// Get path start point for placing marker
function pathStartPoint(path) {
    console.log(path.attr("d"));
    var d = path.attr("d"),
    dsplitted = d.split(" ");
    console.log(dsplitted[1]);
    return dsplitted[1];
}

function ticked() {
    // link.attr("d", "M 200 300 L 50 100 L 90 70 L 140 100");
    link.attr("d", linkArc);

    node.attr("transform", function (d) { return "translate(" + d.x + "," + d.y + ")"; });
}

function linkArc(d) {
    var dx = d.target.x - d.source.x,
        dy = d.target.y - d.source.y,
        dr = Math.sqrt(dx * dx + dy * dy);

    return "M " + d.source.x + "," + d.source.y + " A " + dr + "," + dr + " 0 0,1 " + d.target.x + "," + d.target.y;
}

function wrap(text, width) {
    text.each(function() {
        var text = d3.select(this),
            words = text.text().split(/\s+/).reverse(),
            word,
            line = [],
            lineNumber = 0,
            lineHeight = 1.1, // em
            y = text.attr("y"),
            dy = parseFloat(text.attr("dy")),
            tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
        while (word = words.pop()) {
            line.push(word);
            tspan.text(line.join(" "));
            if (line.length > 1 && tspan.node().getComputedTextLength() > width) {
                line.pop();
                tspan.text(line.join(" "));
                line = [word];
                lineNumber++;
                tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", 1 * lineHeight + dy + "em").text(word);
           }
        }
        text.attr("transform", "translate(0, " +(lineNumber * -7) + ")")
    });
}