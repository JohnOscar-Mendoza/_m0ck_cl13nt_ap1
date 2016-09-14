// ./__tests__/test-get-line-graphs.js
"use strict";
var test = require('tape').test;
var client = require('../');
var colors = require('colors');
test('Testing line graphs mock response #1 '.cyan, function(t) {

	client.graphs.lines(function(error, graphBody, status) {
		t.equal(error, null, "Error should return null if there is no error".green);
		t.equal(status, 200, "Status Code should be equal to 200".green);
		t.end();
	});
});

test(('Testing solidguages mock response').cyan, function(t) {

	client.graphs.lines(function(error, graphBody, status) {
		t.equal(error, null, "Error should return null if there is no error".green);
		t.equal(status, 200, "Status Code should be equal to 200".green);
		t.end();
	});

});