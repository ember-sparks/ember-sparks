import Ember from 'ember';

import env from 'dummy/config/environment';

const initDemo = env.sparks && env.sparks.demo;

export default Ember.Mixin.create({

  config: Ember.computed('demo', 'model', function() {
    let config = this.get('model');

    let demo = this.get('demo');
    config.demo = demo;

    return config;
  }),

  demo: initDemo,

});
