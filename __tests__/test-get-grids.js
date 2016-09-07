"use strict";

var test = require('tape').test;
var layouts = require('../modules/layouts');

test('GET Layout Objects', function(t) {
	layouts.get("57ce6e57ec199ba95ac71a03", function(err, body, status) {

		console.log(body);
		var actual = status;
		var expect = 200;
		t.equal(actual, expect, 'Response status should be 200');
		t.end();
	} );
} );