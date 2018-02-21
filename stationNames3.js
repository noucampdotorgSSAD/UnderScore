window.onload=function(){
	function printStationData(element,i)
	{
		var div=document.getElementById("data");
		div.innerHTML = div.innerHTML + i + ": " + element.name + "<br>";
	}

	_.each(stations, printStationData);
}	
