import Ember from 'ember';

export default Ember.Component.extend({
  localClassNames: 'container',

  setURLHash(targetId) {
    let targetURL = '';

    if (!targetId) {
      window.location.hash = '';
      return;
    }

    if (targetId) {
      targetURL = `#${targetId}`;
    }

    // Update URL without transitioning:
    Ember.run(function(){ 
      window.history.replaceState({} , targetId, targetURL);
    });
  },

  actions: {

    /*
     * We want the URL to automatically update as we scroll:
     */
    crossedTheLine(above) {
      let partId = this.get('id');
      let parts = this.get('parts');
      let targetId;

      if (above) {
        targetId = partId;
      } else {
        let obj = $.grep(parts, function(e) {
          return e.id === partId;
        })[0];

        let objIndex = parts.indexOf(obj);

        if (objIndex) {
          targetId = parts[objIndex - 1].id;
        }
      }

      this.setURLHash(targetId);
      this.sendAction('setActiveLink', targetId);
    },

  },

});

