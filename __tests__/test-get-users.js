"use strict";
var test = require('tape').test;
var client = require('../');

var requestBody = {
	first_name:'test',
	last_name:'test',
	email:'test2@email.com',
	username:'test2',
	password:'encrypted_password'
};

var updateRequestBody = {
	user_id: '57ce6a51a4eef4cf04789fb3',
	first_name:'test',
	last_name:'test',
	email:'test10@email.com',
	username:'test10',
	password:'encrypted_password'
};

// test('Adding a grid', function(t) {

// 	layouts.postAdd(requestBody, function(err, body, status) {

// 		console.log(body);
// 		t.equal(status, 201, "Status should be 201");
// 		t.end();

// 	});

// })

test('Getting users', function(t) {

	client.users.getUsers(function(error, body, status) {

		t.equal(status, 200, "Status should be 200");
		t.end();
	});

});

test('Adding User', function(t) {
	client.users.postCreateUser(updateRequestBody, function(error, body, status) {

		t.equal(status, 201, "Status should be 201");
		t.end();

	});
});

test('Updating a User', function(t) {
	client.users.putUpdateUser(updateRequestBody, function(error, body, status) {

		t.equal(status, 201, "Status should be 201");
		t.end();

	});

});