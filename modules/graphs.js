"use strict";
var constants = require('../constants');
// var http = require('http');
var request = require('request');
var LineGraphMapper = require('./mappers/graphs');
var async = require('async');
var url = constants.BASE_PATH+'v1/graphs/';

var getOne = function(callback) {

	request.get(url+'one/', function(error, response, body) {
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

} 

var getTwo = function(params, callback) {

	request.get(url+'two/', function(error, response, body) {
		if(!error && response.statusCode == 200) {

			callback(null, body, response.statusCode)

		}
		else {
			callback(error, null, response.statusCode)
		}

	});

}

module.exports = {
	getOne: getOne,
	getTwo: getTwo
};