// forked from http://bl.ocks.org/mbostock/1153292

var simulation = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).distance(200))
    .alphaTarget(1)
    .on("tick", ticked);

var svg = d3.select(".svg-container").append("svg")
    .attr("class", "main")
    // .attr("width", width)
    // .attr("height", height)
    .attr("viewBox", "0 0 1150 800")
    .attr("preserveAspectRatio", "xMidYMid meet");

// for (var l of links) {
//     svg.append("circle")
//         .attr("class", "marker")
//         .attr("fill", "#FFF")
//         .attr("r", "5")
//         .attr("transform", "translate(" + width * 0.2 + ", " + height * 0.2 + ")")
// }

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
            .attr("xlink:href", function (d) { return "img/" + d.image })
            .attr("height", 85)
            .attr("width", 85);
}

function BFSpaths(nData) {
    var queue = [];
    var visitedNodes = new Set();
    var visitedLinks = new Set();
    var immediateLinks = new Set();
    var toTrump = [];

    for (var l of links) {

        var parent = l.target;
        var child = l.source;

        if (parent == nData) {
            if (child.name == "Donald Trump") {
                toTrump.push([l]);
            }
            queue.push([l]);
            visitedLinks.add(l);
            immediateLinks.add(l);
        }
    }

    while (queue.length > 0) {
        var path = queue.shift();
        var n = path[path.length - 1].source;

        for (var l of links) {

            var parent = l.target;
            var child = l.source;

            if (parent == n) {
                var newpath = path.slice();
                newpath.push(l)

                if (child.name == "Donald Trump") {
                    toTrump.push(newpath);
                }
                else {
                    queue.push(newpath);                    
                }
            }
        }

    }

    // only add minimum links to visitedLinks
    var minPathLength = getMinPathLength(toTrump);

    for (var p of toTrump) {
        if (p.length == minPathLength) {
            for (var l of p) {
                visitedLinks.add(l)
            }
        }
    }

    // add the minimum links + immediate links
    for (var l of visitedLinks) {
        visitedNodes.add(l.source);
        visitedNodes.add(l.target);
    }

    return [visitedNodes, visitedLinks, immediateLinks];
}

function getMinPathLength(arr) {

    if (arr.length == 0) {
        return 0;
    }

    var minLength = arr[0].length;

    for (var p of arr) {
        if (p.length < minLength) {
            minLength = p.length;
        }
    }

    return minLength;

}

function BFS(nData) {
    var queue = [nData];
    var visitedNodes = new Set();
    var visitedLinks = new Set();
    var immediateLinks = new Set();

    while (queue.length > 0) {
        var n = queue.shift();

        if (!visitedNodes.has(n)) {
            visitedNodes.add(n);

            for (var l of links) {
                var parent = l.source;
                var child = l.target;

                if (parent == nData) {
                    immediateLinks.add(l);
                }

                if (parent == n) {
                    queue.push(child);
                    visitedLinks.add(l);
                }
            }
        }

    }

    return [visitedNodes, visitedLinks, immediateLinks];
}

function networkNodes(nData) {

    var forward = BFS(nData),
        backward = BFSpaths(nData);

    var visitedNodesForward = forward[0],
        visitedLinksForward = forward[1],
        immediateLinksForward = forward[2];

    var visitedNodesBackward = backward[0],
        visitedLinksBackward = backward[1],
        immediateLinksBackward = backward[2];

    node.filter( function (d) {
        return !visitedNodesForward.has(d) && !visitedNodesBackward.has(d);
    })
        .transition()
        .duration(200)
        .style("opacity", 0.3)

    link.filter( function (d) {
        return !visitedLinksForward.has(d) && !visitedLinksBackward.has(d);
    })
        .transition()
        .duration(200)
        .style("opacity", 0.1)

    if (nData.name == "Donald Trump") {
        link.filter( function (d) {
            return immediateLinksForward.has(d);
        })
            .transition()
            .duration(200)
            .style("opacity", 1)
            .style("stroke", function (lData) {
                showLinkLabel(this, lData);
                return lData.type.color;
            });

        // link.filter( function (d) {
        //     return visitedLinksForward.has(d) && !immediateLinksForward.has(d);
        // })
        //     .transition()
        //     .duration(200)
        //     .style("opacity", 1)
        //     .style("stroke", "#000");

        clearDescriptionBox();
        var a1 = Array.from(immediateLinksForward)
        populateDescriptionBox(a1);
    }
    else if (nData.name == "Vladimir Putin") {

        link.filter( function (d) {
            return immediateLinksBackward.has(d);
        })
            .transition()
            .duration(200)
            .style("opacity", 1)
            .style("stroke", function (lData) {
                showLinkLabel(this, lData);
                return lData.type.color;
            });

        link.filter( function (d) {
            return visitedLinksBackward.has(d) && !immediateLinksBackward.has(d);
        })
            .transition()
            .duration(200)
            .style("opacity", 1)
            .style("stroke", "#000");

        clearDescriptionBox();
        var a1 = Array.from(immediateLinksBackward)
        populateDescriptionBox(a1);
    }
    else {

        node.filter( function (d) {
            return !visitedNodesForward.has(d) && !visitedNodesBackward.has(d);
        })
            .transition()
            .duration(200)
            .style("opacity", 0.3)

        link.filter( function (d) {
            return !visitedLinksForward.has(d) && !visitedLinksBackward.has(d);
        })
            .transition()
            .duration(200)
            .style("opacity", 0.1)

        link.filter( function (d) {
            return visitedLinksForward.has(d) || immediateLinksBackward.has(d);
        })
            .transition()
            .duration(200)
            .style("opacity", 1)
            .style("stroke", function (lData) {
                showLinkLabel(this, lData);
                return lData.type.color;
            });

        link.filter( function (d) {
            return visitedLinksBackward.has(d) && !immediateLinksBackward.has(d);
        })
            .transition()
            .duration(200)
            .style("opacity", function(dd) {
                return 1;
            })
            .style("stroke", "#000");

        clearDescriptionBox();
        var a1 = Array.from(visitedLinksForward),
            a2 = Array.from(immediateLinksBackward),
            a3 = a1.concat(a2);
        populateDescriptionBox(a3);
    }

    populatePOIBox(nData);
}

function showLinkLabel(l, lData) {
    var l = d3.select(l).node()

    var midpoint = l.getPointAtLength(l.getTotalLength() / 2);
    var rectText = svg
        .append("g")
        .attr("class", function (d) { return "linkLabel linkLabel" + (lData.index + 1) })

    rectText
        .append("rect")
        .attr("x", function (d) {
            return midpoint.x - 10
        })
        .attr("y", function (d) {
            return midpoint.y - 10
        })
        .attr("width", "20px")
        .attr("height", "20px")
        .style("fill", "#000")

    rectText
        .append("text")
        .attr("x", function (d) {
            return midpoint.x - 5
        })
        .attr("y", function (d) {
            return midpoint.y + 5
        })
        .text(function (d) {
            return lData.index + 1;
        })
        // .attr("text-anchor", "middle")
        .style("fill", "#fff")
        .style("font-size", "60%")
        .style("opacity", 1);
}

function hideLinkLabels() {
    d3.selectAll(".linkLabel")
        .style("opacity", 0);
}

function populatePOIBox(nData) {

    d3.select(".poi-box")
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
    d3.select(".poi-box").style("opacity", 0);
}

function openGraph() {

  //   simulation.stop();

  //   link.remove()
  //   d3.selectAll("circle.marker").remove();

  //   node.selectAll("text")
		// .style("opacity", 0);
  //   node.selectAll("circle")
  //       .attr("fill", function (d) { return "url(#image" + d.index + ")" });

  //   node.selectAll("a").on("mouseover", null);
  //   node.selectAll("a").on("mouseout", null);

  //   node.filter( function (d) {
  //       return d.index == 1;
  //   })
  //   .transition()
  //       .duration(2000)
  //       .attr("transform", "translate(" + 1150 * 0.05 + "," + 800 * 0.6 + ")")
  //   .transition()
  //       .duration(200)
  //       .style("opacity", 0)

  //   node.filter( function (d) {
  //       return d.index == 2;
  //   })
  //   .transition()
  //       .duration(2000)
  //       .attr("transform", "translate(" + 1150 * 0.95 + "," + 800 * 0.5 + ")")
  //   .transition()
  //       .duration(200)
  //       .style("opacity", 0)
  //   .on("end", function (d) {
  //       restart();
  //   });
    
    $(".intro-subbox, .launch-button")
        .animate({"opacity": 0})
        .delay(200)
        .queue( function() {
             $(".intro-box").animate({"width": 0, "padding-left": 0}, 500)
        });

    $(".description-box")
        .delay(550)
        .animate({"opacity": 1}, 1000, function() {
          restart();
        })

    $(".poi-box")
        .delay(500)
        .animate({"opacity": 1}, 1000)

    defaultDescriptionBox();
}

function clearDescriptionBox() {
    d3.select('.description-subbox1').selectAll("div").remove()
    d3.select('.description-subbox2').selectAll("div").remove()
}

function shadedColor(lData) {
    return d3.color(lData.type.color).brighter(lData.index / 25)
}

function compareLinkIndex(a,b) {
  if (a.index < b.index)
    return -1;
  if (a.index > b.index)
    return 1;
  return 0;
}

function populateDescriptionBox(visitedLinks) {

    visitedLinks.sort(compareLinkIndex)

    for (var l of visitedLinks) {
        var description = l.description;

        description = (l.index + 1) + " | " + description;

        if (l.news_source_name != "") {
            description = description + " (" + l.news_source_name + ")";
        }

        buildDescriptionBoxLinks(l.type.color, description, !l.confirmed, true);
    }
}

function buildDescriptionBoxLinks(color, label, isDashed, isBigger) {

    var div = d3.select('.description-subbox1')
    
    if (isBigger) {
        div.style("width", "100%")
    }
    else {
        div.style("width", "36%")
    }

    div = div.append('div');

    div
        .append("svg")
            .attr('height', 10)
            .attr('width', 50)
        .append('path')
            .attr('d', "M0 7 l50 0")
            .style("stroke", function (d) {
                return color;
            })
            .style("stroke-dasharray", function (d) {
                if (isDashed) {
                    return 3
                }
                else {
                    return d3.select(this).node().getTotalLength();
                }
            })
            .style("stroke-width", 3);

    var subdiv = div
        .append('div')
        .attr("class", "link-path")
        .text(label);
    
    if (isBigger) {
        subdiv.style("width", "80%")
    }
    else {
        subdiv.style("width", "62%")
    }
}

function buildDescriptionBoxNodes(country) {

    var div = d3.select('.description-subbox2')
        .append('div')
        .style('float', "left")
        .style('padding-left', "5%")
        .append('svg')
            .attr('height', 75)
            .attr('width', 75)
        .append("g")

    var a = div.append("a")

    a.append("circle")
        .attr("cx", 37.5)
        .attr("cy", 37.5)
        .attr("r", 35)
        .attr("fill", "white")
        .attr("stroke-width", 2)
        .attr("stroke", function (d) {
            if (country == "USA") {
                return "#2E3E4E";
            }
            else if (country == "Russia") {
                return "#BF0603";
            }
            else {
                return "#FFF";
            }
        });

    a.append("text")
        .attr("text-anchor", "middle")
        .attr("x", 37)
        .attr("y", 39)
        .style("fill", "#485F6E")
        .style("font-size", "60%")
        .text(country)
}

function defaultDescriptionBox() {

    clearDescriptionBox();
    for (var l in LINK_TYPE) {
        buildDescriptionBoxLinks(LINK_TYPE[l].color, LINK_TYPE[l].name, false, false);
    }
    buildDescriptionBoxLinks("#000", "alleged, not confirmed", true, false);

    buildDescriptionBoxNodes("USA");
    buildDescriptionBoxNodes("Russia");
    buildDescriptionBoxNodes("Neither");
}

function nodePrebuild() {
    
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
                    .style("opacity", 1)
                node.selectAll("circle")
                    .attr("fill", "white"); 
            })
            .on("click", function() {
                openGraph();
            });
    }
    else {
        // node.style("opacity", 0)
        //     .transition()
        //     .duration(200)
        //     .style("opacity", 1);

        a
            .style("cursor", "default")
            .on("mouseover", function (d) {
                networkNodes(d);
                d3.select(this.parentNode).selectAll("circle")
                    .attr("fill", function (d) {
                        if (d.image != "") {
                            d3.select(this.parentNode).selectAll("text")
                                .style("opacity", 0);
                            return "url(#image" + d.index + ")";                
                        }
                        else {
                            return "white"
                        }
                    })
            })
            .on("mouseout", function (d) {
                defaultDescriptionBox();
                defaultPOIBox();
                hideLinkLabels();
                node
                    .transition()
                    .duration(200)
                    .style("opacity", 1);
                link
                    .transition()
                    .duration(200)
                    .style("opacity", 0.5)
                    .style("stroke", "#A9ADB3");
                d3.select(this.parentNode).selectAll("text")
                    .style("opacity", 1);
                d3.select(this.parentNode).selectAll("circle")
                    .attr("fill", "white")
            });
    }

    a.append("circle")
        .attr("r", 40)
        .attr("fill", "white")
        .attr("stroke-width", 2)
        .attr("stroke", function (d) {
            if (d.country == "USA") {
                return "#2E3E4E";
            }
            else if (d.country == "Russia") {
                return "#BF0603";
            }
            else {
                return "#FFF";
            }
        });

    a.append("text")
        .attr("text-anchor", "middle")
        .attr("dy", 0.3)
        .style("fill", "#485F6E")
        .style("font-size", "60%")
        .text(function (d) { return d.name; })
        .call(wrap, 50);
    node = node.merge(node);
}

function start() {

    populateSourcesBox();

    nodeBuild(true);

    link = link.data(links, function (d) { return d.source.name + "-" + d.target.name; });

    link = link.enter().append("path")
        .attr("class", function (d) { return "link " })
        .attr("id", function (d) { return "link" + d.index; })
        .style("stroke", "#FFF")
        .style("stroke-width", 3);

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

function linkOut(lData) {
    window.open(lData.news_source_url)
}

function networkLinks(lData) {

    node.filter( function (d) {
        return d.index != lData.source.index && d.index != lData.target.index;
    }).style("opacity", 0.5);

    link.filter( function (d) {
        return lData.index == d.index;
    })
    .style("opacity", 1)
    .style("stroke", function (d) {
        showLinkLabel(this, d);
        return d.type.color;
    });

    clearDescriptionBox();
    populateDescriptionBox([lData]);
}

function populateSourcesBox() {
    
    simulation.stop();

    finalDataBuild();

    var lSet = new Set();

    for (var l of links) {
        lSet.add(l.news_source_name)
    }

    for (var l of lSet) {
        $("#news-sources").append(function() {
            return '<div class = "sources-row">' + l + '</div>'
        });
    }

    for (var n in nodes) {
        var POI = nodes[n];
        $("#image-sources").append(function() {

            var source_name;
            var source_link;
            if (POI.image_source_name == "") {
                source_name = "No Image Found";
                source_link = " <span class = \"right\">(" + source_name + ")</span>"
            }
            else {
                source_name = POI.image_source_name;
                source_link = " <span class = \"right\">(<a href=\""
                    + POI.image_source_url + "\">"
                    + source_name
                    + "</a>)</span>"
            }

            return "<div class = \"sources-row\">" + POI.name + source_link + "</div>"
        });
    }

    initialDataBuild();

    simulation.nodes(nodes);
    simulation.force("link").links(links);
    simulation.alpha(1).on("tick", ticked).restart();
}

function restart() {

    finalDataBuild();
    node = node.data(d3.values(nodes), function (d) { return d.name;});
    node.exit().remove()

    nodeImages();
    nodeBuild(false);

    link = link.data(links, function (d) { return d.source.name + "-" + d.target.name; });

    // Keep the exiting links connected to the moving remaining nodes.
    link.exit().transition()
        .attr("opacity", 0)
        .remove();

    link = link.enter().append("path")
        .attr("class", function (d) { return "link " + d.type.name; })
        .style("stroke-dasharray", function (d) {
            if (d.confirmed) {
                return 0;
            }
            else {
                return 3;
            }
        })
        .style("stroke", "#A9ADB3")
        .style("stroke-width", 3)
        .on("click", function (d) {
            linkOut(d);
        })
        .on("mouseover", function (d) {
            networkLinks(d);

            var coordinates = d3.mouse(this);
            var x = coordinates[0];
            var y = coordinates[1];

            $("#source-cursor").text(d.news_source_name);
            $("#source-cursor").css("left", x + 20);
            $("#source-cursor").css("top", y + 20);
            $('body').css('cursor', 'pointer');
        })
        .on("mouseout", function (d) {
            defaultDescriptionBox();
            hideLinkLabels();
            node.style("opacity", 1);
            link.style("opacity", 0.5)
                .style("stroke", "#A9ADB3");
            $("#source-cursor").text("");
            $('body').css('cursor', 'default');
        })
        
    // link
    //     .style("opacity", 0)
    //     .transition()
    //     .duration(200)
    //     .style("opacity", 0.5);

    d3.select(".main")
        .transition()
        .duration(500)
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

    return "M " + d.source.x + "," + d.source.y + " A " + dr + "," + dr + " 0 0," + d.sweep + " " + d.target.x + "," + d.target.y;
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
