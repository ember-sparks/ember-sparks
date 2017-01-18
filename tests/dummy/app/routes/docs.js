import Ember from 'ember';

export default Ember.Route.extend({
  scroller: Ember.inject.service(),

  activate() {
    let hash = window.location.hash;

    if (!hash) {
      return;
    }

    Ember.run.scheduleOnce('afterRender', () => {
      this.get('scroller').scrollVertical(hash, {
        duration: 1,
      });
    });
  },

});
