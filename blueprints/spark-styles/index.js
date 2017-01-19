/*jshint node:true*/
module.exports = {
  description: 'Generates a Spark component (addon projects only)',

  fileMapTokens: function(options) {
    return {
      __componentToken__: function(options) {
        return options.dasherizedModuleName;
      }
    }
  },

  beforeInstall: function(options) {
    let isAddon = options.project.pkg['ember-addon'];

    if (isAddon) {
      throw "This command cannot be run inside an addon project!";
    }

    let componentName = options.entity.name;
    let invalidComponentName = (componentName.indexOf('-') === -1);

    if (invalidComponentName) {
      throw "Invalid component name! Your component should have at least one dash (-) in it!";
    }
  },

};
