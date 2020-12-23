$(document).ready(function() {
  // Width and Height of the whole visualization
  var w = 1000; 
  var h = 480;  
  //D3 has some internal functionality that can turn GeoJSON data into screen coordinates based on the projection you set. This is not unlike other libraries such as Leaflet, but the result is much more open-ended, not constrained to shapes on a tiled Mercator map.1 So, yes, D3 supports projections.
  var projection = d3.geo.equirectangular()
  // Create GeoPath function that uses built-in D3 functionality to turn
  // lat/lon coordinates into screen coordinates
  var path = d3.geo.path()
    .projection(projection);
  //add the following to create our SVG canvas.
  var svg = d3.select('body')
	.classed("svg-container", true) 
    .append('svg')
    .attr('width', w)
    .attr('height', h)
  svg.append('rect')
    .attr('width', w)
    .attr('height', h)
    .attr('fill', '#D3D3D3');
  // Append empty placeholder g element to the SVG
  // g will contain geometry elements
  var g = svg.append("g");
  
  //add a call to d3.json to load the TopoJSON file
  //so it loads into our visualization
  d3.json('https://d3js.org/world-50m.v1.json', function(error, data) {
    if (error) console.error(error);
    g.append('path')
      .datum(topojson.feature(data, data.objects.countries))
      .attr('d', path);
    
    //create the zoom effect
    var zoom = d3.behavior.zoom()
      .on("zoom", function() {
        g.attr("transform", "translate(" +
          d3.event.translate.join(",") + ")scale(" + d3.event.scale + ")");
        g.selectAll("path")
          .attr("d", path.projection(projection));
      });
	  
    svg.call(zoom);
    
    // Load the data from the json file
    d3.json('data.json', function(error, data) {
      if (error) 
        console.error(error);
      
      var locations = data.features;
      var hue = 0; //create the circles
      
      // we will pass our data (the TopoJSON) as an argument, then create SVG elements using a classic D3 append. Selecting all paths, the TopoJSON is bound in the data method. From here, we can perform work on each element.
     
      
      // Classic D3... Select non-existent elements, bind the data, append the elements, and apply attributes
      g.selectAll('circle')
        .data(locations)
        .enter()
        .append('circle') //show the circles
        .attr('cx', function(d) {
          if (d.geometry) {
            return projection([d.geometry.coordinates[0], d.geometry.coordinates[1]])[0];
          }
        })
        .attr('cy', function(d) {
          if (d.geometry) {
            return projection([d.geometry.coordinates[0], d.geometry.coordinates[1]])[1];
          }
        })
        .attr('r', function(d) {
          if (d.properties.cricle_size) {
            return d.properties.cricle_size;
          }
        })
        .style('fill', function(d) {
        //Use the Color Function to set the Fill Value for each circle
          return d.properties.cricle_color;
        })
      
      //Next, we need to write two pieces of code, one that listens for when the value of the tooltip changes, and one that updates the SVG elements.
      //We are going to use some D3 code to listen for an input change on the tooltip elements
      
      //Add Event Listeners | mouseover
        .on('mouseover', function(d) {
		  $(this).css('cursor','pointer');
          d3.select(this).style('fill', 'black'); 
          d3.select('#name').text(d.properties.name);
          d3.select('#Country').text(d.properties.country);
		  d3.select('#logopath').attr('src', d.properties.logo_path);	   
          d3.select('#tooltip')
            .style('left', (d3.event.pageX + 20) + 'px')
            .style('top', (d3.event.pageY - 80) + 'px')
            .style('display', 'block')
            .style('opacity', 0.8)
        })
        //Add Event Listeners | mouseout
        .on('mouseout', function(d) { 
          d3.select(this).style('fill', d.properties.cricle_color);
          d3.select('#tooltip')
            .style('display', 'none');
        })
		.on('click',function(d){
			var win = window.open(d.properties.link, '_blank');
			win.focus();
		});
    });
  });
});