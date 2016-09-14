"use strict";
var constants = require('../constants');
// var http = require('http');
var request = require('request');
var LineGraphMapper = require('./mappers/graphs');
var GraphsMapper_v2 = require('./mappers/graphs_v2');
var async = require('async');
var url = constants.BASE_PATH+'v1/graphs/';

var lines = {
	getOne: function(callback) {

		request.get(url+'line/one/', function(error, response, body) {
			if(!error && response.statusCode == 200) {

			// var jsonString = body;
			var decoded = JSON.parse(body);
			// var jsonPretty = JSON.stringify(decoded,null,2);
			var graphBody = new Array();
			decoded.forEach(function(value, key) {
				var mapper = new LineGraphMapper(value);
				mapper.mapSeries(value.Nodes);
				graphBody.push(mapper); 
			});
			// console.log(graphBody[0]);

			callback(null, graphBody, response.statusCode)

		}
		else {
			callback(error, null, response.statusCode)
		}

	});

	},
	getTwo: function(callback) {

		request.get(url+'/line/two/', function(error, response, body) {
			if(!error && response.statusCode == 200) {
				callback(null, body, response.statusCode)
			}
			else {
				callback(error, null, response.statusCode)
			}
		});
	},
	getThree: function(callback) {

		request.get(url+'/line/three/', function(error, response, body) {
			if(!error && response.statusCode == 200) {
				callback(null, body, response.statusCode)
			}
			else {
				callback(error, null, response.statusCode)
			}

		});

	}
};


var getGuage =  function(callback) {
	request.get(url+'/guage/two/', function(error, response, body) {
		if(!error && response.statusCode == 200) {
			var decoded = JSON.parse(body);
			var output = new Array();

			decoded.forEach(function(value, index) {

				var graphMapper_v2 = new GraphsMapper_v2(value);
				graphMapper_v2.mapSeries();
				output.push(graphMapper_v2);

			});

			callback(null, output, response.statusCode)
		}
		else {
			callback(error, null, response.statusCode)
		}

	});
}



module.exports = {
	line: lines,
	guages: getGuage
};