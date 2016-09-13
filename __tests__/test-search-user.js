// ./__tests__/test-search-user.js
"use strict";
var test = require('tape').test;
var client = require('../');

test('search for user with value \'test\' of any key', function(t) {

	client.search.searchForUsers("test", function(err, content) {
		t.equal(err, null, "argument err should be null");
		t.equal(content.hits.length > 0, true, "Hits should be more than hero");
		t.end();
	});

});