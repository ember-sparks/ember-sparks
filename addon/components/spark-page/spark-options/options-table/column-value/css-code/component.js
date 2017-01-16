import Ember from 'ember';

import layout from './template';
import styles from './styles';

export default Ember.Component.extend({
  layout,
  styles,

  localClassNames: 'window',

  attributeBindings: [
    'topCurl:data-top-css',
  ],

  topCurl: Ember.computed('identifier', function() {
    let identifier = this.get('identifier');
    return `.${identifier} {`;
  }),

  declarations: Ember.computed('options', function() {
    let options = this.get('options');

    let declarations = {};

    for (let key in options) {
      let property = toDash(key);
      let value = options[key];
      declarations[property] = value;
    }

    return declarations;
  }),

});


/*
 * Convert camelCase strings to dash:
 */
function toDash(str) {
  return str.replace(/([A-Z])/g, (str) =>{
    return "-" + str.toLowerCase();
  });
}

