"usestrict";

var body = d3.select("body"),
    menuDiv = body.select("#menuDiv"),
    contentDiv = body.select("#contentDiv"),
    buttonDim = {width:150, height:30, dist:5, offX:20, offY:50, subOff:20},
    menuSize = function() {return menuDiv.node().getBoundingClientRect();};
    
/*
Initiating the menu svg
*/
var menuSvg = menuDiv.append("svg")
    .attr("class", "menuSvg");


buildMenu(menuSvg, pages, ["main"], buttonDim);

showContent(contentDiv, pages[0].content);