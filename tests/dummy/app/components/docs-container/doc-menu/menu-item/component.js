import Ember from 'ember';

export default Ember.Component.extend({

  localClassNameBindings: [
    'isActiveLink',
  ],

  isActiveLink: Ember.computed('part.id', 'activeLinkId', function() {
    let linkId = this.get('part.id');
    let activeLinkId = this.get('activeLinkId');

    return linkId === activeLinkId;
  }),

});

