import Component from '@ember/component';
import layout from './template';
import { computed } from '@ember/object';

export default Component.extend({
  layout,
  tagName: '',

  type: null,

  displayedType: computed('type', function() {
    let type = this.get('type');
    if (type === 'blue') {
      return 'is-info';
    } else if (type === 'green') {
      return 'is-success';
    } else if (type === 'yellow') {
      return 'is-warning';
    } else if (type === 'red') {
      return 'is-danger';
    }
    return '';
  })
});