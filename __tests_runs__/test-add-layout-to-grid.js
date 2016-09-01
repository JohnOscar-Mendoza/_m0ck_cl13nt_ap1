var layouts = require('../modules/layouts');

var requestBody = {
	x: 1,
	y: 1,
	w: 1,
	h: 1,
	size: 'xs'
};

layouts.postAddLayout('57c69031efd8da6214592bd4', requestBody, function(err, body) {
	//process the body
	if(!err) {
		console.log(body);
	}
	else {
		console.log(err);
	}

});