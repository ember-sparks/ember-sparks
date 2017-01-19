import Ember from 'ember';

export default Ember.Component.extend({
  
  localClassNames: [
    '_container',
    'container',
    'style',
  ],

  classNameBindings: [
    'style',
  ],

});
