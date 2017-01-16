import Ember from 'ember';

import layout from './template';
import styles from './styles';

export default Ember.Component.extend({
  layout,
  styles,

  localClassNames: 'option',

  valueDidChange: Ember.observer('value', function() {
    let key = this.get('key');
    let value = this.get('value');

    this.attrs.didUpdate(key, value);
  }),

});

