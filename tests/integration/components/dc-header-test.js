import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('dc-header', 'Integration | Component | dc header', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  // Template block usage:
  this.render(hbs`{{dc-header}}`);

  assert.equal(this.$().text().trim(), 'Drawing Console Application');
});
