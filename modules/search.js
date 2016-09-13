var constants = require('../constants');
var request = require('request');
var algoliasearch = require('algoliasearch');
var client = algoliasearch("LA26HQXG0F", "fd28d10149ad5175a6f6fdbbd82345a3");

var searchForUsers = function (term, callback) {

	var index = client.initIndex('users');
	index.search(term, function searchDone(err, content) {

		if(err) {
			callback(err, null);
		} else {
			callback(null, content);
		}
	});

}

// router.get('/:term', function(req, res, next) {

// 	console.log((req.method + "/v1/search/term").green);

// 	// res.json({search: req.params.term});
// 	var index = client.initIndex('users');
// 	index.search("test", function searchDone(err, content) {
// 		if (err) {
// 			// console.error(err.statusCode);
// 			if(err.statusCode == 404) {
// 				res.json({
// 					status: err.statusCode,
// 					message: "No record found"
// 				});
// 				res.end();
// 				next();
// 			}
// 		} else {
// 			res.json(content);
// 			res.end();
// 			next();
// 		}
// 	});

// });


module.exports = {
	searchForUsers: searchForUsers
};