#!/usr/bin/env node

var fs = require('fs');
var mu = require('mu2');

mu.root = __dirname + '/src'



//load toolkitjs export && locate and insert spritesheet marker
var file = fs.readFileSync( "test/sample.js", 'utf8' ).replace(' = ',' = spritesheet = ');



//compile spritesheet
var data = {spritesheet: file};
mu.compileAndRender('template.js', data)
	.on('data', function (data) {
	console.log(data.toString());
	});