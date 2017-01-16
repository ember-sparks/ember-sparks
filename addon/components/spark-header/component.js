import Ember from 'ember';
const $ = Ember.$;

import layout from './template';
import styles from './styles';

/*
 * Turn header transparent after scrolling
 * down a few pixels:
 */
const HEADER_OFFSET = 100;

export default Ember.Component.extend({
  layout,
  styles,

  tagName: 'nav',
  localClassNames: 'nav',
  localClassNameBindings: [
    'isSmall',
  ],

  isSmall: false,

  invertLogoColors: Ember.computed('isSmall', function() {
    return !this.get('isSmall');
  }),

  _scrollListener: null,

  didInsertElement() {
    this._scrollListener = Ember.run.bind(this, this.didScroll);

    $(window).on('scroll', this._scrollListener);
  },

  willDestroyElement() {
    if (this._scrollListener) {
      $(window).off('scroll', this._scrollListener);
    }
  },

  didScroll() {
    let scrollPos = $(window).scrollTop();

    let reachedOffset = (scrollPos > HEADER_OFFSET);

    this.set('isSmall', reachedOffset);
  },
});
