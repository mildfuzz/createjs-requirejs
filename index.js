#!/usr/bin/env node

var fs = require("fs");
var _ = require("underscore-node");



//set dir
var dir = process.argv[2] || "./";

var newFileDir = dir+"converted/";

//create 'converted' directory
try{ fs.mkdirSync(newFileDir); } catch(e){}

//get js files
var jsFiles = _.reject(fs.readdirSync(dir),function(file){
	return !file.match(".js");
});

var moduleWrap = function(str){
	
	var file = "/*\n* Author: john.farrow@aerian.com\n*/\ndefine(['libs/movieclip'],function(createjs){\nvar spritesheet; //container for spritesheet\n";
		file += str.replace(" = "," = spritesheet = ");
		file += "\nreturn spritesheet;\n});";

	return file;
};

var processFile = function(name){
	var filePath = dir+name,
		file = fs.readFileSync( filePath, "utf8" ),
		wrappedFile = moduleWrap(file),
		newFilePath = newFileDir+name.replace(/\s/g,"-");

	fs.writeFileSync( newFilePath, wrappedFile);
};

//process all JS files
_(jsFiles).each(processFile);






