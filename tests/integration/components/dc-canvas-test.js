import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('dc-canvas', 'Integration | Component | dc canvas', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{dc-canvas}}`);
  assert.equal(this.$('#canvasInput').length, 1);
});

test('it does not render canvas when entering invalid command', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{dc-canvas}}`);
  Ember.$('#canvasInput').val('asdf asdfsda');
  Ember.$('#canvasInput').change();
  Ember.$('#canvasForm').submit();

  
  assert.equal(this.$('#canvasInput').length, 1);
  assert.equal(Ember.$('#dc-canvas').width(), 300);
  assert.equal(Ember.$('#dc-canvas').height(), 150);
  assert.equal(Ember.$('.ui.warning.message').get('length'), 1);
});



test('it render canvas for canvas drawing command', function(assert) {

  this.render(hbs`{{dc-canvas}}`);
  Ember.$('#canvasInput').val('C 120 200');
  Ember.$('#canvasInput').change();
  Ember.$('#canvasForm').submit();
  
  assert.equal(this.$('#canvasInput').length, 1);
  assert.equal(Ember.$('#dc-canvas').width(), 120);
  assert.equal(Ember.$('#dc-canvas').height(), 200);
  assert.equal(Ember.$('.ui.warning.message').get('length'), 0);
});

test('it quits for quit command', function(assert) {

  this.render(hbs`{{dc-canvas}}`);
  Ember.$('#canvasInput').val('Q');
  Ember.$('#canvasInput').change();
  Ember.$('#canvasForm').submit();
  
  assert.equal(this.$('#canvasInput').length, 1);
  assert.equal(Ember.$('#dc-canvas').width(), 300);
  assert.equal(Ember.$('#dc-canvas').height(), 150);
  assert.equal(Ember.$('.ui.warning.message').get('length'), 0);
});

test('it render canvas without any error for line drawing command', function(assert) {

  this.render(hbs`{{dc-canvas}}`);
  Ember.$('#canvasInput').val('L 120 200 10 20');
  Ember.$('#canvasInput').change();
  Ember.$('#canvasForm').submit();

  assert.equal(this.$('#canvasInput').length, 1);
  assert.equal(Ember.$('#dc-canvas').width(), 300);
  assert.equal(Ember.$('#dc-canvas').height(), 150);
  assert.equal(Ember.$('.ui.warning.message').get('length'), 0);
});

test('it render canvas without any error for bucket filling command', function(assert) {

  this.render(hbs`{{dc-canvas}}`);
  Ember.$('#canvasInput').val('B 120 200 blue');
  Ember.$('#canvasInput').change();
  Ember.$('#canvasForm').submit();

  assert.equal(this.$('#canvasInput').length, 1);
  assert.equal(Ember.$('#dc-canvas').width(), 300);
  assert.equal(Ember.$('#dc-canvas').height(), 150);
  assert.equal(Ember.$('.ui.warning.message').get('length'), 0);
});


