import Ember from 'ember';
import DcDrawCanvasMixin from 'drawing-app/mixins/dc-draw-canvas';
import { module, test } from 'qunit';

module('Unit | Mixin | dc draw canvas');

// Replace this with your real tests.
test('it works', function(assert) {
  let DcDrawCanvasObject = Ember.Object.extend(DcDrawCanvasMixin);
  let subject = DcDrawCanvasObject.create();
  assert.ok(subject);
});
