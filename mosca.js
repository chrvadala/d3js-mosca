
var width = 800, height = 500;

var side = 2;

var moscaPath = "M31,14 " +
    "C31,16 32,17 30,19 C30,19 30,19 30,19 " +
    "C31,20 32,22 32,24 C32,24 38,15 38,15 " +
    "C37,15 39,10 39,10 C39,10 38,15 38,15 " +
    "C39,15 33,25 33,25 C35,30 35,32 36,33 " +
    "C35,33 35,33 35,33 C35,33 35,33 35,33 " +
    "C35,33 36,34 36,35 C36,35 36,35 36,35 " +
    "C36,35 36,35 36,35 C36,35 38,33 40,32 " +
    "C41,30 42,29 42,29 C42,29 41,31 39,32 " +
    "C38,34 37,35 37,35 C41,43 50,62 45,71 " +
    "C42,76 29,55 28,58 C28,57 27,62 22,58 " +
    "C20,53 14,75 6,73  C-2,70 8,45 12,35  " +
    "C12,35 12,35 12,35 C12,35 12,35 12,35 " +
    "C12,35 12,35 12,35 C12,35 12,35 12,35 " +
    "C12,35 12,35 12,35 C12,35 9,34 7,32   " +
    "C5,31 4,30 4,30    C4,30 6,31 7,32    " +
    "C10,34 12,35 12,35 C13,34 13,33 13,32 " +
    "C13,29 14,26 14,24 C14,24 14,24 14,24 " +
    "C14,24 9,16 9,16   C9,16 6,10 6,10    " +
    "C6,10 8,13 10,16   C12,20 15,23 15,23 " +
    "C16,20 17,19 17,19 C17,19 15,16 16,14 " +
    "C17,13 20,12 21,12 C21,11 21,11 22,10 " +
    "C22,10 25,10 25,10 C25,11 26,12 27,12 " +
    "C28,11 31,13 31,14 " +
    "z";

var svgContainer = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("display", "block")
    .style("margin", "0 auto");


var box = svgContainer.append("svg:rect")
    .attr("d", moscaPath)
    .attr("width", width)
    .attr("height", height)
    .style("stroke-width", 5)
    .style("stroke", "darkgray")
    .style("fill", "white");

var mosca = svgContainer.append("svg:path")
    .attr("d", moscaPath)
    .style("stroke-width", 1)
    .style("stroke", "black")
    .style("fill", "black")
    .attr('transform', 'translate(  ' + (width /2) + ',' + (height + 20)  +' ) rotate(20)');



svgContainer.on('mousemove',function(){
   mosca.transition()
       .style('visibility', 'hidden')
       .each('end', function(){
           setTimeout(function(){
               mosca
                   .style('visibility', 'visible')
                   .attr('transform', 'translate(  ' + (width /2) + ',' + (height + 20)  +' ) rotate(20)');
               side = 2;
               update();
           }, 2000);
       })
});


function update() {


    do {
        var newSide = Math.floor(4 * Math.random());
    } while( newSide == side );

    switch (newSide){
        case 0:
            var newX = Math.round((width - 100) * Math.random() + 50);
            var newY = -7;
            var direction = 0;
            break;
        case 1:
            var newX = width + 7;
            var newY = Math.round((height - 100) * Math.random() + 50);
            var direction = 90;
            break;
        case 2:
            var newX = Math.round((width - 100) * Math.random() + 50);
            var newY = height + 7 ;
            var direction = 180;
            break;
        case 3:
            var newX = -7 ;
            var newY = Math.round((height - 100) * Math.random() + 50);
            var direction = 270;
            break;
    }

    side = newSide;
    mosca.transition()
        .duration(1000)
        .delay(300)
        .ease('quad')
        .attr('transform', 'translate( ' + newX + ', ' + newY + '  ) rotate('+direction+')')
        .each('end', function(){ update(); })

}


update();