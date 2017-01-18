import Ember from 'ember';

export default Ember.Controller.extend({
  application: Ember.inject.controller(),

  actions: {
    toggleComponentsInMenu(value) {
      this.get('application').send('toggleComponentsInMenu', value);
    },
  },
  
});

