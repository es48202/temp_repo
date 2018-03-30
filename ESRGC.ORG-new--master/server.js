/*
Tu Hoang
March 2017	

Node Server
*/

'use strict';
//this line allows using ES6 in nodejs code
require("babel-register");

let app = require('./app').app,
	port = require('./config').default.port;

// console.log(config);
app.listen(port);
console.log('Server listening on port ' + port);