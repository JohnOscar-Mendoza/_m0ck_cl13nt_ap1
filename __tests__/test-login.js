// ./__tests__/test-login.js
"use strict";
var test = require('tape').test;
var client = require('../');

test('Successful Login', function(t) {

	var requestBody = {
		username: "test3",
		password: "encrypted_password"
	};

	client.auth.postLogin(requestBody, function(err, body, statusCode) {

		t.equal(statusCode, 200, "Status code should be 200");
		t.end();

	});

});

test('Login Failed', function(t) {

	var requestBody = {
		username: "uname10",
		password: "encrypted_password"
	};

	client.auth.postLogin(requestBody, function(err, body, statusCode) {

		t.equal(statusCode, 401, "Status code should be 401");
		t.end();

	});

});