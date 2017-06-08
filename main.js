// forked from http://bl.ocks.org/mbostock/1153292

$('.info-link').click(function() {

    svgStyling();
    bodyStyling();
    $('.info-box').toggle();

    return false;
});

$(document).click(function(e) { 
    if ($('.info-box').css('display') != "none" && e.target != $('.info-box')[0]) {
        svgStyling();
        bodyStyling()
        $('.info-box').hide();
    }
});

function svgStyling() {
    var svgDOM = $(".main")

    if (svgDOM.css("position") == "absolute") {
        svgDOM.css("position", "static");
        svgDOM.css("z-index", 1);
    }
    else {
        svgDOM.css("position", "absolute");
        svgDOM.css("z-index", -1);
    }
}

function bodyStyling() {

    var boxDOM = $(".info-box");
    $("body").children()
        .css("opacity", function (d) {
            if (boxDOM.css("display") != "none") {

                if ($(this).attr("class") == "info-box") {
                    return 0;
                }

                if ($(this).css("opacity") == "0") {
                    return 0;
                }
                else {
                    return 1                
                }

            }
            else {

                if ($(this).attr("class") == "info-box") {
                    return 1;
                }

                if ($(this).css("opacity") == "0") {
                    return 0;
                }
                else {
                    return 0.5                
                }

            }

        });
}

var simulation = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).distance(40))
    .alphaTarget(1)
    .on("tick", ticked);

var svg = d3.select("body").append("svg")
    .attr("class", "main")
    .attr("width", width)
    .attr("height", height);

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
            .attr("xlink:href", function (d) { return "img/" + d.image })
            .attr("height", 70)
            .attr("width", 70);
}

start();
// openGraph();

function BFS(nData, isForward) {
    var queue = [nData];
    var visitedNodes = new Set();
    var visitedLinks = new Set();
    var immediateLinks = new Set();

    while (queue.length > 0) {
        var n = queue.shift();

        if (!visitedNodes.has(n)) {
            visitedNodes.add(n);

            for (var l in links) {
                
                if (isForward) {
                    var parent = links[l].source;
                    var child = links[l].target;
                }
                else {
                    var parent = links[l].target;
                    var child = links[l].source;
                }

                if (parent == nData) {
                    immediateLinks.add(links[l]);
                }

                if (parent == n && !visitedNodes.has(child)) {
                    queue.push(child);
                    visitedLinks.add(links[l]);
                }
            }
        }
    }
    return [visitedNodes, visitedLinks, immediateLinks];
}

function networkNodes(nData) {

    var forward = BFS(nData, true),
        backward = BFS(nData, false);

    var visitedNodesForward = forward[0],
        visitedNodesBackward = backward[0],
        immediateLinksForward = forward[2];
        visitedLinksForward = forward[1],
        visitedLinksBackward = backward[1];
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
            .style("stroke", function (d) {
                return d.type.color;
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
            .style("stroke", function (d) {
                return d.type.color;
            });

        // link.filter( function (d) {
        //     return visitedLinksBackward.has(d) && !immediateLinksBackward.has(d);
        // })
        //     .transition()
        //     .duration(200)
        //     .style("opacity", 1)
        //     .style("stroke", "#000");

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
            .style("opacity", 1)
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
        .attr("class", function (d) { return "linkLabel linkLabel" + lData.link_index })

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
            return lData.link_index;
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
        .attr("transform", "translate(" + width * 0.05 + "," + height * 0.6 + ")")
    .transition()
        .duration(200)
        .style("opacity", 0)

    node.filter( function (d) {
        return d.index == 2;
    })
    .transition()
        .duration(2000)
        .attr("transform", "translate(" + width * 0.95 + "," + height * 0.5 + ")")
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

    $(".description-box")
        .delay(500)
        .animate({"opacity": 1}, 1500)

    $(".poi-box")
        .delay(500)
        .animate({"opacity": 1}, 1500)

    defaultDescriptionBox();
}

function clearDescriptionBox() {
    d3.select('.description-subbox1').selectAll("div").remove()
    d3.select('.description-subbox2').selectAll("div").remove()
}

function shadedColor(lData) {
    return d3.color(lData.type.color).brighter(lData.link_index / 25)
}

function compareLinkIndex(a,b) {
  if (a.link_index < b.link_index)
    return -1;
  if (a.link_index > b.link_index)
    return 1;
  return 0;
}

function populateDescriptionBox(visitedLinks) {

    visitedLinks.sort(compareLinkIndex)

    for (var l in visitedLinks) {
        lObj = visitedLinks[l]
        var description = lObj.description;

        if (lObj.link_index) {
            description = lObj.link_index + " | " + description;
        }

        if (lObj.news_source_name != "") {
            description = description + " (" + lObj.news_source_name + ")";
        }

        buildDescriptionBoxLinks(lObj.type.color, description, !lObj.confirmed);
    }
}

function buildDescriptionBoxLinks(color, label, isDashed = false, isBigger = true) {

    var div = d3.select('.description-subbox1')
    
    if (isBigger) {
        div.style("width", "100%")
    }
    else {
        div.style("width", "36%")
    }

    div = div.append('div');

    div
        .append('svg')
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
                    .style("opacity", 1)
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
        .attr("r", 35)
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
}

function start() {

    nodeBuild(true);

    link = link.data(links, function (d) { return d.source.name + "-" + d.target.name; });

    link = link.enter().append("path")
        .attr("class", function (d) { return "link " })
        .attr("id", function (d) { return "link" + d.index; })
        .style("stroke", function (d) {
            return "#000"
        })
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
        return lData.link_index == d.link_index;
    })
    .style("opacity", 1)
    .style("stroke", function (d) {
        showLinkLabel(this, d);
        return d.type.color;
    });

    clearDescriptionBox();
    populateDescriptionBox([lData]);
}

function restart() {

    dataBuild();
    nodeImages();
    nodeBuild(false);

    link = link.data(links, function (d) { return d.source.name + "-" + d.target.name; });

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
        
    link
        .style("opacity", 0)
        .transition()
        .duration(200)
        .style("opacity", 0.5);

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