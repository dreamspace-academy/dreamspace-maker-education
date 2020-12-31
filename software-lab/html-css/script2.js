window.onload = init;

function init(){
	
	const map = new ol.Map({
			
		view: new ol.View({
			
			center:[0,0],
			zoom:2
			
		}),
		layers:[
			
			new ol.layer.Tile({
				
				source: new ol.source.XYZ({
					
					url: 'http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg',
					attributions: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.'
				}),
				visible:true,
				title: 'StamenTerrain'
				
			})
			
		],
		target:'js-map'
	})
	
}