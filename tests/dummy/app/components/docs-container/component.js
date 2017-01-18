import Ember from 'ember';

export default Ember.Component.extend({
  localClassNames: 'container',

  parts: [
    {
      title: "Why?",
      id: 'why',
    },
    {
      title: "Install",
      id: 'install',
    },
    {
      title: "Usage",
      id: "usage",
    },
    {
      title: "Theming",
      id: "theming",
    },
    {
      title: "Contribute",
      id: "contribute",
    }
  ],

  actions: {

    setActiveLink(activeLinkId) {
      this.set('activeLinkId', activeLinkId);
    },

  },

});

