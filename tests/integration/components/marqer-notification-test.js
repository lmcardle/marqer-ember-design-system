import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | marqer-notification', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders is-info class', async function(assert) {
    await render(hbs`{{marqer-notification type="blue"}}`);

    let topElement = this.element.querySelector('p');
    assert.equal(topElement.classList.contains('is-info'), true, 'bule is displayed');
    assert.equal(topElement.classList.contains('is-success'), false, 'green is not displayed');
    assert.equal(topElement.classList.contains('is-warning'), false, 'yellow is not displayed');
    assert.equal(topElement.classList.contains('is-danger'), false, 'red is not displayed');
  });

  test('it renders is-success class', async function(assert) {
    await render(hbs`{{marqer-notification type="green"}}`);

    let topElement = this.element.querySelector('p');
    assert.equal(topElement.classList.contains('is-info'), false, 'blue is not displayed');
    assert.equal(topElement.classList.contains('is-success'), true, 'green is displayed');
    assert.equal(topElement.classList.contains('is-warning'), false, 'yellow is not displayed');
    assert.equal(topElement.classList.contains('is-danger'), false, 'red is not displayed');
  });

  test('it renders is-warning class', async function(assert) {
    await render(hbs`{{marqer-notification type="yellow"}}`);

    let topElement = this.element.querySelector('p');
    assert.equal(topElement.classList.contains('is-info'), false, 'blue is not displayed');
    assert.equal(topElement.classList.contains('is-success'), false, 'green is not displayed');
    assert.equal(topElement.classList.contains('is-warning'), true, 'yellow is displayed');
    assert.equal(topElement.classList.contains('is-danger'), false, 'red is not displayed');
  });

  test('it renders is-warning class', async function(assert) {
    await render(hbs`{{marqer-notification type="red"}}`);

    let topElement = this.element.querySelector('p');
    assert.equal(topElement.classList.contains('is-info'), false, 'blue is not displayed');
    assert.equal(topElement.classList.contains('is-success'), false, 'green is not displayed');
    assert.equal(topElement.classList.contains('is-warning'), false, 'yellow is not displayed');
    assert.equal(topElement.classList.contains('is-danger'), true, 'red is displayed');
  });

  test('it has correct default element attributes', async function(assert) {
    await render(hbs`{{marqer-notification}}`);

    assert.equal(this.element.firstChild.nodeName, "P");

    let topElement = this.element.querySelector('p');
    assert.equal(topElement.classList.contains('notification'), true);
  });

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{marqer-notification}}`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      {{#marqer-notification}}
        template block text
      {{/marqer-notification}}
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
