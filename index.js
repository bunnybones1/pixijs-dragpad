var View = require('pixijs-managed-view');
var RenderManager = require('pixijs-render-manager');
var InteractionManager = require('pixijs-interaction-manager');
var Circle = require('./Circle');
function DragPad(totalPoints, color) {
	totalPoints = totalPoints || 10;
	color = color || 0xff0000;

	var view = this.view = new View();
	var interactionManager = new InteractionManager(view.stage);
	
	this.circles = [];

	var smallerSize = window.innerWidth < window.innerHeight ? window.innerWidth : window.innerHeight;
	var radius = smallerSize * .2;
	for (var i = 0; i < totalPoints; i++) {
		var circle = new Circle(
			radius,
			(window.innerWidth - radius * 2) * Math.random() + radius, 
			(window.innerHeight - radius * 2) * Math.random() + radius,
			color
		);
		view.stage.addChild(circle);
		interactionManager.addDragable(circle);
		this.circles.push(circle);
	}
	view.renderer.render(view.stage);

	RenderManager.add(view.renderer, view.stage);
	// RenderManager.onEnterFrame.add(function() {
	// 	circle.x = Math.random() * window.innerWidth;
	// 	circle.y = Math.random() * window.innerHeight;
	// });
	RenderManager.start();

}

module.exports = DragPad;