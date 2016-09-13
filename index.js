var auth = require('./modules/auth');
var users = require('./modules/users');
var layouts = require('./modules/users');
var search = require('./modules/search');
var graphs = require('./modules/graphs');

module.exports = {
	auth: auth,
	users: users,
	layouts: layouts,
	search: search,
	graphs: graphs
};