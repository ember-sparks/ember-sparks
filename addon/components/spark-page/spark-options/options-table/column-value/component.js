import Ember from 'ember';

import layout from './template';
import styles from './styles';

export default Ember.Component.extend({
  layout,
  styles,

  tagName: '',

  isCSSClass: Ember.computed('title', 'name', function() {
    let title = this.get('title');
    let name = this.get('name');

    return (title === "theming" && name === "name");
  }),

  /*
   * We want class names to have a "."
   * prepended to them for clarity:
   */
  columnValue: Ember.computed('value', 'isCSSClass', function() {
    let isCSSClass = this.get('isCSSClass');
    let value = this.get('value');

    // Don't show a "null" string:
    if (value === "null") value = null;

    return (isCSSClass) ? `.${value}` : value;
  }),

  isDemo: Ember.computed('name', function() {
    return this.get('name') === 'demo';
  }),

});

