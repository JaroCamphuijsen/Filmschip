"usestrict";
/*
Variable declaration. 
    mpvDiv          => Multi Planet View div, the div for scatterplot or skymap
    spvDiv          => Single Planet View div, here we'll see the planet's orbit
    spInfoDiv       => Single Planet Info div, showing extra information about
                        the selected planet
    explainDimDiv   => explain dimensions div, with a short description of 
                        the selected dimension
*/
var body = d3.select("body"),
    menuDiv = body.select("#menuDiv"),
    contentDiv = body.select("#contentDiv"),
    menuSize = function() {return menuDiv.node().getBoundingClientRect();},
    buttons = ["Over ons", "Seizoen 1", "Seizoen 2", "contact"];

/*
Initiating the menu svg
*/
var menuSvg = menuDiv.append("svg")
    .attr("class", "menuSvg");

buildMenu(menuSvg, buttons);
