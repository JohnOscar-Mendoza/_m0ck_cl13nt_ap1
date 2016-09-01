var layouts = require('../modules/layouts');

var requestBody = {
	x:3,
	y:3,
	w:4,
	h:4
};

layouts.deleteLayout( '57c69031efd8da6214592bd4', function(err, body) {
	//process the body
	if(!err) {
		console.log(body);
	}
	else {
		console.log(err);
	}

});