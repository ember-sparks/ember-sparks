import Ember from 'ember';

import styleClasses from 'ember-input-spark/components/input-spark/styles';

import layout from './template';
import styles from './styles';

export default Ember.Component.extend({
  layout,
  styles,

  styleClasses,

  styleClass: Ember.computed('styleClasses', 'identifier', function() {
    let styleClasses = this.get('styleClasses');
    let identifier = this.get('identifier');

    let privateIdentifier = "_" + identifier;
    return styleClasses[privateIdentifier];
  }),

  didInsertElement() {
    Ember.run.scheduleOnce('afterRender', () => {
      this.addStyling();
      this.observeDOM();
    });
  },

  /*
   * Sometimes, DOM elements are added/removed in the component,
   * therefore, we need to listen to changes, so that we can
   * apply the styles whenever things change:
   */
  observeDOM() {
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
    // select the target node
    var target = this.$().get(0);

    // create an observer instance
    var observer = new MutationObserver(() => {
      this.addStyling();
    });
     
    // configuration of the observer:
    var config = {
      //attributes: true,
      childList: true,
      subtree: true,
    };
     
    // pass in the target node, as well as the observer options
    observer.observe(target, config);
  },

  addStyling() {
    let styleClass = this.get('styleClass');
    let $component = this.$(`.${styleClass}`);

    let options = this.get('options');

    $component.css(options);
  },

});


