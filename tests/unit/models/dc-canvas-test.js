import  Ember from 'ember';
import { moduleForModel, test } from 'ember-qunit';

moduleForModel('dc-canvas', 'Unit | Model | dc canvas', {
  // Specify the other units that are required for this test.
  needs: []
});

let Errors = {
	parseErrors(errors) {
		return errors.map(function(e) { 
			return { 'attr': e.attribute, 'message': e.message[0]};
		});
	},
	parseErrorFor(paramName, errors) {
		let errorOBject = Errors.parseErrors(errors).findBy('attr', paramName);
		return errorOBject && errorOBject.message;
	}
};

/* Command type first param*/
test('it validates command type if command is unknown ', function(assert) {
	let model = this.subject(), modelValidated;
	Ember.run(function() {
		model.set('canvasType', 'asdfdsaf')
		modelValidated = model.validate();
	});
	assert.equal(modelValidated, false);
	assert.equal(model.get('hasErrors'), true);
	assert.equal(Errors.parseErrorFor('canvasType', model.get('errors')), 'Command Type is invalid.');
});

test('it validates command type if command is numeric ', function(assert) {
	let model = this.subject(), modelValidated;
	Ember.run(function() {
		model.set('canvasType', 123123 )
		modelValidated = model.validate();
	});
	assert.equal(modelValidated, false);
	assert.equal(model.get('hasErrors'), true);
	assert.equal(Errors.parseErrorFor('canvasType', model.get('errors')), 'Command Type is invalid.');
});

/* Canvas creation*/
test('it validates params for drawing canvas if input params are not provided ', function(assert) {
	let model = this.subject(), modelValidated;
	Ember.run(function() {
		model.set('canvasType', 'C');
		model.set('param1', undefined);
		model.set('param2', undefined);
		modelValidated = model.validate();
	});
	assert.equal(modelValidated, false);
	assert.equal(model.get('hasErrors'), true);
	assert.equal(Errors.parseErrorFor('param1', model.get('errors')), 'Width is invalid.');
	assert.equal(Errors.parseErrorFor('param2', model.get('errors')), 'Height is invalid.');
});

test('it validates params for drawing canvas if input params are string ', function(assert) {
	let model = this.subject(), modelValidated;
	Ember.run(function() {
		model.set('canvasType', 'C');
		model.set('param1', 'dddd');
		model.set('param2', 'xxxx');
		modelValidated = model.validate();
	});
	assert.equal(modelValidated, false);
	assert.equal(model.get('hasErrors'), true);
	assert.equal(Errors.parseErrorFor('param1', model.get('errors')), 'Width is invalid.');
	assert.equal(Errors.parseErrorFor('param2', model.get('errors')), 'Height is invalid.');
});

test('it validates params for drawing canvas if input params are numeric ', function(assert) {
	let model = this.subject(),
		modelValidated;
	Ember.run(function() {
		model.set('canvasType', 'C');
		model.set('param1', 100);
		model.set('param2', 100);
		modelValidated = model.validate();
	});
	assert.equal(modelValidated, true);
	assert.equal(model.get('hasErrors'), false);
	assert.equal(Errors.parseErrorFor('param1', model.get('errors')), undefined);
	assert.equal(Errors.parseErrorFor('param2', model.get('errors')), undefined);
});


/* Line drawing */
test('it validates params for drawing line if input params are not provided ', function(assert) {
	let model = this.subject(), modelValidated;
	Ember.run(function() {
		model.set('canvasType', 'L');
		model.set('param1', undefined);
		model.set('param2', undefined);
		model.set('param3', undefined);
		model.set('param4', undefined);
		modelValidated = model.validate();
	});
	assert.equal(modelValidated, false);
	assert.equal(model.get('hasErrors'), true);
	assert.equal(Errors.parseErrorFor('param1', model.get('errors')), 'x1 is invalid.');
	assert.equal(Errors.parseErrorFor('param2', model.get('errors')), 'y1 is invalid.');
	assert.equal(Errors.parseErrorFor('param3', model.get('errors')), 'x2 is invalid.');
	assert.equal(Errors.parseErrorFor('param4', model.get('errors')), 'y2 is invalid.');
});

test('it validates params for drawing line if input params are string ', function(assert) {
	let model = this.subject(), modelValidated;
	Ember.run(function() {
		model.set('canvasType', 'L');
		model.set('param1', 'asdfsd');
		model.set('param2', 'asdfsd');
		model.set('param3', 'asdfsd');
		model.set('param4', 'asdfsd');
		modelValidated = model.validate();
	});
	assert.equal(modelValidated, false);
	assert.equal(model.get('hasErrors'), true);
	assert.equal(Errors.parseErrorFor('param1', model.get('errors')), 'x1 is invalid.');
	assert.equal(Errors.parseErrorFor('param2', model.get('errors')), 'y1 is invalid.');
	assert.equal(Errors.parseErrorFor('param3', model.get('errors')), 'x2 is invalid.');
	assert.equal(Errors.parseErrorFor('param4', model.get('errors')), 'y2 is invalid.');
});

test('it validates params for drawing line if input params are numeric ', function(assert) {
	let model = this.subject(),
		modelValidated;
	Ember.run(function() {
		model.set('canvasType', 'L');
		model.set('param1', 10);
		model.set('param2', 100);
		model.set('param3', 20);
		model.set('param4', 100);
		modelValidated = model.validate();
	});
	assert.equal(modelValidated, true);
	assert.equal(model.get('hasErrors'), false);
	assert.equal(Errors.parseErrorFor('param1', model.get('errors')), undefined);
	assert.equal(Errors.parseErrorFor('param2', model.get('errors')), undefined);
	assert.equal(Errors.parseErrorFor('param3', model.get('errors')), undefined);
	assert.equal(Errors.parseErrorFor('param4', model.get('errors')), undefined);
});

/* Rectangle drawing */
test('it validates params for drawing Rectangle if input params are not provided ', function(assert) {
	let model = this.subject(), modelValidated;
	Ember.run(function() {
		model.set('canvasType', 'R');
		model.set('param1', undefined);
		model.set('param2', undefined);
		model.set('param3', undefined);
		model.set('param4', undefined);
		modelValidated = model.validate();
	});
	assert.equal(modelValidated, false);
	assert.equal(model.get('hasErrors'), true);
	assert.equal(Errors.parseErrorFor('param1', model.get('errors')), 'x1 is invalid.');
	assert.equal(Errors.parseErrorFor('param2', model.get('errors')), 'y1 is invalid.');
	assert.equal(Errors.parseErrorFor('param3', model.get('errors')), 'x2 is invalid.');
	assert.equal(Errors.parseErrorFor('param4', model.get('errors')), 'y2 is invalid.');
});

test('it validates params for drawing Rectangle if input params are string ', function(assert) {
	let model = this.subject(), modelValidated;
	Ember.run(function() {
		model.set('canvasType', 'R');
		model.set('param1', 'asdfsd');
		model.set('param2', 'asdfsd');
		model.set('param3', 'asdfsd');
		model.set('param4', 'asdfsd');
		modelValidated = model.validate();
	});
	assert.equal(modelValidated, false);
	assert.equal(model.get('hasErrors'), true);
	assert.equal(Errors.parseErrorFor('param1', model.get('errors')), 'x1 is invalid.');
	assert.equal(Errors.parseErrorFor('param2', model.get('errors')), 'y1 is invalid.');
	assert.equal(Errors.parseErrorFor('param3', model.get('errors')), 'x2 is invalid.');
	assert.equal(Errors.parseErrorFor('param4', model.get('errors')), 'y2 is invalid.');
});

test('it validates params for drawing Rectangle if input params are numeric ', function(assert) {
	let model = this.subject(),
		modelValidated;
	Ember.run(function() {
		model.set('canvasType', 'R');
		model.set('param1', 10);
		model.set('param2', 100);
		model.set('param3', 20);
		model.set('param4', 100);
		modelValidated = model.validate();
	});
	assert.equal(modelValidated, true);
	assert.equal(model.get('hasErrors'), false);
	assert.equal(Errors.parseErrorFor('param1', model.get('errors')), undefined);
	assert.equal(Errors.parseErrorFor('param2', model.get('errors')), undefined);
	assert.equal(Errors.parseErrorFor('param3', model.get('errors')), undefined);
	assert.equal(Errors.parseErrorFor('param4', model.get('errors')), undefined);
});

/* Bucket filling drawing */
test('it validates params for drawing Bucket filling if input params are not provided ', function(assert) {
	let model = this.subject(), modelValidated;
	Ember.run(function() {
		model.set('canvasType', 'B');
		model.set('param1', undefined);
		model.set('param2', undefined);
		model.set('param3', undefined);
		modelValidated = model.validate();
	});
	assert.equal(modelValidated, false);
	assert.equal(model.get('hasErrors'), true);
	assert.equal(Errors.parseErrorFor('param1', model.get('errors')), 'x is invalid.');
	assert.equal(Errors.parseErrorFor('param2', model.get('errors')), 'y is invalid.');
	assert.equal(Errors.parseErrorFor('param3', model.get('errors')), 'Color is invalid.');
});

test('it validates params for drawing Bucket filling if input params are string ', function(assert) {
	let model = this.subject(), modelValidated;
	Ember.run(function() {
		model.set('canvasType', 'B');
		model.set('param1', 'asdfsd');
		model.set('param2', 'asdfsd');
		modelValidated = model.validate();
	});
	assert.equal(modelValidated, false);
	assert.equal(model.get('hasErrors'), true);
	assert.equal(Errors.parseErrorFor('param1', model.get('errors')), 'x is invalid.');
	assert.equal(Errors.parseErrorFor('param2', model.get('errors')), 'y is invalid.');
});

test('it validates params for drawing Bucket filling if input params are numeric ', function(assert) {
	let model = this.subject(),
		modelValidated;
	Ember.run(function() {
		model.set('canvasType', 'B');
		model.set('param1', 10);
		model.set('param2', 100);
		model.set('param3', 'red');
		modelValidated = model.validate();
	});
	assert.equal(modelValidated, true);
	assert.equal(model.get('hasErrors'), false);
	assert.equal(Errors.parseErrorFor('param1', model.get('errors')), undefined);
	assert.equal(Errors.parseErrorFor('param2', model.get('errors')), undefined);
	assert.equal(Errors.parseErrorFor('param3', model.get('errors')), undefined);
});

/* Quite */
test('it validates command for quit', function(assert) {
	let model = this.subject(), modelValidated;
	Ember.run(function() {
		model.set('canvasType', 'Q');
		modelValidated = model.validate();
	});
	assert.equal(modelValidated, true);
	assert.equal(model.get('hasErrors'), false);
	assert.equal(Errors.parseErrorFor('canvasType', model.get('errors')), undefined);
});