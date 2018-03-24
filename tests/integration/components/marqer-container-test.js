import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | marqer-container', function(hooks) {
  setupRenderingTest(hooks);

  test('it has "container and is-fluid" classes', async function(assert) {
    await render(hbs`{{marqer-container}}`);

    let topElement = this.element.querySelector('div');
    assert.equal(topElement.classList.contains('container'), true);
    assert.equal(topElement.classList.contains('is-fluid'), true);
  });

  test('it has "container", not "is-fluid" class', async function(assert) {
    await render(hbs`{{marqer-container isFluid=false}}`);

    let topElement = this.element.querySelector('div');
    assert.equal(topElement.classList.contains('container'), true);
    assert.equal(topElement.classList.contains('is-fluid'), false);
  });

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{marqer-container}}`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      {{#marqer-container}}
        template block text
      {{/marqer-container}}
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
