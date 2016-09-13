// ./__tests__/test-get-line-graphs.js
"use strict";
var test = require('tape').test;
var client = require('../');
var colors = require('colors');
test('Testing line graphs mock repsonse #1 '.cyan, function(t) {

	client.graphs.getOne(function(error, graphBody, status) {
		
		var jsonPretty = JSON.stringify(graphBody,null,2);
		t.equal(error, null, "Error should return null if there is no error".green);
		t.equal(status, 200, "Status Code should be equal to 200".green);
		t.end();

	});

});


