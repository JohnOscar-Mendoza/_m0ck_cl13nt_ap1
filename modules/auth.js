//Layouts
var constants = require('../constants');
var http = require('http');
var request = require('request');
var async = require('async');
// var request_promise = require('request-promise');

// var promises = require('promises');

var url = constants.BASE_PATH+'v1/auth/';

var postLogin = function(params, callback) {

	request.post(url+'login/', { form: params }, function(error, response, body) {
		if(!error && response.statusCode == 200) {

			callback(null, body, response.statusCode)

		}
		else {
			callback(error, null, response.statusCode)
		}

	});

} 

var postRegistser =function(params, callback) {

}

module.exports = {

	postLogin: postLogin,
	postRegistser: postRegistser

};