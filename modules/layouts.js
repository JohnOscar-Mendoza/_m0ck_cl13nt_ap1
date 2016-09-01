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
			callback(null, body, response.statusCode);
		}
		else {
			callback(error, null, response.statusCode);
		}
	} );
}

var postAdd = function( params, callback ) {
	request.post(url, { form: params }, function(error, response, body) {
		if(!error && response.statusCode == 201) {
			callback(null, body);
		}
		else {
			callback(error, null);
		}
	} );
}

var postAddLayout = function( gridId, params, callback ) {
	request.post(url+gridId+'/layouts/', { form: params }, function(error, response, body) {
		if(!error && response.statusCode == 200) {
			callback(null, body, response.statusCode);
		}
		else {

			console.log(body);
			callback(error, null, response.statusCode);
		}
	} );
}

var putUpdateLayout = function( gridId, layoutId, params, callback ) {
	request.post(url, { form: params }, function(error, response, body) {
		if(!error && response.statusCode == 200) {
			callback(null, body);
		}
		else {
			callback(error, null);
		}
	} );
}

var deleteLayout = function( gridId, callback ) {
	request.delete(url+gridId, function(error, response, body) {
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
	deleteLayout: deleteLayout
};