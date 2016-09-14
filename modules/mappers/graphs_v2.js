function SolidGuage (properties) {
	this.data = properties.Data;
	this.chart = {
		type: properties.Filter || 'solidguage'
	}
	this.title = {
		text: properties.Name || 'Guage for Something'
	};
	this.yAxis = {
		title: {
			text: properties.Name || 'Guage for Something'
		}
	}
	this.brash = properties.Brash || null;
	this.series = new Array();
};

SolidGuage.prototype.mapSeries = function() {
	this.series.push({
		name: this.title.text,
		data: this.data
	});
};

function Line (properties) {
	this.series = new Array();
}

Line.prototype.mapSeries = function() {

};

function GraphMapper (responseObject) {
	this.graphClass = Line;
	// this.series = [];
	switch(responseObject.Filter) {
		case 'solidguage': 
		this.graphClass = SolidGuage;
		break;
		
		case 'line':
		this.graphClass = Line;
		break;

		default:
		this.graphClass = Line;
		break;
	}

	return new this.graphClass(responseObject);
}

module.exports = GraphMapper;