// forked from http://bl.ocks.org/mbostock/1153292

var width = window.innerWidth,
    height = window.innerHeight;

var simulation = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).distance(40))
    .alphaTarget(1)
    .on("tick", ticked);

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

// svg.append("defs")
    // .selectAll("pattern")
    // .data(d3.values(nodes), function(d) { return d.name; })
    // .enter()

// var defs = svg.append("defs").attr("id", "imgdefs")
initialize();

svg.append("defs").selectAll("pattern")
    .data(d3.values(nodes))
    .enter()
    .append("pattern")
                        .attr("id", function(d) { return d.index })
                        .attr("height", 1)
                        .attr("width", 1)
                        .attr("x", "0")
                        .attr("y", "0")
                        .append("image")
                        .attr("xlink:href", function(d) { return d.image })
                        .attr("height", 100)
                        .attr("width", 100);

svg.append("defs").selectAll("marker")
    .data(["arrow"])
    .enter().append("marker")
    .attr("id", function(d) { return d; })
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

function restart() {

    node = node.data(d3.values(nodes), function(d) { return d.name;});
    node.exit().remove();

    node = node.enter().append("g")

    var a = node.append("a")
        .on("mouseover", function(d) {
            d3.select(this).style("cursor", "default");
            d3.select(this.parentNode).selectAll("text").style("opacity", 0);
            d3.select(this.parentNode).selectAll("circle").attr("fill", function(d) { return "url(#" + d.index + ")" });
            $("#description-box").text(d.description);
        })
        .on("mouseout", function(d) { 
            d3.select(this.parentNode).selectAll("text").style("opacity", 1);
            d3.select(this.parentNode).selectAll("circle").attr("fill", "white") 
        });

    a.append("circle")
        .attr("r", 35)
        .attr("fill", "white")
        .attr("stroke-width", 3)
        .attr("stroke", function(d) {
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
        .text(function(d) { return d.name; })
        .call(wrap, 50);

    link = link.data(links, function(d) { console.log(d.source.name + "-" + d.target.name); return d.source.name + "-" + d.target.name; });

    link.exit().transition()
        .attr("opacity", 0)
        .remove();

    link = link.enter().append("path")
        .attr("class", function(d) { return "link " + d.type; })
        .style("fill", 0)
        .style("opacity", 0.5)
        .attr("marker-end", "url(#arrow)")
        .merge(link);

    simulation.nodes(nodes);
    simulation.force("link").links(links);
    simulation.alpha(1).on("tick", ticked).restart();

    }

function ticked() {
    link.attr("d", linkArc);
    node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
}

function linkArc(d) {
    var dx = d.target.x - d.source.x,
        dy = d.target.y - d.source.y,
        dr = Math.sqrt(dx * dx + dy * dy);
        offsetX = (dx * 35) / dr;
        offsetY = (dy * 35) / dr;

    return "M" + d.source.x + "," + d.source.y + "A" + dr + "," + dr + " 0 0,1 " + d.target.x + "," + d.target.y;

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