import Ember from 'ember';
import Constants from '../utils/constants';

export default Ember.Mixin.create({
	drawCanvas() {
		let canvasModel = this.get('canvasModel'),
			drawFunctions= {
				'C': 'drawCanvasOnly',
				'L': 'drawLine',
				'R': 'drawRectangle',
				'B' : 'drawBucketFill'
			};

		this[drawFunctions[canvasModel.get('canvasType')]]();	
	},
	getCanvasDomEl() {
		return this.$('#dc-canvas')[0];
	},
	getCanvasContext() {
		let canvas = this.getCanvasDomEl();
		if(canvas && canvas.getContext) {
			return canvas.getContext('2d');
		}
	},
	drawCanvasOnly() {
		let canvas = this.getCanvasDomEl(),
			canvasModel = this.get('canvasModel'),
			context = this.getCanvasContext(),
			width= canvasModel.get('width'),
			height= canvasModel.get('height');
		if(canvas && context) {
			this.resetCanwasWith(canvas, context, width, height);
		}
	},
	drawLine() {
		let canvasModel = this.get('canvasModel'),
			context = this.getCanvasContext();
		if(context) {
			context.beginPath();
			context.moveTo(canvasModel.get('x1'), canvasModel.get('y1'));
			context.lineTo(canvasModel.get('x2'), canvasModel.get('y2'));
			context.stroke();
		}
	},
	drawRectangle() {
		let canvasModel = this.get('canvasModel'),
			context = this.getCanvasContext();
		if(context) {
			context.beginPath();
			context.moveTo(canvasModel.get('x1'), canvasModel.get('y1'));
			context.lineTo(canvasModel.get('x2'), canvasModel.get('y1'));
			context.lineTo(canvasModel.get('x2'), canvasModel.get('y2'));
			context.lineTo(canvasModel.get('x1'), canvasModel.get('y2'));
			context.lineTo(canvasModel.get('x1'), canvasModel.get('y1'));
			context.stroke();
		}
	},
	drawBucketFill() {
		let canvasModel = this.get('canvasModel'),
			context = this.getCanvasContext();
		if(context) {
			context.beginPath();
			context.rect(0, 0, canvasModel.get('x1'), canvasModel.get('y1'));
			context.fillStyle = canvasModel.get('fillColor');
			context.fill();
		}	
	},
	cleanCanvas() {
		let canvas = this.getCanvasDomEl(),
			context = this.getCanvasContext(),
			width= Constants.CANVAS.DEFAULT_WIDTH,
			height= Constants.CANVAS.DEFAULT_HEIGHT;

		if(canvas && context) {
			this.resetCanwasWith(canvas, context, width, height);
		}
	},
	resetCanwasWith(canvas, context, width, height) {
		canvas.width =  width;
		canvas.height = height;
		context.clearRect(0, 0, width, height);
		context.strokeRect(0, 0, width, height);
	}

});
