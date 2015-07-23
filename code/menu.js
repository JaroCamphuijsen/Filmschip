function buildMenu(svg, buttons) {
    /*
    Function to show the menu for changing the axis dimension.
    */
    var buttonWidth = 150, buttonHeight = 30, buttonOffX = 20, buttonOffY = 50;

    // button databinding
    var button = svg.selectAll(".menuButton")
        .data(buttons);

    // button enterselection, appended with starting position and a transition
    // to the end position of each button
    button.enter()
        .append("g")
        .attr("class", "menuButton")
        .attr("transform", function(d,i){
            return "translate(200," + ((i * (buttonHeight + 5)) + buttonOffY) + ")"
            })
        .transition()
        .duration(800)
        .attr("transform", function(d,i){
            return "translate(" + 0 + buttonOffX + "," + ((i * (buttonHeight + 5)) + buttonOffY) + ")"
            });
    
    // contents of each button
    button.append("rect")
        .attr("width", buttonWidth)
        .attr("height", buttonHeight - 1)
    
    button.append("text")
        .attr("dx", ".35em")
        .attr("y", buttonHeight / 2)
        .attr("dy", ".35em")
        .text(function(d){return d;})

    // interactivity of the menubuttons with updateScatter call
    button.on("mouseover", function(p){
            d3.select(d3.event.target.parentNode)
                .classed("highlight", true); 
            })
        .on("mouseout", function(p){
            d3.select(d3.event.target.parentNode)
                .classed("highlight", false);
            })
        .on("click", function(p){
            console.log("CLICK")
        });

}
