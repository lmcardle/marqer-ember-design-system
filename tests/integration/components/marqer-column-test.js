import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | marqer-column', function(hooks) {
  setupRenderingTest(hooks);

  test('it has "column class', async function(assert) {
    await render(hbs`{{marqer-column}}`);

    assert.equal(this.element.querySelector('div').classList.toString(), 'column');
  });

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{marqer-column}}`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      {{#marqer-column}}
        template block text
      {{/marqer-column}}
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
