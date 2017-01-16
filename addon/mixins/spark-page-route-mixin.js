import Ember from 'ember';
import { 
  getProperties,
  getActions,
  getTheming,
  getTitle,
  getDesc,
} from './html-to-json';

let md = window.markdownit();

export default Ember.Mixin.create({
  ajax: Ember.inject.service(),

  /*
   * Fetch data from the README.md file
   * and convert it to JS objects:
   */
  model() {
    return this.get('ajax').request('/README.md', {
      dataType: 'text',                              
    })
    .then((text) => {
      var html = md.render(text);

      let json = {};
      json.name       = getTitle(html);
      json.desc       = getDesc(html);
      json.properties = getProperties(html);
      json.actions    = getActions(html);
      json.theming    = getTheming(html);

      return json;
    })
    .catch((err) => {
      console.error(err);
    });
  },

  afterModel(model) {
    this._super(...arguments);

    let title = model.name + ' | Ember Sparks';

    document.title = title;
  },

});
