"use strict";
// ./__tests__/test-get-grids.js
var test = require('tape').test;
var layouts = require('../modules/layouts');

// test('add: add two numbers correctly', function(t) {
// 	var actual = add(1,2);
// 	var expect = 3;
// 	t.equal(actual, expect, 'Should add two numbers correctly');
// 	t.end();
// });
test('GET Layout Objects', function(t) {
	layouts.get(function(err, body, status) {
		var actual = status;
		var expect = 200;
		t.equal(actual, expect, 'Response status should be 200');
		t.end();
	} );
} );