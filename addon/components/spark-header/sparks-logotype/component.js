import Ember from 'ember';

import layout from './template';
import styles from './styles';

export default Ember.Component.extend({
  layout,
  styles,

  localClassNames: 'logotype',
  localClassNameBindings: 'invert',

  invert: false,

});

