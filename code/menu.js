"usestrict";

function buildMenu(svg, pages, categories, buttonDim) {
    /*
    Function to show the menu for changing the axis dimension.
    */
    var buttons = selectButtons(pages, categories);
    console.log(buttons);
    // button databinding
    var button = svg.selectAll(".menuButton")
        .data(buttons, function(d){return d.key});

   
    // button enterselection, appended with starting position and a transition
    // to the end position of each button
    button.enter()
        .append("g")
        .attr("class", function(d){
            if (d.cat === "main"){ 
                return "menuButton " + d.cat;
            }
            else{
                return "menuButton sub " + d.cat; 
            }})
        .attr("transform", function(d,i){
            if (d.cat === "main"){ 
                return "translate(" + buttonDim.offX + "," + -buttonDim.height + ")"
            }
            else{
                return "translate(" + (buttonDim.subOff + buttonDim.offX) + "," + -buttonDim.height + ")"
            }})
        .transition()
        .duration(800)
        .attr("transform", function(d,i){
            if (d.cat === "main"){ 
                return "translate(" + buttonDim.offX + "," + ((i * (buttonDim.height + buttonDim.dist)) + buttonDim.offY) + ")"
            }
            else{
                return "translate(" + (buttonDim.subOff + buttonDim.offX) + "," + ((i * (buttonDim.height + buttonDim.dist)) + buttonDim.offY) + ")"
            }
            });
    
    // rebuild each button
    button.selectAll("*")
        .remove();

    button.append("rect")
        .attr("width", function(d){
            if (d.cat === "main"){ return buttonDim.width}
            else{ return (buttonDim.width - buttonDim.subOff)}
            })
        .attr("height", function(d){
            if (d.cat === "main"){ return buttonDim.height - 1}
            else{ return (buttonDim.height - 5)}
            });
    
    button.append("text")
        .attr("dx", ".35em")
        .attr("y", buttonDim.height / 2)
        .attr("dy", ".35em")
        .text(function(d){return d.name;});

    //update old buttons
    button.transition()
        .duration(800)
        .attr("transform", function(d,i){
            if (d.cat === "main"){ 
                return "translate(" + buttonDim.offX + "," + ((i * (buttonDim.height + buttonDim.dist)) + buttonDim.offY) + ")"
            }
            else{
                return "translate(" + (buttonDim.subOff + buttonDim.offX) + "," + ((i * (buttonDim.height + buttonDim.dist)) + buttonDim.offY) + ")"
            }
            });

    //exit old buttons
    button.exit()
        .transition()
        .duration(800)
        .attr("transform", function(d,i){
            if (d.cat === "main"){ 
                return "translate(" + buttonDim.offX + "," + -buttonDim.height + ")"
            }
            else{
                return "translate(" + (buttonDim.subOff + buttonDim.offX) + "," + -buttonDim.height + ")"
            }
            })
        .remove();

    

    // interactivity of the menubuttons with updateScatter call
    button.on("mouseover", function(d){
            d3.select(d3.event.target.parentNode)
                .classed("highlight", true); 
            })
        .on("mouseout", function(d){
            d3.select(d3.event.target.parentNode)
                .classed("highlight", false);
            })
        .on("click", function(d, i){
            showContent(contentDiv, d.content);

            buildMenu(svg, pages, ["main", d.cat ,d.sub], buttonDim);

        });

}

function selectButtons(pages, categories){
    var selection = [];
    for (i in pages){
        if (categories.indexOf(pages[i].cat) >= 0){
            selection.push(pages[i]);
        }
    }
    return selection;
}

function showContent(div, content){
    div.html(content);
}