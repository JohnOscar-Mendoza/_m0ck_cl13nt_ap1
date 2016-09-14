"use strict";
var constants = require('../constants');
// var http = require('http');
var request = require('request');
var GraphsMapper = require('./mappers/graphs');
var async = require('async');
var url = constants.BASE_PATH+'v1/graphs/';

var getLine = function(callback) {

	request.get(url+'/line/three/', function(error, response, body) {
		if(!error && response.statusCode == 200) {
			var decoded = JSON.parse(body);
			var output = new Array();

			decoded.forEach(function(value, index) {

				var graphMapper = new GraphsMapper(value);
				graphMapper.mapSeries();
				output.push(graphMapper);

			});

			callback(null, output, response.statusCode)
		}
		else {
			callback(error, null, response.statusCode)
		}

	});

};


var getGuage =  function(callback) {
	request.get(url+'/guage/two/', function(error, response, body) {
		if(!error && response.statusCode == 200) {
			var decoded = JSON.parse(body);
			var output = new Array();

			decoded.forEach(function(value, index) {

				var graphMapper = new GraphsMapper(value);
				graphMapper.mapSeries();
				output.push(graphMapper);

			});

			callback(null, output, response.statusCode)
		}
		else {
			callback(error, null, response.statusCode)
		}

	});
}

module.exports = {
	line: getLine,
	guages: getGuage
};