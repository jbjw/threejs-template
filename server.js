// express server

'use strict';

var url = require('url')
var path = require('path')
var fs = require('fs')
var http = require('http')
var express = require('express')

// const debug = require('debug')('jjd')

const args = process.argv;
const httpPort = args[args.indexOf("-p") + 1 || args.indexOf("--port") + 1 || -1] || 80;

function log( req, res, next ) {
	req.time = Date.now(); // new Date();
	console.log( `${req.time} ${req.method} ${req.headers.host} ${req.url} ${req.secure ? 'https' : 'http' }` );
	next(); return;
}

const app = express();

// app.use, app.post, etc
app.use( log )
app.use(express.static('.', {index: 'index.html'}));

const httpServer = http.createServer( app );

// you can chain createServer().listen()

httpServer.listen(httpPort, function () {
	console.log(`http listening on port ${httpPort}`);
});
