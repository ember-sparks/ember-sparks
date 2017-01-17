import Ember from 'ember';

export default Ember.Controller.extend({
  
  actions: {
    toggleComponentsInMenu(value) {
      this.set('showComponentsInMenu', value);
    },
  },

});

