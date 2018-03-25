import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | marqer-columns', function(hooks) {
  setupRenderingTest(hooks);

  test('it has class name of "columns"', async function(assert) {
    await render(hbs`{{marqer-columns}}`);

    assert.equal(this.element.querySelector('div').classList.toString(), 'columns');
  });

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{marqer-columns}}`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      {{#marqer-columns}}
        template block text
      {{/marqer-columns}}
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
