//Layouts
var constants = require('../constants');
var http = require('http');
var request = require('request');
var async = require('async');
// var request_promise = require('request-promise');

// var promises = require('promises');

var url = constants.BASE_PATH+'v1/users/';

var getUsers = function(callback) {

	request(url, function(error, response, body) {

		if(!error && response.statusCode == 200) {
			callback(null, body, response.statusCode);
		}
		else {
			callback(error, null, response.statusCode);
		}
	});
}

var getUserById = function(userId, callback) {
	var newUrl = url+"/"+userId+"/";
	request(newUrl, function(error, response, body) {
		if(!error && response.statusCode == 200) {
			callback(null, body, response.statusCode);
		}
		else {
			callback(error, null, response.statusCode);
		}
	});
}

var postCreateUser = function(params, callback) {

	request.post(url, {form: params}, function(error, response, body) {
		if(!error && response.statusCode == 200) {

			callback(null, body, response.statusCode)

		}
		else {
			callback(error, null, response.statusCode)
		}
	});

}

var putUpdateUser = function(params, callback) {
	var updateUrl = url+"/"+params.user_id;
	request.put(updateUrl, {form: params}, function(error, response, body) {
		if(!error && response.statusCode == 200) {

			callback(null, body, response.statusCode)

		}
		else {
			callback(error, null, response.statusCode)
		}
	});

}

module.exports = {

	getUsers: getUsers,
	getUserById: getUserById,
	postCreateUser: postCreateUser,
	putUpdateUser: putUpdateUser

};