/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var Funnel = require('broccoli-funnel');
var Concat = require('broccoli-concat');
var Babel = require('broccoli-babel-transpiler');
var escapeRegExp = require('escape-string-regexp');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
    fingerprint: {
      generateAssetMap: true
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  // Experimental fastboot build spike
  /*var fastbootTree = new Funnel('fastboot-app', {
    srcDir: '/',
    destDir: app.name,
    annotation: 'Funnel: Fastboot App JS Files'
  });

  var amdNameResolver = require('amd-name-resolver').moduleResolve;
  babelOptions = {
    modules: 'amdStrict',
    moduleIds: true,
    resolveModuleSource: amdNameResolver
  };

  var es5 = Babel(fastbootTree, babelOptions);
  var finalFastbootTree = Concat(es5, {
    outputFile: '/assets/' + app.name + '-fastboot.js',
    annotation: 'Concat: Fastboot App'
  });*/

  return app.toTree();
};
