window.onload = init;

function init(){
	
	const map = new ol.Map({
			
		layers:[
			
			new ol.layer.Tile({
				
				source: new ol.source.OSM()
				
			})
			
		],
		target:'js-map',
		
		view: new ol.View({
			
			center:[0,0],
			zoom:2
			
		})
	});

	var style1 = [
		new ol.style.Style({
			image: new ol.style.Icon(({
				scale: 0.7,
				rotateWithView: false,
				anchor: [0.5, 1],
				anchorXUnits: 'fraction',
				anchorYUnits: 'fraction',
				opacity: 1,
				src: 'marker.png'
			})),
			zIndex: 5
		}),
		new ol.style.Style({
			image: new ol.style.Circle({
				radius: 5,
				fill: new ol.style.Fill({
					color: 'rgba(255,0,0,1)'
				}),
				stroke: new ol.style.Stroke({
					color: 'rgba(0,0,0,1)'
				})
			})
		})
	];

	var layer_1 = new ol.layer.Vector({
		source: new ol.source.Vector({
			features: [
				new ol.Feature({
					geometry: new ol.geom.Point(ol.proj.fromLonLat([4.35247, 50.84673])),				
				})
			]
		})
	});

	var layer_2 = new ol.layer.Vector({
		source: new ol.source.Vector({
			features: [
				new ol.Feature({
					geometry: new ol.geom.Point(ol.proj.fromLonLat([80.7718, 7.8731])),				
				})
			]
		})
	});

	var layer_3 = new ol.layer.Vector({
		source: new ol.source.Vector({
			features: [
				new ol.Feature({
					geometry: new ol.geom.Point(ol.proj.fromLonLat([95.7129, 37.0902])),				
				})
			]
		})
	});

	var layer_4 = new ol.layer.Vector({
		source: new ol.source.Vector({
			features: [
				new ol.Feature({
					geometry: new ol.geom.Point(ol.proj.fromLonLat([106.3468, 56.1304])),				
				})
			]
		})
	});


	var layer_5 = new ol.layer.Vector({
		source: new ol.source.Vector({
			features: [
				new ol.Feature({
					geometry: new ol.geom.Point(ol.proj.fromLonLat([133.7751, 25.2744])),				
				})
			]
		})
	});


	var layer_6 = new ol.layer.Vector({
		source: new ol.source.Vector({
			features: [
				new ol.Feature({
					geometry: new ol.geom.Point(ol.proj.fromLonLat([10.4515, 51.1657])),				
				})
			]
		})
	});

	var layer_7 = new ol.layer.Vector({
		source: new ol.source.Vector({
			features: [
				new ol.Feature({
					geometry: new ol.geom.Point(ol.proj.fromLonLat([13.4050, 52.5200])),				
				})
			]
		})
	});

	layer_1.setStyle(style1);
	layer_2.setStyle(style1);
	layer_3.setStyle(style1);
	layer_4.setStyle(style1);
	layer_5.setStyle(style1);
	layer_6.setStyle(style1);
	layer_7.setStyle(style1);	
	
	map.addLayer(layer_1);
	map.addLayer(layer_2);
	map.addLayer(layer_3);
	map.addLayer(layer_4);
	map.addLayer(layer_5);
	map.addLayer(layer_6);
	map.addLayer(layer_7);
	


	
}