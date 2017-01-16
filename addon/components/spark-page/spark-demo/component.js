import Ember from 'ember';

import layout from './template';
import styles from './styles';

export default Ember.Component.extend({
  layout,
  styles,

  localClassNames: 'demo-container',

  actions: {

    didUpdate(key, value) {
      if (!key) return;

      this.set(`config.demo.${key}`, value);
    },
  
  },

});

