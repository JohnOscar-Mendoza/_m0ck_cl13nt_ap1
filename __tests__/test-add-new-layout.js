var test = require('tape').test;
var layouts = require('../modules/layouts');

var gridId = '57c681321e47d2bf10f245ed';
var requestBody = {
	x:1,
	y:1,
	w:1,
	h:1,
	size:'md'
};

test("Add a new layout to grid", function(t) {
	layouts.postAddLayout(gridId, requestBody, function(err, body, status) {

		t.equal(status, 201, "Status should be 201");
		t.end();

	});	
});

