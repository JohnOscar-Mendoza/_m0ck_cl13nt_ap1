var layouts = require('../modules/layouts');

layouts.get(function(err, body) {
	//process the body
	if(!err) {
		console.log(body);
	}
	else {
		console.log(err);
	}

});