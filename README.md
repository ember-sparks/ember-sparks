<p align="center">
  <a href="https://ember-sparks.github.io">
    <img alt="Ember Sparks" src="https://ember-sparks.github.io/images/logotype.png" width="350">
  </a>
</p>

<p align="center">
  Ambitious UI components for Ember apps
</p>

<p align="center">
  <a href="https://badge.fury.io/js/ember-sparks"><img src="https://badge.fury.io/js/ember-sparks.svg" alt="npm version" height="18"></a>
</p>

---

Ember Sparks aims to create a new set of default UI components that can be used in all Ember apps. 

By using the power of [ember-css-modules](https://github.com/salsify/ember-css-modules) and the Ember ecosystem's emphasis on conventions, addon authors can effortlessly share UI elements that have sane defaults, but are also incredibly easy to customize.


## Install

```bash
ember install ember-sparks
```

Restart your app after the installation and you're ready to go!


## Usage

Ember Sparks comes with some handy preinstalled components, such as `{{input-spark}}` and `{{toggle-spark}}`.

You can use them simply by dropping them into your template:

```handlebars
{{input-spark
	placeholder="your-username"
	prefix="ludu.co/@"
}}
```

Check out the [official website](https://ember-sparks.github.io)'s "Components" menu to see a list of all the built-in Sparks.


## Theming

Customizing components created with Ember Sparks is much simpler and more maintaineable than with most other UI libraries thanks to ember-css-modules. To learn more, check out the ["Theming" section](https://ember-sparks.github.io/docs#theming) in the official docs!


## Contribute

With Ember Sparks own generator, you can easily create your own Spark components as addons. To learn more, check out the ["Contribute" section](https://ember-sparks.github.io/docs#contribute) in the official docs!

