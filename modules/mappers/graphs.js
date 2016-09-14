"use strict";
function SolidGuage (properties) {
 	this.dataPropery = properties.Data || [];
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
		data: this.dataPropery
	});
};

function Line (properties) {
	this.dataPropery = properties.Nodes || [];
	this.title = {
		text: properties.Name
	};
	this.xAxis = {
		categories: properties.Brash.xAxis || null
	};
	this.yAxis = {
		title: {
			text: properties.Brash.xAxis || "Line Chart for Something"
		}
	};
	this.series = new Array();
}

Line.prototype.mapSeries = function() {

	var seriesArr = new Array();
	this.dataPropery.forEach( function(value, index) {

		seriesArr.push({
			name: value.Name,
			data: value.Data
		});
	});
	this.series = seriesArr;
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