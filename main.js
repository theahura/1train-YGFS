// forked from http://bl.ocks.org/mbostock/1153292

// nodes = {
//     "Donald Trump": {
//         "name": "United States",
//         "USA": true,
//         "index": 1,
//         "x": 350,
//         "y": 300,
//         "image": "http://www.flags.net/images/largeflags/UNST0001.GIF",
//         "description": "dick president",
//         "source":"",
//         "largeRadius": true
//     },
//     "Vladimir Putin": {
//         "name": "Russia",
//         "USA": false,
//         "index": 2,
//         "x": 850,
//         "y": 300,
//         "image": "https://upload.wikimedia.org/wikipedia/en/archive/f/f3/20120812153730%21Flag_of_Russia.svg",
//         "description": "dick prime minister",
//         "source":"",
//         "largeRadius": true
//     }
// }

//   links = [
//       {
//         "source": nodes["Donald Trump"],
//         "target": nodes["Vladimir Putin"],
//         "type": LINK_TYPE.Business,
//         "index": 0,
//         "linknum": 0,
//         "confirmed": true
//       },
//       {
//         "source": nodes["Donald Trump"],
//         "target": nodes["Vladimir Putin"],
//         "type": LINK_TYPE.Political,
//         "index": 1,
//         "linknum": 40,
//         "confirmed": true
//       }
//   ];

d3.selection.prototype.moveToBack = function() {  
    return this.each(function() { 
        var firstChild = this.parentNode.firstChild; 
        if (firstChild) { 
            this.parentNode.insertBefore(this, firstChild); 
        } 
    });
};

var width = window.innerWidth,
    height = window.innerHeight;

var simulation = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).distance(40))
    .alphaTarget(1)
    .on("tick", ticked);

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

// for (var l in links) {
//     svg.append("circle")
//         .attr("class", function() {
//             return "marker";
//         })
//         .style("fill", "#fff")
//         .attr("r", "2")
//         .attr("transform", "translate(350, 300)")
//         .moveToBack();
// }

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
    link = g.append("g").selectAll("path"),
    node = g.append("g").selectAll("circle")

// start();
initialize();
restart();

function networkNodes(nData) {
    var queue = [nData];
    var visitedNodes = new Set();
    var visitedLinks = new Set();

    while (queue.length > 0) {
        var n = queue.shift();

        if (!visitedNodes.has(n)) {
            visitedNodes.add(n);

            for (var l in links) {
                var parent = links[l].source;
                var child = links[l].target;

                if (parent == n && !visitedNodes.has(child)) {
                    queue.push(child);
                    visitedLinks.add(links[l]);
                }
            }
        }
    }

    node.filter( function (d) {
        return !visitedNodes.has(d);
    }).style("opacity", 0.5);

    link.filter( function (d) {
        return !visitedLinks.has(d);
    }).style("opacity", 0.5);
}

function nodeBuild() {
    node = node.data(d3.values(nodes), function (d) { return d.name;});
    node.exit().remove();

    node = node.enter()
        .append("g")
        .attr("id", function(d) {
            return "node" + d.index;
        });

    var a = node.append("a")
        .on("mouseover", function (d) {
            networkNodes(d);
            d3.select(this).style("cursor", "default");
            d3.select(this.parentNode).selectAll("text").style("opacity", 0);
            d3.select(this.parentNode).selectAll("circle").attr("fill", function (d) { return "url(#" + d.index + ")" });
            $("#description-box").text(d.description);
        })
        .on("mouseout", function (d) { 
            node.style("opacity", 1);
            link.style("opacity", 1);
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

function start() {

    nodeBuild();

    link = link.data(links, function (d) { return d.source.name + "-" + d.target.name; });

    link = link.enter().append("path")
        .attr("class", function (d) { return "link " })
        .attr("id", function (d) { return "link" + d.index; })
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
        });

    link
        .attr("d", linkArc)
        .attr("stroke-dasharray", function (d) {
            var totalLength = this.getTotalLength();
            return totalLength + " " + totalLength;
        })
        .attr("stroke-dashoffset", function (d) {
            return this.getTotalLength();
        })
        .transition()
        .delay(function(d, i){
            return i * 2000
        })
        .duration(2000)
        .attr("stroke-dashoffset", 0);

    // add another transition for every new initial link
    d3.selectAll("circle.marker")
        .transition()
        .duration(2000)
        .attrTween("transform", translateAlong(d3.select("#link0").node()))
        .transition()
        .duration(2000)
        .attrTween("transform", translateAlong(d3.select("#link1").node()))

    simulation.nodes(nodes);
    simulation.force("link").links(links);
    simulation.alpha(1).on("tick", ticked).restart();
}

function restart() {

    nodeBuild();

    link = link.data(links, function (d) { return d.source.name + "-" + d.target.name; });

    link = link.enter().append("path")
        .attr("class", function (d) { return "link " + d.type; })
        .style("stroke-dasharray", function (d) {
            if (d.confirmed) {
                return d3.select(this).node().getTotalLength();
            }
            else {
                return 3;
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

    simulation.nodes(nodes);
    simulation.force("link").links(links);
    simulation.alpha(1).on("tick", ticked).restart();
}

function translateAlong(path) {
    var l = path.getTotalLength();
    return function(i) {
        return function(t) {
            var p = path.getPointAtLength(t * l);
            return "translate(" + p.x + "," + p.y + ")";//Move marker
        }
    }
}

// Get path start point for placing marker
function pathStartPoint(path) {
    var d = path.attr("d"),
    dsplitted = d.split(" ");
    return dsplitted[1];
}

function ticked() {
    // link.attr("d", "M 200 300 L 50 100 L 90 70 L 140 100");
    link.attr("d", linkArc);

    node.attr("transform", function (d) { return "translate(" + d.x + "," + d.y + ")"; });
}

function linkArc(d) {
    if (d.linknum) {
        var dr = d.linknum + 250;
    }
    else {
    var dx = d.target.x - d.source.x,
        dy = d.target.y - d.source.y,
        dr = Math.sqrt(dx * dx + dy * dy);
    }

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