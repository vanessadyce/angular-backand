### Description

This is a prototype application that demonstrates how Angular can be used with Backand.

### Setup
Install bower and npm dependencies, and run the application in development mode.

    $ npm install
    $ bower install
    $ gulp serve
    $ gulp serve: dist -- when ready for production

### Features

* Backand SDK included, just sign in to your app and the entire back-end is ready.
* 5 simple task: `gulp serve`,`gulp serve:dist`, `gulp serve:tdd`, `gulp test:unit`, `gulp test:e2e`
* JavaScript file continuous linting with `jshint`.
* SASS continuous compiling.
* `Unit` and `e2e` testing support. (for `e2e` testing you need to have a java runtine installed, take a look at [selenium JavaScript api ](http://selenium.googlecode.com/git/docs/api/javascript/index.html) and [protractor](https://github.com/angular/protractor) for more informations.
* HTML templates converted into strings and attached to a single javascript file (to avoid one http call for each template).
* Livereload provided by [browsersync](http://www.browsersync.io/).
* angular module dependencies automatically injected using [ng-annotate](https://github.com/olov/ng-annotate).
* Static resources minification and optimization for production.
* sourcemaps generated and embedded in JavaScript and css files during the production optimization.

### Directory Structure

* `build/` - Build files and configuration, the most important files to note are `build.config.js`, `protractor.config.js` and `karma.config.js`. These files are the heart of the build system. Take a look.
* `client/` the source code and tests of your application, take a look at the modules in this folder, you should structure your application following those conventions, but you can choose another convention as well.
* `.bowerrc` - the bower configuration file. This tells Bower to install components in the `client/src/vendor` directory.
* `.jshintrc` - JSHint configuration.
* `gulpfile` - see [The Build System](#thebuildsystem) below.
* `bower.json` - Contains the list of bower dependencies.
* `package.json` - node.js dependencies.



