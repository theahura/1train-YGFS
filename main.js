// forked from http://bl.ocks.org/mbostock/1153292

var simulation = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).distance(40))
    .alphaTarget(1)
    .on("tick", ticked);

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

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

for (var l in links) {
    svg.append("circle")
        .attr("class", function() {
            return "marker";
        })
        .style("fill", "#000")
        .attr("r", "2")
        .attr("transform", "translate(" + width * 0.2 + ", " + height * 0.2 + ")")
        .moveToBack();
}

var g = svg.append("g"),
    link = g.append("g").selectAll("path"),
    node = g.append("g").selectAll("circle")

nodeImages();

function nodeImages() {
    svg.append("defs").selectAll("pattern")
        .data(d3.values(nodes))
        .enter()
        .append("pattern")
            .attr("id", function (d) { return "image" + d.index })
            .attr("height", 10)
            .attr("width", 10)
            .attr("x", "0")
            .attr("y", "0")
        .append("image")
            .attr("xlink:href", function (d) { return d.image })
            .attr("height", 70)
            .attr("width", 70);
}

start();

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
    }).style("opacity", 0.2);

    link.filter( function (d) {
        return !visitedLinks.has(d);
    }).style("opacity", 0.2);

    clearDescriptionBox();
    for (let l of visitedLinks) {
        populateDescriptionBox(l.type.color, l.description)
    }

    populatePOIBox(nData);
}

function populatePOIBox(nData) {
    // d3.select(".poi-title")
        // .remove();

    d3.select(".poi-box")
        // .transition()
        // .duration(200)
        .style("opacity", 1);

    d3.select(".poi-name")
        .text( function (d) {
            return nData.name;
        });

    d3.select(".poi-description")
        .text( function (d) {
            return nData.description;
        });
}

function defaultPOIBox() {

    var container = d3.select(".poi-box")
        .style("opacity", 0);
    // d3.selectAll(".poi-name, .poi-description")
    //     .remove();
        
    // var container = d3.select(".poi-subbox")
    //     .style("opacity", 0);

    // var title = container
    //     .append("div")
    //     .attr("class", "poi-title");

    // title
    //     .append('span')
    //     .attr("class", "part1")
    //     .text("Your Gov");

    // title
    //     .append('span')
    //     .attr("class", "part2")
    //     .text("FOR SALE");

    // container
    //     .transition()
    //     .duration(200)
    //     .style("opacity", 0);
}

function openGraph() {

    simulation.stop();

    link.remove()
    d3.selectAll("circle.marker").remove();

    node.selectAll("text")
        .style("opacity", 0);
    node.selectAll("circle")
        .attr("fill", function (d) { return "url(#image" + d.index + ")" });

    node.selectAll("a").on("mouseover", null);
    node.selectAll("a").on("mouseout", null);

    node.filter( function (d) {
        return d.index == 1;
    })
    .transition()
        .duration(2000)
        .attr("transform", "translate(" + width * 0.1 + "," + height * 0.5 + ")")
    .transition()
        .duration(200)
        .style("opacity", 0)

    node.filter( function (d) {
        return d.index == 2;
    })
    .transition()
        .duration(2000)
        .attr("transform", "translate(" + width * 0.9 + "," + height * 0.5 + ")")
    .transition()
        .duration(200)
        .style("opacity", 0)
    .on("end", function (d) {
        nodePrebuild();
    });
    
    $(".intro-subbox")
        .animate({"opacity": 0})
        .delay(200)
        .queue( function() {
            $(".intro-box").animate({"width": 0, "padding-left": 0})
        });

    $(".link-box")
        .delay(500)
        .animate({"opacity": 1}, 1500)

    $(".poi-box")
        .delay(500)
        .animate({"opacity": 1}, 1500)

    defaultDescriptionBox();
}

function clearDescriptionBox() {
    d3.select('.link-subbox').selectAll("div").remove()
}

function populateDescriptionBox(color, label) {

    var div = d3.select('.link-subbox')
        .append('div')

    div
        .append('svg')
            .attr('height', 10)
            .attr('width', 50)
        .append('path')
            .attr('d', "M0 7 l50 0")
            .style("stroke", function (d) {
                return color;
            });

    div
        .append('span')
        .attr("class", "link-path")
        .text( function (d) {
            return label;
        });
}

function defaultDescriptionBox() {

    clearDescriptionBox();
    for (var l in LINK_TYPE) {
        populateDescriptionBox(LINK_TYPE[l].color, LINK_TYPE[l].name);
    }
}

function nodePrebuild() {
    node = node.data(d3.values(nodes), function (d) { return d.name;});
    node.exit().remove()
    restart();
}

function nodeBuild(isStart) {
    node = node.data(d3.values(nodes), function (d) { return d.name;});

    node = node.enter()
        .append("g")
        .attr("id", function(d) {
            return "node" + d.index;
        });

    var a = node.append("a")

    if (isStart) {
        a
            .on("mouseover", function (d) {
                link.style("opacity", 0.2);
                node.selectAll("text")
                    .style("opacity", 0);
                node.selectAll("circle")
                    .attr("fill", function (d) { return "url(#image" + d.index + ")" });
                node.style("cursor", "pointer");
            })
            .on("mouseout", function (d) {
                link.style("opacity", 1);
                node.selectAll("text")
                    .style("opacity", 1);
                node.selectAll("circle")
                    .attr("fill", "white"); 
            })
            .on("click", function() {
                openGraph();
            });
    }
    else {
        node.style("opacity", 0)
            .transition()
            .duration(200)
            .style("opacity", 1);
        a
            .on("mouseover", function (d) {
                networkNodes(d);
                d3.select(this)
                    .style("cursor", "default");
                d3.select(this.parentNode).selectAll("text")
                    .style("opacity", 0);
                d3.select(this.parentNode).selectAll("circle")
                    .attr("fill", function (d) { return "url(#image" + d.index + ")" });
                $("#link-box").text(d.description);
            })
            .on("mouseout", function (d) {
                defaultDescriptionBox();
                defaultPOIBox();
                node.style("opacity", 1);
                link.style("opacity", 1);
                d3.select(this.parentNode).selectAll("text")
                    .style("opacity", 1);
                d3.select(this.parentNode).selectAll("circle")
                    .attr("fill", "white") 
            });
    }

    a.append("circle")
        .attr("r", 35)
        .attr("fill", "white")
        .attr("stroke-width", 3)
        .attr("stroke", function (d) {
            if (d.USA) {
                return "#2E3E4E";
            }
            else {
                return "#BF0603";
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

    nodeBuild(true);

    link = link.data(links, function (d) { return d.source.name + "-" + d.target.name; });

    link = link.enter().append("path")
        .attr("class", function (d) { return "link " })
        .attr("id", function (d) { return "link" + d.index; })
        .style("stroke", function (d) {
            return "#000"
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
        
        .transition()
        .duration(2000)
        .attrTween("transform", translateAlong(d3.select("#link2").node()))
        
        .transition()
        .duration(2000)
        .attrTween("transform", translateAlong(d3.select("#link3").node()))
        
        .transition()
        .duration(2000)
        .attrTween("transform", translateAlong(d3.select("#link4").node()))
        
        .transition()
        .duration(2000)
        .attrTween("transform", translateAlong(d3.select("#link5").node()))
        
        .transition()
        .duration(2000)
        .attrTween("transform", translateAlong(d3.select("#link6").node()))
        
        .transition()
        .duration(2000)
        .attrTween("transform", translateAlong(d3.select("#link7").node()))



    simulation.nodes(nodes);
    simulation.force("link").links(links);
    simulation.alpha(1).on("tick", ticked).restart();
}

function networkLinks(lData) {

    node.filter( function (d) {
        return d.index != lData.source.index && d.index != lData.target.index;
    }).style("opacity", 0.2);

    link.filter( function (d) {
        return lData.index != d.index;
    }).style("opacity", 0.2);
}

function restart() {

    dataBuild();
    nodeImages();
    nodeBuild(false);

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
                return d.type.color
            })
        .attr("marker-end", "url(#arrow)")
        .on("mouseover", function (d) {
            networkLinks(d);
        })
        .on("mouseout", function (d) {
            node.style("opacity", 1);
            link.style("opacity", 1);
        })
        
    link
        .style("opacity", 0)    
        .transition()
        .duration(200)
        .style("opacity", 1);

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
        var dr = d.linknum + 200;
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