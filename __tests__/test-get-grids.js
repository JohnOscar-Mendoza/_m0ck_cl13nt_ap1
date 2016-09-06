"use strict";

var test = require('tape').test;
var layouts = require('../modules/layouts');

test('GET Layout Objects', function(t) {
	layouts.get(function(err, body, status) {

		var actual = status;
		var expect = 200;
		t.equal(actual, expect, 'Response status should be 200');
		t.end();
	} );
} );