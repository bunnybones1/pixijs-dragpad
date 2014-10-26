var loadAndRunScripts = require('loadandrunscripts');
loadAndRunScripts([
	'bower_components/pixi.js/bin/pixi.js'
],
function() {
	var DragPad = require('./');
	var dragPad = new DragPad();
});