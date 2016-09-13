function LineGraphsMapper (responseObject) {
	// console.log(JSON.stringify(responseObject, null, 2));
	this.title = { 
		text: responseObject.Name,
		x: -20
	};
	// this.subtitle = responseObject.Brash.subtitle;
	this.xAxis = responseObject.Brash.xAxis;
	this.yAxis = responseObject.Brash.yAxis;
	this.tooltip = responseObject.Brash.tooltip;
	this.legend = responseObject.Brash.legend;
	this.series = new Array();
	// console.log(this);
}

LineGraphsMapper.prototype.mapSeries = function(seriesNodes) {

	var finalSeries = new Array();

	seriesNodes.forEach(function(value, key) {
		finalSeries.push({
			name: value.Name,
			data: value.Data
		});
	});

	this.series = finalSeries;
};
module.exports = LineGraphsMapper;