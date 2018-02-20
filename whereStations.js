$("document").ready(function() {

	var countyStations = _.where(stations,{"county":"Donegal"});

	_.each(countyStations, function(element){
		$("#data").append(element.name + "<br>");			
	});

});

