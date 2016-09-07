//Layouts
var constants = require('../constants');
var http = require('http');
var request = require('request');
var async = require('async');

var url = constants.BASE_PATH+'v1/grids/';

var get = function (userId, callback) {
	request(url+"/"+userId, function(error, response, body) {

		if(!error && response.statusCode == 200) {
			callback(null, body, response.statusCode);
		}
		else {
			callback(error, null, response.statusCode);
		}
	} );
}

var postAdd = function(params, callback ) {
	request.post(url+"/"+params.userId, { form: params }, function(error, response, body) {
		if(!error && response.statusCode == 201) {
			console.log(body);
			callback(null, body, response.statusCode);
		}
		else {
			callback(error, null, response.statusCode);
		}
	} );
}

var postAddLayout = function( gridId, params, callback ) {
	request.post(url+gridId+'/layouts/', { form: params }, function(error, response, body) {
		if(!error && response.statusCode == 200) {
			callback(null, body, response.statusCode);
		}
		else {

			callback(error, null, response.statusCode);
		}
	} );
}

var putUpdateLayout = function( gridId, layoutId, params, callback ) {
	request.post(url, { form: params }, function(error, response, body) {
		if(!error && response.statusCode == 200) {
			callback(null, body, response.statusCode);
		}
		else {
			callback(error, null, response.statusCode);
		}
	} );
}

var deleteLayout = function( gridId, callback ) {
	request.delete(url+gridId, function(error, response, body) {
		if(!error && response.statusCode == 200) {
			callback(null, body, response.statusCode);
		}
		else {
			callback(error, null, response.statusCode);
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