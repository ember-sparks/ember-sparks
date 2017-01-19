import Ember from 'ember';

/*
 * Generates both public ("input")
 * and private ("_input") class names
 * to be used with ember-css-modules
 */
export default function SparkClass(params) {
  let result = "";

  params.forEach((className) => {
    result += `_${className} ${className}`;
  });

  return result;
}


export default Ember.Helper.helper(SparkClass);
