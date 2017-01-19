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

    if (!isAddon) {
      throw "This command can only be run inside an addon project!";
    }

    let componentName = options.entity.name;
    let invalidComponentName = (componentName.indexOf('-') === -1);

    if (invalidComponentName) {
      throw "Invalid component name! Your component must have at least one dash (-) in it!";
    }
  },

  afterInstall: function() {
    let blueprint = this;

    return blueprint.addAddonsToProject({
      packages: [
        { name: 'ember-css-modules' },
        { name: 'ember-ajax' },             // For getting README in dummy
        { name: 'ember-content-editable' }, // Display interactive code in dummy
        // Needed for Markdown parser:
        // https://github.com/ef4/ember-browserify#using-ember-browserify-in-addons
        { name: 'ember-browserify' },
      ],
      blueprintOptions: {
        saveDev: true,
      },
    })
    .then(function() {
      return blueprint.addPackagesToProject([
        { name: 'autoprefixer' },
        { name: 'postcss-nesting' },
        { name: 'markdown-it' },
      ]);
    })
    .then(function() {
      return blueprint.removePackageFromProject('ember-welcome-page');
    });
  },

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  // afterInstall: function(options) {
  //   // Perform extra work here.
  // }
};
