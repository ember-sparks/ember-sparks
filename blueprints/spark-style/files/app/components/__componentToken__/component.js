import SparkComponent from 'ember-sparks/components/<%= dasherizedModuleName %>/component';

import defaultStyles from 'ember-sparks/components/<%= dasherizedModuleName %>/styles';

import styles from './styles';

export default SparkComponent.extend({
  styles: Object.assign(defaultStyles, styles),
});

