import Ember from 'ember';
import Constants from '../utils/constants';
import DcDrawCanvas from '../mixins/dc-draw-canvas';

export default Ember.Component.extend(DcDrawCanvas, {
	canvasModel: null,
	consoleInput: null,
	store: Ember.inject.service(),
	FALLBACK_MESSAGE: Constants.MESSAGES.FALLBACK_MESSAGE,
	init() {
		this._super(...arguments);
		this.initCanvasModel();
	},
	initCanvasModel() {
		this.set('canvasModel', this.get('store').createRecord('dc-canvas', {}));
	},
	onConsoleInput: Ember.on('init', Ember.observer('consoleInput', function() {
		Ember.run.debounce(this, function() {
			if(Ember.isBlank(this.get('consoleInput'))) {
				this.resetCanvasInputState();
			}
		}, 500);
	})),
	resetCanvasInputState() {
		this.set('consoleInput', '');
		this.get('canvasModel').clearErrors();
	},
	actions: {
		drawCanvas() {
			if(Ember.isBlank(this.get('consoleInput'))) {
				this.get('canvasModel').clearErrors();
				return;
			}
			let consoleInput = this.get('consoleInput').toUpperCase(),
				[ canvasType, param1, param2, param3, param4 ] = consoleInput.trim().split(/\s+/);

			this.get('canvasModel').set("canvasType", canvasType);
			this.get('canvasModel').set("param1", param1);
			this.get('canvasModel').set("param2", param2);
			this.get('canvasModel').set("param3", param3);
			this.get('canvasModel').set("param4", param4);

			if(this.get('canvasModel.isQuitCommand')) {
				this.resetCanvasInputState();
				this.cleanCanvas();
				return;
			}

			if(this.get('canvasModel').validate()){
				this.drawCanvas();
				this.resetCanvasInputState();
			}
		}
	}
});
