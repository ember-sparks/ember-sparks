import Ember from 'ember';

export default Ember.Component.extend({

  localClassNames: 'container',

  actions: {
    toggleComponents(value) {
      this.sendAction('toggleComponents', value);
    },
  },

});

