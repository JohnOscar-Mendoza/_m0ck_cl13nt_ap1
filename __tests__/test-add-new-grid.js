"use strict";
var test = require('tape').test;
var layouts = require('../modules/layouts');

var requestBody = {
	userId: '57ce6e57ec199ba95ac71a03',
	x:1,
	y:1,
	w:1,
	h:1,
	size:'md'
};

test('Adding a grid', function(t) {

	layouts.postAdd(requestBody, function(err, body, status) {

		t.equal(status, 201, "Status should be 201");
		t.end();

	});

})
