//Layouts
var constants = require('../constants');
var http = require('http');
var request = require('request');
var async = require('async');
var request_promise = require('request-promise');

var promises = require('promises');

var url = constants.BASE_PATH+'v1/grids/';

var get = function (callback) {
	request(url, function(error, response, body) {

		if(!error && response.statusCode == 200) {
			callback(null, body);
		}
		else {
			callback(error, null);
		}
	} );
}

var postAdd = function( params, callback ) {
	request.post(url, params, function(error, response, body) {
		if(!error && response.statusCode == 200) {
			callback(null, body);
		}
		else {
			callback(error, null);
		}
	} );
}

var postAddLayout = function( params, callback ) {
	request.post(url, params, function(error, response, body) {
		if(!error && response.statusCode == 200) {
			callback(null, body);
		}
		else {
			callback(error, null);
		}
	} );
}

var putUpdateLayout = function( params, callback ) {
	request.put(url, params, function(error, response, body) {
		if(!error && response.statusCode == 200) {
			callback(null, body);
		}
		else {
			callback(error, null);
		}
	} );
}

var deleteUpdateLayout = function( params, callback ) {
	request.delete(url, params, function(error, response, body) {
		if(!error && response.statusCode == 200) {
			callback(null, body);
		}
		else {
			callback(error, null);
		}
	} );
}

module.exports= { 
	get : get,
	postAdd : postAdd,
	postAddLayout: postAddLayout,
	putUpdateLayout: putUpdateLayout,
	deleteUpdateLayout: deleteUpdateLayout
};