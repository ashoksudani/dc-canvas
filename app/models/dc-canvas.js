import DS from 'ember-data';
import Validator from '../mixins/model-validator';
import Constants from '../utils/constants';

export default DS.Model.extend(Validator, {
	canvasType: DS.attr('string'),
	param1: DS.attr('number'),
	param2: DS.attr('number'),
	param3: DS.attr('string'),
	param4: DS.attr('number'),

	isParam3ToValidate: Ember.computed('canvasType', function() {
		return !Ember.isBlank(this.get('canvasType')) && ['L','R', 'B'].includes(this.get('canvasType'));
	}),
	isParam4ToValidate: Ember.computed('canvasType', function() {
		return !Ember.isBlank(this.get('canvasType')) && ['L','R'].includes(this.get('canvasType'));
	}),
	isFillCommand: Ember.computed('canvasType', function() {
		return !Ember.isBlank(this.get('canvasType')) && 'B' === this.get('canvasType');
	}),
	isQuitCommand: Ember.computed.equal('canvasType', 'Q'),
	
	validations: {
		param1:  {
			custom: {
				if: function(key, value, model) {
					return !model.get('isQuitCommand');
				},
		        validation: function(key, value, model) {
		          return !isNaN(Number(model.get('param1')));
		        },
		        message: function(key, value, model) {
		          return Constants.PARAMS_ASSOCIATES.PARAM1[model.get('canvasType')] + 
		          	' is not valid';
		        }
		     }
	    },
		param2:  {
			custom: {
				if: function(key, value, model) {
					return !model.get('isQuitCommand');
				},
		        validation: function(key, value, model) {
		          return !isNaN(Number(model.get('param2')));
		        },
		        message: function(key, value, model) {
		          return Constants.PARAMS_ASSOCIATES.PARAM2[model.get('canvasType')] + 
		          	' is not valid';
		        }
		    }
	    },
	    param3:  {
	    	custom: {
	    		if: function(key, value, model) {
					return !model.get('isQuitCommand') && model.get('isParam3ToValidate');
				},
		        validation: function(key, value, model) {
		          if(model.get('isFillCommand')) {
		          	return !Ember.isBlank(model.get('param3'));
		          }

		          return !isNaN(Number(model.get('param3')));
		        },
		        message: function(key, value, model) {
		          return Constants.PARAMS_ASSOCIATES.PARAM3[model.get('canvasType')] + 
		          	' is not valid';
		        }
		    }
	    },
	    param4:  {
	    	custom: {
	    		if: function(key, value, model) {
					return !model.get('isQuitCommand') && model.get('isParam4ToValidate');
				},
		        validation: function(key, value, model) {
		          return !isNaN(Number(model.get('param4')));
		        },
		        message: function(key, value, model) {
		          return Constants.PARAMS_ASSOCIATES.PARAM4[this.get('canvasType')] + 
		          	' is not valid';
		        }
		    }
	    }
	},

	width: Ember.computed.oneWay('param1'),
	height: Ember.computed.oneWay('param2'),

	x1: Ember.computed.oneWay('param1'),
	y1: Ember.computed.oneWay('param2'),
	x2: Ember.computed('param3', function() {
		return Number(this.get('param3'));
	}),
	y2: Ember.computed.oneWay('param4'),

	fillColor: Ember.computed.oneWay('param3'),

});

