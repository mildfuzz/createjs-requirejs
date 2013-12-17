createjs-require
================
A quick and dirty way to wrap the output of [CreateJs Toolkit for Flash](https://www.adobe.com/products/flash/flash-to-html5.html) in a [RequireJS](http://www.requirejs.org/) module define block.

About
============
The point of Simple is to be simple. The blog is 1 file (excluding resources) with a few simple pure-python dependancies (Flask, Sqlalchemy, Markdown), it doesn't require a database server, has a small footprint and is very fast (Can easily handle 300+ requests per second).

Usage
============
Publish .fla files with toolkit for flash, then run `createjs-require` from within the folder the .fla published to. Converted .js files will be placed in a nested `converted` folder.

