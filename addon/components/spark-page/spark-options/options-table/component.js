import Ember from 'ember';

import layout from './template';
import styles from './styles';

export default Ember.Component.extend({
  layout,
  styles,

  localClassNames: 'table-container',

  tableTitles: Ember.computed('options', function() {
    let options = this.get('options');
    let firstOption = options && options[0];

    if (!firstOption) return;

    let titles = Object.keys(firstOption);

    /*
     * If the object contains the key "demo",
     * we want to replace the title with 2 titles:
     * "Example" and "Result":
     */
    let demoIndex = titles.indexOf("demo");

    if (demoIndex !== -1) {
      titles[demoIndex] = "example";
      titles.splice(demoIndex + 1, 0, "result");
    }

    return titles;
  }),

});

