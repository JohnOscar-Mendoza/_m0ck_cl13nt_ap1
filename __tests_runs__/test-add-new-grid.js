var layouts = require('../modules/layouts');

var requestBody = {
	x:1,
	y:1,
	w:1,
	h:1,
	size:'md'
};

layouts.postAdd(requestBody, function(err, body) {
	//process the body
	if(!err) {
		console.log(body);
	}
	else {
		console.log(err);
	}

});