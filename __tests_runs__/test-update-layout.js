var layouts = require('../modules/layouts');

var requestBody = {
	x:3,
	y:3,
	w:4,
	h:4
};

layouts.putUpdateLayout( '57c69031efd8da6214592bd4', '57c69b3ef66f4b6d14f669e1', requestBody, function(err, body) {
	//process the body
	if(!err) {
		console.log(body);
	}
	else {
		console.log(err);
	}

});