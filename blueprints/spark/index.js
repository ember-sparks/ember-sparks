var RSVP = require('rsvp');
var path = require('path');
var fs = require('fs');
var writeFile = RSVP.denodeify(fs.writeFile);

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

    return this.updateDummyConfig()
    .then(function() {
      blueprint.ui.writeLine('Updated tests/dummy/config/environment.js');

      return blueprint.addAddonsToProject({
        packages: [
          { name: 'ember-sparks-web' },
          { name: 'ember-css-modules' },
          { name: 'ember-ajax' },             // For getting README in dummy
          { name: 'ember-content-editable' }, // Display interactive code in dummy
          /*
           * Needed for Markdown parser
           * See: https://github.com/ef4/ember-browserify#using-ember-browserify-in-addons
           */
          { name: 'ember-browserify' },
        ],
        blueprintOptions: {
          saveDev: true,
        },
      });
    })
    .then(function() {
      return blueprint.addPackagesToProject([
        { name: 'autoprefixer' },
        { name: 'postcss-nesting' },
        { name: 'markdown-it' },
        { name: 'broccoli-funnel' },
      ]);
    })
    .then(function() {
      return blueprint.removePackageFromProject('ember-welcome-page');
    });
  },

  /*
   * Add the "sparks" part in dummy/config/environment.js for demo values:
   */
  updateDummyConfig: function() {
    var search = "    APP: {";
    var replace = `    sparks: {
      demo: {
        text: "Change this demo value in tests/dummy/config/environment.js",
      }
    },

    APP: {`;

    return this.replaceEnvironment(search, replace);
  },

  replaceEnvironment: function(search, replace) {
    var addon = this.project.pkg['ember-addon'];
    var configPath = addon ? addon.configPath : 'config';

    return this.replaceInFile(configPath + '/environment.js', search, replace);
  },

  replaceInFile: function(pathRelativeToProjectRoot, searchTerm, contentsToInsert) {
    var fullPath = path.join(this.project.root, pathRelativeToProjectRoot);
    var originalContents  = '';

    if (fs.existsSync(fullPath)) {
      originalContents = fs.readFileSync(fullPath, { encoding: 'utf8' });
    }

    var contentsToWrite = originalContents.replace(searchTerm, contentsToInsert);
    var returnValue = {
      path: fullPath,
      originalContents: originalContents,
      contents: contentsToWrite,
      inserted: false
    };

    if (contentsToWrite !== originalContents) {
      returnValue.inserted = true;

      return writeFile(fullPath, contentsToWrite)
        .then(function() {
          return returnValue;
        });
    } else {
      return RSVP.resolve(returnValue);
    }
  }

};
